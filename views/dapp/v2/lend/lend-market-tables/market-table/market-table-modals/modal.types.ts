import { MoneyMarketRecord } from '@interest-protocol/sui-money-market-sdk';
import { UseFormReturn } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';
import { CoinPriceRecord } from '@/hooks';
import {
  MoneyMarketStorage,
  UserBalancesInUSD,
} from '@/views/dapp/v2/lend/lend.types';

import { Asset } from '../../lend-table.types';
import { ResultRowBorrowModalProps } from './market-table-borrow-modal/borrow-modal.types';

export interface OpenSupplyMarketPreviewModalArgs {
  isDeposit: boolean;
  value: string;
  isMax: boolean;
}

export interface OpenBorrowMarketPreviewModalArgs {
  isLoan: boolean;
  value: string;
  isMax: boolean;
}

export interface BorrowMarketModalProps {
  closeModal: () => void;
  asset: Asset;
  openRowMarketPreviewModal: (x: OpenBorrowMarketPreviewModalArgs) => void;
  userBalancesInUSD: UserBalancesInUSD;
  marketKey: string;
  marketRecord: MoneyMarketRecord;
  priceMap: CoinPriceRecord;
  coinsMap: CoinsMap;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
  isLoan: boolean;
}

export interface BorrowLimitsWrapperProps {
  valueForm: UseFormReturn<SupplyBorrowForm>;
  marketRecord: MoneyMarketRecord;
  marketKey: string;
  userBalancesInUSD: UserBalancesInUSD;
  isDeposit?: boolean;
  isLoan?: boolean;
  priceMap: CoinPriceRecord;
}

export interface BorrowPreviewModalProps {
  closeModal: () => void;
  asset: Asset;
  isLoan: boolean;
  backRowMarketModal: (isLoan: boolean) => void;
  openRowMarketResultModal: ({
    isSuccess,
    isLoan,
    txLink,
  }: ResultRowBorrowModalProps) => void;
  mutate: () => Promise<void>;
  value: string;
  isMax: boolean;
  userBalancesInUSD: UserBalancesInUSD;
  marketKey: string;
  marketRecord: MoneyMarketRecord;
  priceMap: CoinPriceRecord;
  coinsMap: CoinsMap;
}

export interface RowResultModalProps {
  closeModal: () => void;
  title: string;
  content: string;
  additionalText: string;
  activityLink: string;
}

export interface RowFailModalProps {
  closeModal: () => void;
  title: string;
  content: string;
  description?: string;
}

export interface ResultModalProps {
  tokenName: string;
  closeModal: () => void;
  isEnabled: boolean;
  txLink?: string;
}

export interface LinesModalProps {
  description: string;
  value: string;
}

export interface HeaderModalProps {
  type: string;
  symbol: string;
  withBack?: boolean;
  handleBack?: (isSupply: boolean) => void;
  isCenter?: boolean;
  isSupply?: boolean;
  closeModal: () => void;
}

export interface BorrowLimitProps {
  currentBorrowLimit: number;
  currentBorrowLimitPercentage: number;
  newBorrowLimit: number;
  newBorrowLimitPercentage: number;
}

export interface RowResultModalProps {
  closeModal: () => void;
  title: string;
  content: string;
  additionalText: string;
  activityLink: string;
}

export interface SupplyBorrowForm {
  isMax: boolean;
  value: string;
  originalValue: string;
}
