import { GetObjectDataResponse } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';

import { FarmMetadataType } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { CoinData } from '@/interface';

export interface CalculateAPRArgs {
  ipxUSDPrice: number;
  tvl: number;
  allocationPoints: BigNumber;
  ipxStorage: IPXStorage;
}

export interface CalculateIPXUSDPriceArgs {
  pool: GetObjectDataResponse;
  prices: CoinPriceRecord;
}

export interface CalculateTVLArgs {
  prices: CoinPriceRecord;
  farmMetadata: FarmMetadataType;
  ipxUSDPrice: number;
  pool: GetObjectDataResponse;
  farm: GetObjectDataResponse;
}

export interface GetFarmArgs {
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

export type GetFarm = (args: GetFarmArgs) => Promise<GetFarmReturn>;
