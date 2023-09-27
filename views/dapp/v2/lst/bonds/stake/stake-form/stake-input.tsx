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
import MoneyInput from '../../components/money-input';

interface StakeInputProps {
  suiPrice: number;
  exchangeRate: number;
  totalBalance: BigNumber;
}

const StakeInput: FC<StakeInputProps> = ({
  suiPrice,
  totalBalance,
  exchangeRate,
}) => {
  const { form } = useBondsContext();

  return (
    <MoneyInput
      control={form.control}
      balance={formatMoney(FixedPointMath.toNumber(totalBalance))}
      Prefix={<SUISVG maxHeight="3rem" maxWidth="3rem" height="100%" filled />}
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

export default StakeInput;
