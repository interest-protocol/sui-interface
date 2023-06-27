import { Network } from '@interest-protocol/sui-amm-sdk';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinPriceRecord } from '@/hooks';
import { CoinData } from '@/interface';

import { MoneyMarket } from '../lend.types';

export interface MakeMoneyMarketDataArgs {
  marketRecord: Record<string, MoneyMarket>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  network: Network;
  priceMap: CoinPriceRecord;
}

export interface AssetAPY {
  coin: {
    token: CoinData;
    color: { dark: string; light: string } | null;
  };
  percentage: number;
}

export interface SupplyRow {
  assetApy: AssetAPY;
  supplied: {
    amount: number;
    value: number;
  };
  wallet: number;
  collateral: boolean;
  marketKey: string;
}

export interface BorrowRow {
  assetApy: AssetAPY;
  borrowed: {
    amount: number;
    value: number;
  };
  wallet: number;
  cash: number;
  marketKey: string;
}

export interface MoneyMarketUI {
  isEngaged: boolean;
  description: string;
  data: ReadonlyArray<SupplyRow | BorrowRow>;
}
