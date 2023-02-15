import { Result } from '@ethersproject/abi';
import { BigNumber } from 'ethers';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { Address } from '@/interface';
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
  chainId: number;
  reserve0: BigNumber;
  reserve1: BigNumber;
  stakingTokenAddress: string;
  stakingTokenPrice: BigNumber;
  id: number;
  token1: Address;
  token0: Address;
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

export type TFarmData =
  | ([
      InterestViewEarn.PoolDataStructOutput[],
      InterestViewEarn.MintDataStructOutput,
      BigNumber[]
    ] & {
      pools: InterestViewEarn.PoolDataStructOutput[];
      mintData: InterestViewEarn.MintDataStructOutput;
      prices: BigNumber[];
    })
  | undefined
  | Result;

export type GetSafeFarmSummaryData = (
  chainId: number | null,
  data: TFarmData
) => SafeFarmSummaryData;
