import { Box } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { ChangeEvent, FC } from 'react';
import { useWatch } from 'react-hook-form';

import { ISuiPSVG, ISuiYNSVG } from '@/components/svg/v2';
import { ISUI_PRINCIPAL_TYPE, ISUI_YIELD_TYPE } from '@/constants/lst';
import { FixedPointMath } from '@/lib';
import {
  formatDollars,
  formatMoney,
  parseInputEventToNumberString,
} from '@/utils';

import { useBondsContext } from '../../bonds.hooks';
import MoneyInput from '../../components/money-input';

interface UnstakeInputProps {
  suiPrice: number;
  exchangeRate: number;
  totalBalance: BigNumber;
}

const UnstakeInput: FC<UnstakeInputProps> = ({
  suiPrice,
  totalBalance,
  exchangeRate,
}) => {
  const {
    form: { control, register, setValue },
  } = useBondsContext();
  const tokens = useWatch({ control, name: 'tokens' });

  const haveiSuiP = tokens.includes(ISUI_PRINCIPAL_TYPE);
  const haveiSuiYn = tokens.includes(ISUI_YIELD_TYPE);

  return (
    <MoneyInput
      control={control}
      balance={formatMoney(FixedPointMath.toNumber(totalBalance))}
      Prefix={
        <Box display="flex" gap="s">
          {haveiSuiP && (
            <ISuiPSVG
              maxHeight="3rem"
              maxWidth="3rem"
              height="100%"
              width="100%"
            />
          )}
          {haveiSuiYn && (
            <ISuiYNSVG
              maxHeight="3rem"
              maxWidth="3rem"
              height="100%"
              width="100%"
            />
          )}
        </Box>
      }
      onChangeValue={(value: number) => {
        setValue(
          'amount',
          FixedPointMath.toNumber(
            totalBalance.dividedBy(BigNumber(100 / value))
          ).toString()
        );
        setValue(
          'amountUSD',
          formatDollars(
            FixedPointMath.toNumber(
              totalBalance.dividedBy(BigNumber(100 / value))
            ) *
              suiPrice *
              exchangeRate
          )
        );
      }}
      {...register('amount', {
        onChange: (v: ChangeEvent<HTMLInputElement>) => {
          setValue('amount', parseInputEventToNumberString(v));
          setValue(
            'amountUSD',
            formatDollars(
              Number(parseInputEventToNumberString(v)) * suiPrice * exchangeRate
            )
          );
        },
      })}
    />
  );
};

export default UnstakeInput;
