import BigNumber from 'bignumber.js';
import { FC, ReactNode } from 'react';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { SVGProps } from '@/components/svg/svg.types';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinData } from '@/interface';

export interface SearchFieldForm {
  search: string;
}

export type CurrencyModalTabKeys = 'recommended' | 'wallet' | 'favorites';

type AddLocaToken = (x: CoinData) => Promise<void>;

export interface StaringProps {
  unStar?: boolean;
  onClick: () => void;
  isDisabled?: boolean;
}

export interface RenderDataArgs {
  noBalance?: boolean;
  currentToken: string;
  addLocalToken?: AddLocaToken;
  handleRemoveFromFavorite?: (x: string) => void;
  onSelectCurrency: (data: OnSelectCurrencyData) => void;
  tokens: ReadonlyArray<Web3ManagerSuiObject>;
  setFavoriteTokens: (type: string) => void;
  favoriteTokensMap?: Record<string, true>;
}

export type RenderData = (ags: RenderDataArgs) => ReadonlyArray<ReactNode>;

export interface CurrencyTokenItemProps
  extends Omit<RenderDataArgs, 'tokens' | 'addLocalToken'>,
    Web3ManagerSuiObject {
  DefaultTokenSVG: FC<SVGProps>;
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
  fromRight?: boolean;
  currentToken: string;
  toggleModal: () => void;
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  searchTokenModalState: TokenModalMetadata | null;
  onSelectCurrency: SelectCurrencyProps['onSelectCurrency'];
}

export interface SearchTokenProps {
  setValue: UseFormSetValue<SearchFieldForm>;
  register: UseFormRegister<SearchFieldForm>;
}

export interface CurrencyDropdownBodyProps {
  currentToken: string;
  tab: CurrencyModalTabKeys;
  favoriteTokens: ReadonlyArray<string>;
  control: Control<SearchFieldForm>;
  handleRemoveFromFavorite: (x: string) => void;
  askedToken: Web3ManagerSuiObject | null;
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  searchTokenModalState: TokenModalMetadata | null;
  setFavoriteTokens: (data: string) => void;
  handleSelectCurrency: (data: OnSelectCurrencyData) => void;
}
