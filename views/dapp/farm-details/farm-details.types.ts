import { Network } from '@interest-protocol/sui-amm-sdk';
import { SuiObjectResponse } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { Dispatch, SetStateAction } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  CoinsMap,
  Web3ManagerSuiObject,
} from '@/components/web3-manager/web3-manager.types';
import { FarmMetadataType, StakeState } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { Farm } from '@/interface';

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

export interface ParseFarmDataArgs {
  prices: CoinPriceRecord;
  farms: ReadonlyArray<Farm> | undefined;
  ipxStorage: IPXStorage;
  coinsMap: CoinsMap;
  farmMetadata: FarmMetadataType;
  pendingRewards: BigNumber;
  pools: SuiObjectResponse[] | undefined;
  network: Network;
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
  accountBalance: BigNumber;
  loading: boolean;
}

export type ParseFarmData = (args: ParseFarmDataArgs) => FarmDetailsData;

export interface ParseErrorArgs {
  farmsError: unknown;
  coinsPricesError: unknown;
  ipxStorageError: unknown;
  web3Error: unknown;
  poolsError: unknown;
  pendingRewardsError: unknown;
}
