import { Network } from '@interest-protocol/sui-amm-sdk';
import { MoneyMarket } from '@interest-protocol/sui-money-market-sdk';
import BigNumber from 'bignumber.js';

import { CoinPriceRecord } from '@/hooks';

export interface MoneyMarketStorage {
  totalAllocationPoints: BigNumber;
  ipxPerYear: BigNumber;
  allMarketKeys: ReadonlyArray<string>;
  suidInterestRatePerYear: BigNumber;
}

export interface MakeCardsDataArgs {
  userBalancesInUSD: UserBalancesInUSD;
}

export interface CalculateUserBalancesInUSDArgs {
  priceMap: CoinPriceRecord;
  marketRecord: Record<string, MoneyMarket>;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
  network: Network;
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

export interface LendProviderState {
  priceMap: CoinPriceRecord;
  marketRecord: Record<string, MoneyMarket>;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
  userBalancesInUSD: UserBalancesInUSD;
  loading: boolean;
  mutate: () => Promise<void>;
}
