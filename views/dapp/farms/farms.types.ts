import BigNumber from 'bignumber.js';
import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';

import { FarmMetadataType, Network } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { Farm, Pool } from '@/interface';

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
  farms: ReadonlyArray<Farm>;
  pools: ReadonlyArray<Pool>;
  prices: CoinPriceRecord;
  ipxStorage: IPXStorage;
  network: Network;
}

export interface ParseErrorArgs {
  errorFarms: unknown;
  errorPools: unknown;
  pricesError: unknown;
}

export interface ParseFarmDataArgs {
  prices: CoinPriceRecord;
  ipxUSDPrice: number;
  ipxStorage: IPXStorage;
  pools: ReadonlyArray<Pool>;
  farms: ReadonlyArray<Farm>;
  type: string;
  index: number;
  network: Network;
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
