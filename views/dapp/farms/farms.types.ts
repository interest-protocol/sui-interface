import BigNumber from 'bignumber.js';
import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';

import { FarmMetadataType } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { Farm } from '@/utils/farms/farms.types';
import { Pool } from '@/utils/pools/pools.types';

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

export interface SafeFarmData extends FarmMetadataType {
  allocationPoints: BigNumber;
  totalStakedAmount: BigNumber;
  tvl: number;
  apr: BigNumber;
  accountBalance: BigNumber;
  loading?: boolean;
}

export interface ParseDataArgs {
  farms: ReadonlyArray<Farm> | undefined;
  pools: ReadonlyArray<Pool> | undefined;
  prices: CoinPriceRecord;
  ipxStorage: IPXStorage;
}

export interface ParseErrorArgs {
  errorFarms: unknown;
  errorPools: unknown;
  pricesError: unknown;
  ipxStorageError: unknown;
}

export interface ParseFarmDataArgs {
  prices: CoinPriceRecord;
  ipxUSDPrice: number;
  ipxStorage: IPXStorage;
  pools: ReadonlyArray<Pool>;
  farms: ReadonlyArray<Farm>;
  type: string;
  index: number;
}

export interface ParseFarmDataReturn {
  farms: ReadonlyArray<SafeFarmData>;
  totalAllocationPoints: BigNumber;
}

export interface FarmsProps {
  form: UseFormReturn<IFarmsForm>;
  desktopState: {
    isDesktop: boolean;
    setDesktop: Dispatch<SetStateAction<boolean>>;
  };
}
