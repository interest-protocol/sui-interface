import BigNumber from 'bignumber.js';

import { SafeFarmData } from './../farms/farms.types';

export interface FarmDetailsProps {
  objectId: string;
}

export interface SafeUserFarmData extends SafeFarmData {
  balance: BigNumber;
  pendingRewards: BigNumber;
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
