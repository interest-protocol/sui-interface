import BigNumber from 'bignumber.js';
import { ChangeEvent, FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';
import {
  formatDollars,
  formatMoney,
  parseInputEventToNumberString,
} from '@/utils';

import MoneyInput from '../../money-input';
import { StakeInputProps } from '../stake-form.types';

const StakeInput: FC<StakeInputProps> = ({
  form,
  suiPrice,
  totalBalance,
  exchangeRate,
}) => {
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

export default StakeInput;
