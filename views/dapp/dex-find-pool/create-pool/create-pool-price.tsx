import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Typography } from '@/elements';
import { formatMoney } from '@/utils';

import { PriceProps } from '../dex-find-pool.types';

const toNumber = (x: string) => (isNaN(+x) ? 0 : x ? +x : 0);

const CreatePoolPrice: FC<PriceProps> = ({ control }) => {
  const tokenA = useWatch({ control, name: 'tokenA' });
  const tokenB = useWatch({ control, name: 'tokenB' });

  const amountA = toNumber(tokenA.value);
  const amountB = toNumber(tokenB.value);

  const hasZeroValue = !amountA || !amountB;

  return (
    <Typography variant="normal" my="L" textAlign="center">
      {hasZeroValue ? '0' : '1'} {tokenA.symbol} ={' '}
      {hasZeroValue ? '0' : formatMoney(amountB / amountA, 6)} {tokenB.symbol}
    </Typography>
  );
};

export default CreatePoolPrice;
