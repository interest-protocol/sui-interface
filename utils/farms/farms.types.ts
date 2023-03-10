import BigNumber from 'bignumber.js';

import { FarmMetadataType } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { Pool } from '@/utils/pools/pools.types';

export interface CalculateAPRArgs {
  ipxUSDPrice: number;
  tvl: number;
  allocationPoints: BigNumber;
  ipxStorage: IPXStorage;
}

export interface CalculateIPXUSDPriceArgs {
  pool: Pool;
  prices: CoinPriceRecord;
}

export interface CalculateTVLArgs {
  prices: CoinPriceRecord;
  farmMetadata: FarmMetadataType;
  ipxUSDPrice: number;
  pool: Pool;
  farm: Farm;
}

export interface Farm {
  allocationPoints: BigNumber;
  totalStakedAmount: BigNumber;
  accountBalance: BigNumber;
}
