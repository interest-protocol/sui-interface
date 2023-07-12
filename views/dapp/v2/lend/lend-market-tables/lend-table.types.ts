import { Network } from '@interest-protocol/sui-amm-sdk';
import { MoneyMarketRecord } from '@interest-protocol/sui-money-market-sdk';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinPriceRecord } from '@/hooks';
import { CoinData } from '@/interface';

import { MoneyMarketStorage, UserBalancesInUSD } from '../lend.types';

export interface MakeMoneyMarketDataArgs {
  marketRecord: MoneyMarketRecord;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  network: Network;
  priceMap: CoinPriceRecord;
}

export interface Asset {
  coin: {
    token: CoinData;
    color: { dark: string; light: string } | null;
  };
  percentage: number;
}

export interface SupplyRow {
  asset: Asset;
  wallet: number;
  marketKey: string;
  isEngaged: boolean;
  collateral: boolean;
  supplied: {
    value: number;
    amount: number;
  };
}

export interface BorrowRow {
  asset: Asset;
  cash: number;
  wallet: number;
  marketKey: string;
  isEngaged: boolean;
  borrowed: {
    value: number;
    amount: number;
  };
}

export interface MoneyMarketUI {
  isEngaged: boolean;
  description: string;
  data: ReadonlyArray<SupplyRow | BorrowRow>;
}

export interface calculateNewBorrowLimitEnableCollateralArgs {
  priceMap: CoinPriceRecord;
  userBalancesInUSD: UserBalancesInUSD;
  marketRecord: MoneyMarketRecord;
  marketKey: string;
  addCollateral: boolean;
}

export interface CalculateNewBorrowLimitArgs {
  priceMap: CoinPriceRecord;
  userBalancesInUSD: UserBalancesInUSD;
  marketRecord: MoneyMarketRecord;
  marketKey: string;
  newAmount: number;
}

export interface CalculateIPXAPRArgs {
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
  marketRecord: MoneyMarketRecord;
  marketKey: string;
  isLoan: boolean;
  priceMap: CoinPriceRecord;
}
