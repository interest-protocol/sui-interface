import { Network } from '@interest-protocol/sui-amm-sdk';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinPriceRecord } from '@/hooks';
import { CoinData } from '@/interface';

import {
  MoneyMarket,
  MoneyMarketStorage,
  UserBalancesInUSD,
} from '../lend.types';

export interface MakeMoneyMarketDataArgs {
  marketRecord: Record<string, MoneyMarket>;
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
  supplied: {
    amount: number;
    value: number;
  };
  wallet: number;
  collateral: boolean;
  marketKey: string;
}

export interface BorrowRow {
  asset: Asset;
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

export interface calculateNewBorrowLimitEnableCollateralArgs {
  priceMap: CoinPriceRecord;
  userBalancesInUSD: UserBalancesInUSD;
  marketRecord: Record<string, MoneyMarket>;
  marketKey: string;
  addCollateral: boolean;
}

export interface CalculateNewBorrowLimitNewAmountArgs {
  priceMap: CoinPriceRecord;
  userBalancesInUSD: UserBalancesInUSD;
  marketRecord: Record<string, MoneyMarket>;
  marketKey: string;
  newAmount: number;
  isLoan: boolean;
  adding: boolean;
}

export interface CalculateIPXAPRArgs {
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
  marketRecord: Record<string, MoneyMarket>;
  marketKey: string;
  isLoan: boolean;
  priceMap: CoinPriceRecord;
}
