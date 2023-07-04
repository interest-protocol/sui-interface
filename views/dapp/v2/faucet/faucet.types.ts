import BigNumber from 'bignumber.js';
import { Control, UseFormGetValues, UseFormRegister } from 'react-hook-form';

interface ObjectData {
  id: string;
  balance: string;
}

export interface ItemBalanceProps {
  objectsData: ReadonlyArray<ObjectData>;
  totalBalance: BigNumber;
  decimals: number;
  symbol: string;
  type: string;
}

export interface TokenModalItemProps {
  symbol: string;
  type: string;
  onSelectCurrency: (type: string, symbol: string) => void;
}

export interface FaucetChooseTokenModalProps {
  register: UseFormRegister<FaucetSearchTokenForm>;
  control: Control<FaucetSearchTokenForm, any>;
  onSelectCurrency: (type: string, symbol: string) => void;
  closeModal: () => void;
}

export interface FaucetResultModalProps {
  closeModal: () => void;
  txLink: string;
}

export interface FaucetFailModalProps {
  closeModal: () => void;
  message: string;
}

export interface FaucetSearchTokenForm {
  search: string;
  type: string;
  symbol: string;
}

export interface FaucetChooseTokenModalBodyProps {
  onSelectCurrency: (type: string, symbol: string) => void;
  control: Control<FaucetSearchTokenForm, any>;
}

export interface FaucetChooseTokenModalHeaderProps {
  register: UseFormRegister<FaucetSearchTokenForm>;
  closeModal: () => void;
}

export interface GetSVGProps {
  type: string;
}

export interface ItemBalanceDetailsProps {
  objectsData: ReadonlyArray<ObjectData>;
  openDetails: boolean;
  decimals: number;
}

export interface OpenDetailsProps {
  isOpen: boolean;
  handleClick: () => void;
}

export interface MintButtonProps {
  getValues: UseFormGetValues<FaucetSearchTokenForm>;
  loadingModal: () => void;
  failModal: (message: string) => void;
  confirmModal: (txLink: string) => void;
}
