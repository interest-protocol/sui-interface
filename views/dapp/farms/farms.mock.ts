import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { values } from 'ramda';

import { FixedPointMath } from '@/sdk';

import { COIN_TYPE } from './../../../constants/coins';
import { SafeFarmData } from './farms.types';

export const FARMS_DATA: ReadonlyArray<SafeFarmData> = [
  {
    isLive: Boolean(Math.round(Math.random())),
    stable: Boolean(Math.round(Math.random())),
    stakingAmount: new BigNumber(0),
    apr: FixedPointMath.from(new BigNumber(Math.random() * 100_000_000_000)),
    tvl: Math.random() * 1_000_000_000,
    allocation: FixedPointMath.from(
      new BigNumber(Math.random() * 100_000_000_000)
    ),
    allocationPoints: new BigNumber(Math.random() * 1_000),
    reserve0: new BigNumber(Math.random() * 1_000_000_000_000),
    reserve1: new BigNumber(Math.random() * 1_000_000_000_000),
    stakingTokenAddress: 'address',
    stakingTokenPrice: new BigNumber(Math.random() * 1000),
    id: 1,
    token1: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    token0: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    totalStakedAmount: new BigNumber(Math.random() * 24385),
  },
  {
    isLive: Boolean(Math.round(Math.random())),
    stable: Boolean(Math.round(Math.random())),
    stakingAmount: new BigNumber(0),
    apr: FixedPointMath.from(new BigNumber(Math.random() * 100_000_000_000)),
    tvl: Math.random() * 1_000_000_000,
    allocation: FixedPointMath.from(
      new BigNumber(Math.random() * 100_000_000_000)
    ),
    allocationPoints: new BigNumber(Math.random() * 1_000),
    reserve0: new BigNumber(Math.random() * 1_000_000_000_000),
    reserve1: new BigNumber(Math.random() * 1_000_000_000_000),
    stakingTokenAddress: 'address',
    stakingTokenPrice: new BigNumber(Math.random() * 1000),
    id: 1,
    token1: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    token0: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    totalStakedAmount: new BigNumber(Math.random() * 24385),
  },
  {
    isLive: Boolean(Math.round(Math.random())),
    stable: Boolean(Math.round(Math.random())),
    stakingAmount: new BigNumber(0),
    apr: FixedPointMath.from(new BigNumber(Math.random() * 100_000_000_000)),
    tvl: Math.random() * 1_000_000_000,
    allocation: FixedPointMath.from(
      new BigNumber(Math.random() * 100_000_000_000)
    ),
    allocationPoints: new BigNumber(Math.random() * 1_000),
    reserve0: new BigNumber(Math.random() * 1_000_000_000_000),
    reserve1: new BigNumber(Math.random() * 1_000_000_000_000),
    stakingTokenAddress: 'address',
    stakingTokenPrice: new BigNumber(Math.random() * 1000),
    id: 1,
    token1: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    token0: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    totalStakedAmount: new BigNumber(Math.random() * 24385),
  },
  {
    isLive: Boolean(Math.round(Math.random())),
    stable: Boolean(Math.round(Math.random())),
    stakingAmount: new BigNumber(0),
    apr: FixedPointMath.from(new BigNumber(Math.random() * 100_000_000_000)),
    tvl: Math.random() * 1_000_000_000,
    allocation: FixedPointMath.from(
      new BigNumber(Math.random() * 100_000_000_000)
    ),
    allocationPoints: new BigNumber(Math.random() * 1_000),
    reserve0: new BigNumber(Math.random() * 1_000_000_000_000),
    reserve1: new BigNumber(Math.random() * 1_000_000_000_000),
    stakingTokenAddress: 'address',
    stakingTokenPrice: new BigNumber(Math.random() * 1000),
    id: 1,
    token1: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    token0: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    totalStakedAmount: new BigNumber(Math.random() * 24385),
  },
  {
    isLive: Boolean(Math.round(Math.random())),
    stable: Boolean(Math.round(Math.random())),
    stakingAmount: new BigNumber(0),
    apr: FixedPointMath.from(new BigNumber(Math.random() * 100_000_000_000)),
    tvl: Math.random() * 1_000_000_000,
    allocation: FixedPointMath.from(
      new BigNumber(Math.random() * 100_000_000_000)
    ),
    allocationPoints: new BigNumber(Math.random() * 1_000),
    reserve0: new BigNumber(Math.random() * 1_000_000_000_000),
    reserve1: new BigNumber(Math.random() * 1_000_000_000_000),
    stakingTokenAddress: 'address',
    stakingTokenPrice: new BigNumber(Math.random() * 1000),
    id: 1,
    token1: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    token0: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    totalStakedAmount: new BigNumber(Math.random() * 24385),
  },
  {
    isLive: Boolean(Math.round(Math.random())),
    stable: Boolean(Math.round(Math.random())),
    stakingAmount: new BigNumber(0),
    apr: FixedPointMath.from(new BigNumber(Math.random() * 100_000_000_000)),
    tvl: Math.random() * 1_000_000_000,
    allocation: FixedPointMath.from(
      new BigNumber(Math.random() * 100_000_000_000)
    ),
    allocationPoints: new BigNumber(Math.random() * 1_000),
    reserve0: new BigNumber(Math.random() * 1_000_000_000_000),
    reserve1: new BigNumber(Math.random() * 1_000_000_000_000),
    stakingTokenAddress: 'address',
    stakingTokenPrice: new BigNumber(Math.random() * 1000),
    id: 1,
    token1: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    token0: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
    totalStakedAmount: new BigNumber(Math.random() * 24385),
  },
];
