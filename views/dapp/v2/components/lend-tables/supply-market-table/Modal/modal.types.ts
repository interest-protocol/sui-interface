import { TOKEN_SYMBOL } from '@/lib';

import { assetApyProps } from '../../market-table/market-table.types';

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
  isCenter?: boolean;
  closeModal: () => void;
}

export interface LoadingModalProps {
  title: string;
  content: string;
}

export interface ResultModalProps {
  title: string;
  content: string;
  closeModal: () => void;
  isSuccess: boolean;
}
