import BigNumber from 'bignumber.js';
import { ChangeEvent, FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';
import {
  formatDollars,
  formatMoney,
  parseInputEventToNumberString,
} from '@/utils';

import { useBondsContext } from '../../bonds.hooks';
import MoneyInput from '../../money-input';

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
  const { form } = useBondsContext();

  return (
    <MoneyInput
      Prefix={<SUISVG maxHeight="3rem" maxWidth="3rem" height="100%" filled />}
      control={form.control}
      onChangeValue={(value: number) => {
        form.setValue?.(
          'amount',
          FixedPointMath.toNumber(
            totalBalance.dividedBy(BigNumber(100 / value))
          ).toString()
        );
        form.setValue?.(
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
      balance={formatMoney(FixedPointMath.toNumber(totalBalance))}
      {...form.register('amount', {
        onChange: (v: ChangeEvent<HTMLInputElement>) => {
          form.setValue?.('amount', parseInputEventToNumberString(v));
          form.setValue?.(
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
