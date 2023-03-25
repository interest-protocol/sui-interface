import { PaginatedCoins } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { FC, ReactNode } from 'react';
import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { KeyedMutator } from 'swr';

import { SVGProps } from '@/components/svg/svg.types';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinData } from '@/interface';

import { LocalTokenData } from './../../../../components/web3-manager/web3-manager.types';

export interface SearchFieldForm {
  search: string;
}

export type CurrencyModalTabKeys = 'recommended' | 'wallet' | 'favorites';

type AddLocaToken = (x: CoinData) => Promise<void>;

export type RemoveLocalToken = (type: string) => () => Promise<void>;

export interface StaringProps {
  unStar?: boolean;
  isDisabled?: boolean;
  onClick?: ReturnType<RemoveLocalToken> | (() => AddLocaToken);
}

export interface RenderDataArgs {
  isWallet?: boolean;
  noBalance?: boolean;
  currentToken: string;
  isSearching?: boolean;
  addLocalToken?: AddLocaToken;
  removeLocalToken?: RemoveLocalToken;
  onSelectCurrency: (data: OnSelectCurrencyData) => void;
  tokens: ReadonlyArray<Web3ManagerSuiObject>;
}

export type RenderData = (ags: RenderDataArgs) => ReadonlyArray<ReactNode>;

export interface CurrencyTokenItemProps
  extends Omit<RenderDataArgs, 'tokens'>,
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
  mutate: KeyedMutator<PaginatedCoins | undefined>;
  onSelectCurrency: SelectCurrencyProps['onSelectCurrency'];
}

export interface SearchTokenProps {
  setValue: UseFormSetValue<SearchFieldForm>;
  register: UseFormRegister<SearchFieldForm>;
}

export interface CurrencyDropdownBodyProps {
  currentToken: string;
  tab: CurrencyModalTabKeys;
  addLocalToken: AddLocaToken;
  favoriteTokens: LocalTokenData;
  control: Control<SearchFieldForm>;
  handleRemoveFromLocal: RemoveLocalToken;
  askedToken: Web3ManagerSuiObject | null;
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  searchTokenModalState: TokenModalMetadata | null;
  setFavoriteTokens: (data: LocalTokenData) => void;
  handleSelectCurrency: (data: OnSelectCurrencyData) => void;
}
