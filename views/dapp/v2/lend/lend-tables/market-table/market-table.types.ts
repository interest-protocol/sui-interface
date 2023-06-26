import { CoinPriceRecord } from '@/hooks';
import {
  MoneyMarket,
  MoneyMarketStorage,
  UserBalancesInUSD,
} from '@/views/dapp/v2/lend/lend.types';

import { BorrowRow, MoneyMarketUI } from '../lend-table.types';

export interface MarketTableProps {
  title: string;
  isSupply?: boolean;
  userBalancesInUSD: UserBalancesInUSD;
  moneyMarketStorage: MoneyMarketStorage;
  isLoading: boolean;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
}

export interface MarketTableBorrowedProps {
  assetApy: BorrowRow['assetApy'];
  borrowed: BorrowRow['borrowed'];
  wallet: BorrowRow['wallet'];
  cash: BorrowRow['cash'];
}

export interface GroupRowHeaderProps {
  description: string;
}

export interface GroupBorrowRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  BorrowMarketTableData: ReadonlyArray<BorrowRow>;
}

export interface BorrowMarketTableProps {
  userBalancesInUSD: UserBalancesInUSD;
  moneyMarketStorage: MoneyMarketStorage;
  isLoading: boolean;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
}

export interface GroupSupplyRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  SupplyMarketTableData: MoneyMarketUI['data'];
}

export interface SupplyMarketTableProps {
  userBalancesInUSD: UserBalancesInUSD;
  moneyMarketStorage: MoneyMarketStorage;
  isLoading: boolean;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
}
