import BigNumber from 'bignumber.js';
import { ReactNode } from 'react';

import { CoinPriceRecord } from '@/hooks';

export interface CardLendProps {
  icon: 'percentage' | 'box-up' | 'box-down' | 'special';
  description: string;
  isTrendUp: boolean;
  trendAmount: string;
  symbol: '%' | '$' | 'USD';
  amount: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface MoneyMarketStorage {
  totalAllocationPoints: BigNumber;
  ipxPerYear: BigNumber;
  allMarketKeys: ReadonlyArray<string>;
  suidInterestRatePerYear: BigNumber;
}

export interface MoneyMarket {
  supplyRatePerYear: BigNumber; // 1e16 means 1% || 1e18 means 100%
  borrowRatePerYear: BigNumber; // 1e16 means 1% || 1e18 means 100%
  cash: BigNumber; // Coins available to be borrowed
  collateralEnabled: boolean;
  allocationPoints: BigNumber; // For IPX rewards
  userPrincipal: BigNumber;
  userShares: BigNumber;
  userLoanPendingRewards: BigNumber;
  userCollateralPendingRewards: BigNumber;
  totalCollateralElastic: BigNumber;
  totalCollateralBase: BigNumber;
  totalLoanElastic: BigNumber;
  totalLoanBase: BigNumber;
  borrowCap: BigNumber;
  collateralCap: BigNumber;
  LTV: BigNumber;
  accruedTimestamp: BigNumber;
  decimals: number;
  canBeCollateral: boolean;
}

export interface MakeCardsDataArgs {
  userBalancesInUSD: UserBalancesInUSD;
}

export interface CalculateUserBalancesInUSDArgs {
  priceMap: CoinPriceRecord;
  marketRecord: Record<string, MoneyMarket>;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
}

export interface UserBalancesInUSD {
  totalSupply: number;
  totalCollateral: number;
  totalLoan: number;
  totalEarnings: number;
  totalInterestRateOwned: number;
  totalIPXCollateralRewards: number;
  totalIPXLoanRewards: number;
}

export interface LendProviderProps {
  children: ReactNode;
}

export interface LendProviderState {
  priceMap: CoinPriceRecord;
  marketRecord: Record<string, MoneyMarket>;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
  userBalancesInUSD: UserBalancesInUSD;
  loading: boolean;
  mutate: () => Promise<void>;
}
