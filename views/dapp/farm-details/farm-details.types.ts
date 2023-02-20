import BigNumber from 'bignumber.js';

import { FixedPointMath } from '@/sdk';

import { SafeFarmData } from './../farms/farms.types';

export interface FarmDetailsProps {
  objectId: string;
}

export interface SafeUserFarmData {
  allocationPoints: BigNumber;
  chainId: number;
  reserve0: BigNumber;
  reserve1: BigNumber;
  stakingTokenAddress: string;
  stakingTokenPrice: BigNumber;
  id: number;
  token1: string;
  token0: string;
  totalStakedAmount: BigNumber;
  allocation: FixedPointMath;
  tvl: number;
  apr: FixedPointMath;
  stable: boolean;
  isLive: boolean;
  stakingAmount: BigNumber;
  allowance: BigNumber;
  pendingRewards: BigNumber;
  balance: BigNumber;
}

export interface SafeUserFarmSummaryData {
  farm: SafeUserFarmData;
  loading: boolean;
  intUSDPrice: BigNumber;
}

type TFarmPoolDataKeys =
  | 'stakingToken'
  | 'stable'
  | 'reserve0'
  | 'reserve1'
  | 'allocationPoints'
  | 'totalStakingAmount'
  | 'totalSupply'
  | 'stakingAmount';

type TFarmMintDataKeys = 'totalAllocationPoints' | 'interestPerBlock';

type TFarmUserDataKeys = 'allowance' | 'balance' | 'pendingRewards';

export type TFarmDataKeys = {
  ipxPoolData: ReadonlyArray<TFarmPoolDataKeys>;
  poolData: ReadonlyArray<TFarmPoolDataKeys>;
  mintData: ReadonlyArray<TFarmMintDataKeys>;
  farmData: ReadonlyArray<TFarmUserDataKeys>;
};

export type GetSafeUserFarmData = (
  chainId: number,
  pairAddress: `0x${string}`,
  data: SafeFarmData
) => SafeUserFarmSummaryData;

export enum StakeState {
  Stake,
  Unstake,
}
