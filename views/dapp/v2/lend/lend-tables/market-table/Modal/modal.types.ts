import { Dispatch, SetStateAction } from 'react';

import { CoinPriceRecord } from '@/hooks';
import {
  MoneyMarket,
  UserBalancesInUSD,
} from '@/views/dapp/v2/lend/lend.types';

import { AssetAPY } from '../../lend-table.types';

export interface RowModalProps {
  closeModal: () => void;
  isSupplyOrBorrow?: boolean;
  assetApy: AssetAPY;
  openRowMarketPreviewModal: (isSupplyOrBorrow: boolean) => void;
}

export interface RowPreviewModalProps {
  closeModal: () => void;
  assetApy: AssetAPY;
  isSupplyOrBorrow: boolean;
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

export interface CollateralModalProps {
  closeModal: () => void;
  assetApy: AssetAPY;
  resultModal: () => void;
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
  isSuccess: boolean;
}
