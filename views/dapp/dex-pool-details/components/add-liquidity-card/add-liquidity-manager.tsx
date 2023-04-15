import BigNumber from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';

import { getOptimalCoin0Value, getOptimalCoin1Value } from '@/utils';

import { AddLiquidityManagerProps } from './add-liquidity-card.types';

const AddLiquidityManager: FC<AddLiquidityManagerProps> = ({
  pool,
  setValue,
  control,
  token0,
  token1,
}) => {
  const t = useTranslations();
  const token0Amount = useWatch({ control, name: 'token0Amount' });
  const token1Amount = useWatch({ control, name: 'token1Amount' });

  const input0IsLocked = useWatch({ control, name: 'token0InputLocked' });
  const input1IsLocked = useWatch({ control, name: 'token1InputLocked' });

  // user is typing on input0
  useEffect(() => {
    if (input1IsLocked) return;

    if (!+token0Amount) {
      setValue('token1Amount', '0');
      return;
    }

    const n = getOptimalCoin1Value(
      FixedPointMath.toBigNumber(token0Amount, token0.decimals),
      new BigNumber(pool.token0Balance),
      new BigNumber(pool.token1Balance)
    ).dividedBy(new BigNumber(10).pow(token1.decimals));

    const roundedN =
      n.lt(new BigNumber(1)) && !token1.decimals
        ? 0
        : n.decimalPlaces(token1.decimals, BigNumber.ROUND_UP).toNumber();

    setValue(
      'error',
      roundedN
        ? ''
        : t('dexPoolPair.error.increaseAmount', { symbol: token0.symbol })
    );
    setValue('token1Amount', roundedN.toString());
  }, [token0Amount, pool, input1IsLocked]);

  // user is typing on input1
  useEffect(() => {
    if (input0IsLocked) return;

    if (!+token1Amount) {
      setValue('token0Amount', '0');
      return;
    }

    const n = getOptimalCoin0Value(
      FixedPointMath.toBigNumber(token1Amount, token1.decimals),
      new BigNumber(pool.token0Balance),
      new BigNumber(pool.token1Balance)
    ).dividedBy(new BigNumber(10).pow(token0.decimals));

    const roundedN =
      n.lt(new BigNumber(1)) && !token0.decimals
        ? 0
        : n.decimalPlaces(token0.decimals, BigNumber.ROUND_UP).toNumber();

    setValue(
      'error',
      roundedN
        ? ''
        : t('dexPoolPair.error.increaseAmount', { symbol: token1.symbol })
    );
    setValue('token0Amount', roundedN.toString());
  }, [token1Amount, input0IsLocked, pool]);

  return null;
};

export default AddLiquidityManager;
