import { Box } from '@interest-protocol/ui-kit';
import { ChangeEvent, FC } from 'react';
import { useWatch } from 'react-hook-form';

import { ISuiPSVG, ISuiYNSVG } from '@/components/svg/v2';
import {
  formatDollars,
  formatMoney,
  parseInputEventToNumberString,
} from '@/utils';

import { useLstData } from '../../../lst.hooks';
import { useBondsContext } from '../../bonds.hooks';
import MoneyInput from '../../components/money-input';

const UnstakeInput: FC = () => {
  const exchangeRate = 1;
  const {
    form: { control, register, setValue },
  } = useBondsContext();
  const { suiCoinInfo } = useLstData();
  const { couponType, principalType } = useBondsContext();

  const suiPrice = suiCoinInfo?.price ?? 1;
  const tokens = useWatch({ control, name: 'tokens' });
  const totalBalance = useWatch({ control, name: 'totalBalance' });

  const haveiSuiP = tokens?.includes(principalType);
  const haveiSuiYn = tokens?.includes(couponType);

  return (
    <MoneyInput
      control={control}
      balance={formatMoney(Number(totalBalance))}
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
        setValue('amount', String(Number(totalBalance) / (100 / value)));
        setValue(
          'amountUSD',
          formatDollars(Number(totalBalance) / (100 / value))
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
