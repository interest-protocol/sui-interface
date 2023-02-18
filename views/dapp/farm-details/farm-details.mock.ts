import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { values } from 'ramda';

import { COIN_TYPE } from '@/constants';
import { FixedPointMath } from '@/sdk';

import { SafeUserFarmData } from './farm-details.types';

export const FARM_DATA: SafeUserFarmData = {
  allocationPoints: new BigNumber(Math.random() * 99999),
  chainId: 0,
  reserve0: new BigNumber(Math.random() * 99999),
  reserve1: new BigNumber(Math.random() * 99999),
  stakingTokenAddress: 'address',
  stakingTokenPrice: new BigNumber(Math.random() * 999999999),
  id: 1,
  token1: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
  token0: values(COIN_TYPE[Network.DEVNET])[~~(Math.random() * 7)],
  totalStakedAmount: new BigNumber(Math.random() * 999999999),
  allocation: FixedPointMath.from(new BigNumber(Math.random() * 999999999999)),
  tvl: Math.random() * 99999999999,
  apr: FixedPointMath.from(new BigNumber(Math.random() * 999999999999)),
  stable: Boolean(Math.round(Math.random())),
  isLive: Boolean(Math.round(Math.random())),
  stakingAmount: new BigNumber(Math.random() * 99999999),
  allowance: new BigNumber(Math.random() * 999999999),
  pendingRewards: new BigNumber(Math.random() * 999999999),
  balance: new BigNumber(Math.random() * 99999999999999),
};
