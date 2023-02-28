import BigNumber from 'bignumber.js';
import { Dispatch, SetStateAction } from 'react';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { FarmMetadataType, FARMS } from '@/constants';
import { CoinData } from '@/interface';
import { GetFarmReturn } from '@/utils/farms/farms.types';

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
  farms: typeof FARMS;
  data: Array<GetFarmReturn>;
  setData: Dispatch<SetStateAction<Array<GetFarmReturn>>>;
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

export interface SafeFarmData extends FarmMetadataType {
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
  loading?: boolean;
}

export interface ParseFarmListDataReturn {
  farms: ReadonlyArray<SafeFarmData>;
  totalAllocationPoints: BigNumber;
}
