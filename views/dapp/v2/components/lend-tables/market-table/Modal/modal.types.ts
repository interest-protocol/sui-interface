import { TOKEN_SYMBOL } from '@/lib';

import { assetApyProps } from '../../market-table/market-table.types';

export interface RowModalProps {
  closeModal: () => void;
  isSupplyOrBorrow?: boolean;
  assetApy: assetApyProps;
  openRowMarketPreviewModal: (isSupplyOrBorrow: boolean) => void;
}

export interface RowPreviewModalProps {
  closeModal: () => void;
  assetApy: assetApyProps;
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
  assetApy: assetApyProps;
  resultModal: () => void;
}

export interface LinesModalProps {
  description: string;
  value: string;
}

export interface HeaderModalProps {
  type: string;
  symbol: TOKEN_SYMBOL;
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
