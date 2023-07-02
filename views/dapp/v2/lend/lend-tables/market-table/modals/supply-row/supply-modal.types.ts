import { UseFormReturn } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';
import { CoinPriceRecord } from '@/hooks';
import {
  MoneyMarket,
  MoneyMarketStorage,
  UserBalancesInUSD,
} from '@/views/dapp/v2/lend/lend.types';

import { Asset } from '../../../lend-table.types';

export interface OpenRowMarketPreviewModalArgs {
  isDeposit: boolean;
  value: string;
  isMax: boolean;
}

export interface SupplyMarketModalProps {
  closeModal: () => void;
  isDeposit?: boolean;
  asset: Asset;
  openRowMarketPreviewModal: (x: OpenRowMarketPreviewModalArgs) => void;
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
  openRowMarketResultModal: (resultRowModalProps: ResultRowModalProps) => void;
  mutate: () => Promise<void>;
}

export interface ResultRowModalProps {
  isSuccess: boolean;
  isDeposit: boolean;
  txLink?: string;
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

export interface SupplyBorrowForm {
  isMax: boolean;
  value: string;
}
