import BigNumber from 'bignumber.js';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Control, UseFormRegister } from 'react-hook-form';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';

export interface SearchFieldForm {
  search: string;
}

export interface OnSelectCurrencyData {
  type: string;
  symbol: string;
  decimals: number;
}

export interface TokenModalMetadata {
  name: string;
  symbol: string;
  type: string;
  decimals: number;
  totalBalance: BigNumber;
}

export type OnSelectCurrency = (data: OnSelectCurrencyData) => void;

export interface SelectCurrencyProps {
  type: string;
  label?: string;
  symbol: string;
  disabled?: boolean;
  fromRight?: boolean;
  currentToken: string;
  onSelectCurrency: OnSelectCurrency;
  tokens: Record<string, Web3ManagerSuiObject>;
  searchTokenModalState: TokenModalMetadata | null;
}

export interface CurrencyDropdownProps {
  Input: ReactNode;
  fromRight?: boolean;
  isSearching: boolean;
  toggleModal: () => void;
  control: Control<SearchFieldForm>;
  tokens: Record<string, Web3ManagerSuiObject>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  currentToken: string;
  searchTokenModalState: TokenModalMetadata | null;
  onSelectCurrency: SelectCurrencyProps['onSelectCurrency'];
}

export interface SearchTokenProps {
  isSearching: boolean;
  register: UseFormRegister<SearchFieldForm>;
}
