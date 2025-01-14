import { Network } from '@interest-protocol/sui-amm-sdk';
import BigNumber from 'bignumber.js';

import { FarmMetadataType } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { Farm, Pool } from '@/interface';

export interface CalculateAPRArgs {
  ipxUSDPrice: number;
  tvl: number;
  allocationPoints: BigNumber;
  ipxStorage: IPXStorage;
}

export interface CalculateIPXUSDPriceArgs {
  pool: Pool;
  prices: CoinPriceRecord;
  network: Network;
}

export interface CalculateTVLArgs {
  prices: CoinPriceRecord;
  farmMetadata: FarmMetadataType;
  ipxUSDPrice: number;
  pool: Pool;
  farm: Farm;
}
