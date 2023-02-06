import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';

import { FixedPointMath } from '@/sdk';
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
    if (input1IsLocked || !+token0Amount) return;

    const n = FixedPointMath.toNumber(
      getOptimalCoin1Value(
        FixedPointMath.toBigNumber(token0Amount, token0.decimals),
        new BigNumber(pool.token0Balance),
        new BigNumber(pool.token1Balance)
      ),
      token1.decimals
    );

    setValue(
      'error',
      n ? '' : t('dexPoolPair.error.increaseAmount', { symbol: token0.symbol })
    );
    setValue('token1Amount', n.toString());
  }, [token0Amount, pool, input1IsLocked]);

  // user is typing on input1
  useEffect(() => {
    if (input0IsLocked || !+token1Amount) return;

    const n = FixedPointMath.toNumber(
      getOptimalCoin0Value(
        FixedPointMath.toBigNumber(token1Amount, token1.decimals),
        new BigNumber(pool.token0Balance),
        new BigNumber(pool.token1Balance)
      ),
      token0.decimals
    );
    setValue(
      'error',
      n ? '' : t('dexPoolPair.error.increaseAmount', { symbol: token1.symbol })
    );
    setValue('token0Amount', n.toString());
  }, [token1Amount, input0IsLocked, pool]);

  return null;
};

export default AddLiquidityManager;
