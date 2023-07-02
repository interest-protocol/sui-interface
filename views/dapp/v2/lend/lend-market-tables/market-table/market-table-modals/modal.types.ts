import { Dispatch, SetStateAction } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';
import { CoinPriceRecord } from '@/hooks';
import {
  MoneyMarket,
  MoneyMarketStorage,
  UserBalancesInUSD,
} from '@/views/dapp/v2/lend/lend.types';

import { Asset } from '../../lend-table.types';
import { ResultRowBorrowModalProps } from './borrow-row/borrow-modal.types';
import { ResultCollateralModalProps } from './collateral/collateral-modal.types';
import { SupplyBorrowForm } from './supply-row/supply-modal.types';

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
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
  coinsMap: CoinsMap;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
}

export interface BorrowLimitsWrapperProps {
  valueForm: UseFormReturn<SupplyBorrowForm>;
  marketRecord: Record<string, MoneyMarket>;
  marketKey: string;
  userBalancesInUSD: UserBalancesInUSD;
  isDeposit?: boolean;
  isLoan?: boolean;
  priceMap: CoinPriceRecord;
}

export interface SupplyMarketModalProps {
  closeModal: () => void;
  asset: Asset;
  openRowMarketPreviewModal: (x: OpenSupplyMarketPreviewModalArgs) => void;
  userBalancesInUSD: UserBalancesInUSD;
  marketKey: string;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
  coinsMap: CoinsMap;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
}

export interface SupplyMarketModalPreviewProps {
  asset: Asset;
  closeModal: () => void;
  isDeposit: boolean;
  value: string;
  isMax: boolean;
  userBalancesInUSD: UserBalancesInUSD;
  marketKey: string;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
  coinsMap: CoinsMap;
  backRowMarketModal: (isDeposit: boolean) => void;
  openRowMarketResultModal: (isSuccess: boolean, isDeposit: boolean) => void;
  mutate: () => Promise<void>;
}

export interface BorrowPreviewModalProps {
  closeModal: () => void;
  asset: Asset;
  isLoan: boolean;
  backRowMarketModal: (isSupplyOrBorrow: boolean) => void;
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
  marketRecord: Record<string, MoneyMarket>;
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

export interface CollateralModalProps {
  closeModal: () => void;
  asset: Asset;
  resultModal: (result: ResultCollateralModalProps) => void;
  userBalancesInUSD: UserBalancesInUSD;
  mutate: () => Promise<void>;
  setCollateralSwitchState: Dispatch<SetStateAction<boolean>>;
  marketKey: string;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
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
