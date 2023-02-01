import { BigNumber } from 'bignumber.js';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Control, UseFormRegister } from 'react-hook-form';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';

import { OnSelectCurrencyData } from './swap/swap.types';

export interface SwapTokenModalMetadata {
  name: string;
  symbol: string;
  type: string;
  decimals: number;
  totalBalance: BigNumber;
}

export interface SwapFormTokenData {
  value: string;
  type: string;
  decimals: number;
  symbol: string;
}

export interface SwapSelectCurrencyProps {
  type: string;
  label?: string;
  symbol: string;
  disabled?: boolean;
  fromRight?: boolean;
  currentToken: string;
  isModalOpen: boolean;
  tokens: Record<string, Web3ManagerSuiObject>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  onSelectCurrency: (data: OnSelectCurrencyData) => void;
}

export interface SwapCurrencyDropdownProps {
  Input: ReactNode;
  fromRight?: boolean;
  isSearching: boolean;
  isModalOpen: boolean;
  toggleModal: () => void;
  control: Control<{ search: string }>;
  tokens: Record<string, Web3ManagerSuiObject>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  currentToken: SwapSelectCurrencyProps['currentToken'];
  onSelectCurrency: SwapSelectCurrencyProps['onSelectCurrency'];
}

export interface SwapSearchTokenProps {
  isSearching: boolean;
  register: UseFormRegister<{ search: string }>;
}
