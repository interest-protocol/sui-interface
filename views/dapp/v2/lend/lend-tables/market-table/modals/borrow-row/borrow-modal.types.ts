import { AssetData } from '../../../lend-table.types';

export interface OpenRowBorrowMarketPreviewModalArgs {
  isBorrow: boolean;
  value: string;
  isMax: boolean;
}

export interface BorrowMarketModalProps {
  closeModal: () => void;
  isBorrow?: boolean;
  assetData: AssetData;
  openRowBorrowMarketPreviewModal: (
    x: OpenRowBorrowMarketPreviewModalArgs
  ) => void;
}

export interface BorrowMarketModalPreviewProps {
  closeModal: () => void;
  assetData: AssetData;
  isBorrow: boolean;
  backRowBorrowMarketModal: (isBorrow: boolean) => void;
  openRowBorrowMarketResultModal: (
    resultRowBorrowModalProps: ResultRowBorrowModalProps
  ) => void;
}

export interface ResultRowBorrowModalProps {
  isSuccess: boolean;
  isBorrow: boolean;
  txLink?: string;
}
