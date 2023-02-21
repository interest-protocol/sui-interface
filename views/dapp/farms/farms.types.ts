import BigNumber from 'bignumber.js';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { CoinData } from '@/interface';
import { FixedPointMath } from '@/sdk';

export enum FarmSortByFilter {
  Default,
  TVL,
  APR,
  Allocation,
}

export enum FarmTypeFilter {
  All,
  Volatile,
  Stable,
}

export interface FarmsFiltersProps extends FarmsFilterManagerProps {
  register: UseFormRegister<IFarmsForm>;
}

export interface FarmsFilterManagerProps {
  control: Control<IFarmsForm>;
  setValue: UseFormSetValue<IFarmsForm>;
}

export interface IFarmsForm {
  search: string;
  sortBy: FarmSortByFilter;
  onlyStaked: boolean;
  typeFilter: FarmTypeFilter;
  onlyFinished: boolean;
}

export interface SafeFarmData {
  allocationPoints: BigNumber;
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
}

export interface SafeFarmSummaryData {
  farms: ReadonlyArray<SafeFarmData>;
  loading: boolean;
  intUSDPrice: BigNumber;
}

export type TFarmDataKeys = {
  pools: ReadonlyArray<
    | 'stakingToken'
    | 'stable'
    | 'reserve0'
    | 'reserve1'
    | 'allocationPoints'
    | 'totalStakingAmount'
    | 'totalSupply'
    | 'stakingAmount'
  >;
  mintData: ReadonlyArray<'totalAllocationPoints' | 'interestPerBlock'>;
};

export interface UseGetFarmDataArgs {
  account: string | null;
  objectId: string;
  poolObjectId: string;
  isSingleCoin: boolean;
  lpCoin: CoinData;
}
