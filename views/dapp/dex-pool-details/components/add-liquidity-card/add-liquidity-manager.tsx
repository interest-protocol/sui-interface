import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

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
  const [token0Amount] = useDebounce(
    useWatch({ control, name: 'token0Amount' }),
    800
  );
  const [token1Amount] = useDebounce(
    useWatch({ control, name: 'token1Amount' }),
    800
  );

  const input0IsLocked = useWatch({ control, name: 'token0InputLocked' });
  const input1IsLocked = useWatch({ control, name: 'token1InputLocked' });

  // user is typing on input0
  useEffect(() => {
    if (input1IsLocked || !+token0Amount) return;
    setValue(
      'token1Amount',
      FixedPointMath.toNumber(
        getOptimalCoin1Value(
          FixedPointMath.toBigNumber(token0Amount, token0.decimals),
          FixedPointMath.toBigNumber(pool.token0Balance, token0.decimals),
          FixedPointMath.toBigNumber(pool.token1Balance, token1.decimals)
        ),
        token1.decimals
      ).toString()
    );
  }, [token0Amount, pool, input1IsLocked]);

  // user is typing on input1
  useEffect(() => {
    if (input0IsLocked || !+token1Amount) return;
    setValue(
      'token0Amount',
      FixedPointMath.toNumber(
        getOptimalCoin0Value(
          FixedPointMath.toBigNumber(token1Amount, token1.decimals),
          FixedPointMath.toBigNumber(pool.token0Balance, token0.decimals),
          FixedPointMath.toBigNumber(pool.token1Balance, token1.decimals)
        ),
        token0.decimals
      ).toString()
    );
  }, [token1Amount, input0IsLocked, pool]);

  return null;
};

export default AddLiquidityManager;
