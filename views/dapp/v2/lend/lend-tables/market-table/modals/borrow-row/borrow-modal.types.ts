import { Asset } from '../../../lend-table.types';

export interface OpenRowBorrowMarketPreviewModalArgs {
  isBorrow: boolean;
  value: string;
  isMax: boolean;
}

export interface BorrowMarketModalProps {
  closeModal: () => void;
  isBorrow?: boolean;
  asset: Asset;
  openRowBorrowMarketPreviewModal: (
    x: OpenRowBorrowMarketPreviewModalArgs
  ) => void;
}

export interface BorrowMarketModalPreviewProps {
  closeModal: () => void;
  asset: Asset;
  isBorrow: boolean;
  backRowBorrowMarketModal: (isBorrow: boolean) => void;
  openRowBorrowMarketResultModal: (
    resultRowBorrowModalProps: ResultRowBorrowModalProps
  ) => void;
}

export interface ResultRowBorrowModalProps {
  isSuccess: boolean;
  isLoan: boolean;
  txLink?: string;
}
