import { Dispatch, SetStateAction } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';
import { CoinPriceRecord } from '@/hooks';
import {
  MoneyMarket,
  MoneyMarketStorage,
  UserBalancesInUSD,
} from '@/views/dapp/v2/lend/lend.types';

import { AssetAPY } from '../../lend-table.types';

export interface OpenRowMarketPreviewModalArgs {
  isDeposit: boolean;
  value: string;
  isMax: boolean;
}

export interface RowModalProps {
  closeModal: () => void;
  isDeposit?: boolean;
  assetApy: AssetAPY;
  openRowMarketPreviewModal: (x: OpenRowMarketPreviewModalArgs) => void;
  userBalancesInUSD: UserBalancesInUSD;
  marketKey: string;
  marketRecord: Record<string, MoneyMarket>;
  priceMap: CoinPriceRecord;
  coinsMap: CoinsMap;
  ipxPrice: number;
  moneyMarketStorage: MoneyMarketStorage;
}

export interface BorrowLimitsWrapperProps {
  supplyForm: UseFormReturn<SupplyBorrowForm>;
  marketRecord: Record<string, MoneyMarket>;
  marketKey: string;
  userBalancesInUSD: UserBalancesInUSD;
  isDeposit: boolean;
  priceMap: CoinPriceRecord;
}

export interface SupplyMarketModalProps {
  closeModal: () => void;
  isDeposit?: boolean;
  assetApy: AssetAPY;
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
  assetApy: AssetAPY;
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

export interface RowPreviewModalProps {
  closeModal: () => void;
  assetApy: AssetAPY;
  isDeposit: boolean;
  backRowMarketModal: (isSupplyOrBorrow: boolean) => void;
  openRowMarketResultModal: (
    isSuccess: boolean,
    isSupplyOrBorrow: boolean
  ) => void;
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

export interface ResultCollateralModalProps {
  tokenName: string;
  isSuccess: boolean;
  isEnabled: boolean;
  txLink?: string;
}

export interface CollateralModalProps {
  closeModal: () => void;
  assetApy: AssetAPY;
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

export interface LoadingModalProps {
  title: string;
  content: string;
}

export interface ResultModalProps {
  tokenName: string;
  closeModal: () => void;
  isEnabled: boolean;
  txLink?: string;
}

export interface SupplyBorrowForm {
  isMax: boolean;
  value: string;
}

export interface BorrowLimitProps {
  currentBorrowLimit: number;
  currentBorrowLimitPercentage: number;
  newBorrowLimit: number;
  newBorrowLimitPercentage: number;
}
