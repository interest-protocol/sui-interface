import { GetObjectDataResponse } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';

import {
  CoinsMap,
  Web3ManagerSuiObject,
} from '@/components/web3-manager/web3-manager.types';
import { FarmMetadataType } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { GetFarmReturn } from '@/utils/farms/farms.types';

export interface FarmDetailsProps {
  farmMetadata: FarmMetadataType;
}

export enum StakeState {
  Stake,
  Unstake,
}

export interface UseGetFarmArgs extends FarmMetadataType {
  account: string | null;
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
  stakingAmount: BigNumber;
  totalStakedAmount: BigNumber;
  lpCoinData: Web3ManagerSuiObject;
  ipxUSDPrice: number;
}

export type ParseFarmData = (args: ParseFarmDataArgs) => FarmDetailsData;
