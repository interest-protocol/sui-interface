import BigNumber from 'bignumber.js';
import { ChangeEvent, FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';
import {
  formatDollars,
  formatMoney,
  parseInputEventToNumberString,
} from '@/utils';

import { useLstData } from '../../../lst.hooks';
import { useBondsContext } from '../../bonds.hooks';
import MoneyInput from '../../components/money-input';

const StakeInput: FC = () => {
  const exchangeRate = 1;
  const { form } = useBondsContext();
  const { suiCoinInfo } = useLstData();
  const totalBalance = BigNumber(0);

  const suiPrice = suiCoinInfo?.price ?? 1;

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
