import { GetObjectDataResponse } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { Dispatch, SetStateAction } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { SWRConfiguration } from 'swr';

import {
  CoinsMap,
  Web3ManagerSuiObject,
} from '@/components/web3-manager/web3-manager.types';
import { FarmMetadataType, StakeState } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { GetFarmReturn } from '@/utils/farms/farms.types';

export interface ModalState {
  isOpen: boolean;
  state: StakeState;
}

export interface Form {
  amount: string;
}

export interface FarmDetailsProps {
  farmMetadata: FarmMetadataType;
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState>>;
  form: UseFormReturn<Form>;
}

export interface ModalState {
  isOpen: boolean;
  state: StakeState;
}

export interface UseGetFarmArgs extends FarmMetadataType {
  account: string | null;
  config?: SWRConfiguration;
}

export interface ParseFarmDataArgs {
  prices: CoinPriceRecord;
  data: GetFarmReturn | undefined;
  ipxStorage: IPXStorage;
  coinsMap: CoinsMap;
  farmMetadata: FarmMetadataType;
  pendingRewards: BigNumber;
  ipxPool: GetObjectDataResponse | undefined;
}

export interface FarmDetailsData extends FarmMetadataType {
  apr: BigNumber;
  pendingRewards: BigNumber;
  tvl: number;
  allocationPoints: BigNumber;
  totalStakedAmount: BigNumber;
  lpCoinData: Web3ManagerSuiObject;
  lpCoinPrice: number;
  totalAllocation: string;
}

export interface CalculateLPCoinPriceArgs {
  prices: CoinPriceRecord;
  pool: GetObjectDataResponse;
  farmMetadata: FarmMetadataType;
}

export type ParseFarmData = (args: ParseFarmDataArgs) => FarmDetailsData;

export interface ParseErrorArgs {
  error: unknown;
  coinsPricesError: unknown;
  ipxStorageError: unknown;
  web3Error: unknown;
  ipxDataError: unknown;
  pendingRewardsError: unknown;
}
