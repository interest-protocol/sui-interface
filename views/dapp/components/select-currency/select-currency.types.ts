import BigNumber from 'bignumber.js';
import {
  Dispatch,
  FC,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  SetStateAction,
} from 'react';
import { Control, UseFormRegister } from 'react-hook-form';

import { SVGProps } from '@/components/svg/svg.types';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinData } from '@/interface';

export interface SearchFieldForm {
  search: string;
}

export type RemoveLocalToken = (
  type: string
) => (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type RenderData = (
  tokens: ReadonlyArray<Web3ManagerSuiObject>,
  onSelectCurrency: (data: OnSelectCurrencyData) => void,
  currentToken: string,
  isSearching?: boolean,
  noBalance?: boolean,
  addLocalToken?: (x: CoinData) => Promise<void>,
  removeLocalToken?: RemoveLocalToken
) => ReadonlyArray<ReactNode>;

export interface CurrencyTokenItemProps {
  type: string;
  symbol: string;
  decimals: number;
  noBalance: boolean;
  currentToken: string;
  isSearching?: boolean;
  totalBalance: BigNumber;
  DefaultTokenSVG: FC<SVGProps>;
  addLocalToken: (x: CoinData) => Promise<void>;
  onSelectCurrency: (data: OnSelectCurrencyData) => void;
  removeLocalToken: RemoveLocalToken | undefined;
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
  searchTokenModalState: TokenModalMetadata | null;
}

export interface CurrencyDropdownProps {
  Input: ReactNode;
  fromRight?: boolean;
  isSearching: boolean;
  toggleModal: () => void;
  control: Control<SearchFieldForm>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  currentToken: string;
  searchTokenModalState: TokenModalMetadata | null;
  onSelectCurrency: SelectCurrencyProps['onSelectCurrency'];

  addLocalToken: (x: CoinData) => Promise<void>;
}

export interface SearchTokenProps {
  isSearching: boolean;
  register: UseFormRegister<SearchFieldForm>;
}
