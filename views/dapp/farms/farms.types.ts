import { GetObjectDataResponse } from '@mysten/sui.js/src/types/objects';
import BigNumber from 'bignumber.js';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { FarmType } from '@/constants';
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

export interface UseGetFarmListDataArgs {
  account: string | null;
  farms: ReadonlyArray<Omit<UseGetFarmDataArgs, 'account'>>;
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

export interface SafeFarmData extends FarmType {
  allocationPoints: BigNumber;
  id: number;
  coin0: CoinData;
  coin1: CoinData;
  totalStakedAmount: BigNumber;
  tvl: number;
  apr: BigNumber;
  stable: boolean;
  isLive: boolean;
  stakingAmount: BigNumber;
}

export interface ParsedFarmReturn {
  farms: ReadonlyArray<SafeFarmData>;
  totalAllocationPoints: BigNumber;
}

export interface UseGetFarmDataArgs {
  account: string | null;
  objectId: string;
  poolObjectId: string;
  isSingleCoin: boolean;
  lpCoin: CoinData;
}

export interface GetFarmReturn {
  objectId: string;
  farmArray: Array<GetObjectDataResponse>;
  accountData: null | any;
}
