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
