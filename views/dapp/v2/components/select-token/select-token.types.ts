import { Network } from '@interest-protocol/sui-amm-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';
import { FC } from 'react';
import { Control, UseFormReturn } from 'react-hook-form';

import { SVGProps } from '@/components/svg/svg.types';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { CoinData } from '@/interface';
import { TokenModalMetadata } from '@/views/dapp/components/select-currency/select-currency.types';

export interface TokenModalItemProps {
  type: string;
  symbol: string;
  balance: string;
  selected: boolean;
  onClick: () => void;
  recommended?: boolean;
  Icon: FC<SVGProps & { filled?: boolean }>;
  favoriteForm: UseFormReturn<FavoriteTokensForm>;
  isFavorite?: boolean;
}

export interface BaseTokenModalItemProps {
  symbol: string;
  selected: boolean;
  onClick: () => void;
  Icon: FC<SVGProps & { filled?: boolean }>;
}

export interface SelectTokenProps {
  onSelectToken: (token: CoinData) => Promise<void>;
  currentTokenType: string | null;
  currentTokenSymbol: string | null;
  searchTokenModalState: TokenModalMetadata | null;
}

export interface SelectTokenModalProps {
  onSelectToken: (token: CoinData) => Promise<void>;
  currentTokenType: string | null;
  searchTokenModalState: TokenModalMetadata | null;
  closeModal: () => void;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  provider: JsonRpcProvider;
  network: Network;
  walletTokens: ReadonlyArray<Web3ManagerSuiObject>;
  recommendedTokens: ReadonlyArray<Web3ManagerSuiObject>;
  favoriteForm: UseFormReturn<FavoriteTokensForm>;
}

export enum TokenOrigin {
  Recommended,
  Favorites,
  Wallet,
}

export interface SearchTokenForm {
  search: string;
}

export interface SelectTokenBaseTokensProps {
  tokens: ReadonlyArray<Web3ManagerSuiObject>;
  onSelectToken: SelectTokenProps['onSelectToken'];
  currentTokenType: SelectTokenProps['currentTokenType'];
}

export interface SelectTokenModalBodyProps {
  network: Network;
  tokenOrigin: TokenOrigin;
  fetchingMetaData: boolean;
  provider: JsonRpcProvider;
  control: Control<SearchTokenForm>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  onSelectToken: SelectTokenProps['onSelectToken'];
  currentTokenType: SelectTokenProps['currentTokenType'];
  searchTokenModalState: SelectTokenProps['searchTokenModalState'];
  walletTokens: SelectTokenModalProps['walletTokens'];
  recommendedTokens: SelectTokenModalProps['recommendedTokens'];
  favoriteForm: SelectTokenModalProps['favoriteForm'];
}

export interface FavoriteTokensForm {
  tokens: ReadonlyArray<string>;
}

export interface ModalTokenBodyProps {
  tokens: ReadonlyArray<Web3ManagerSuiObject>;
  currentTokenType: string | null;
  askedToken: Web3ManagerSuiObject | null;
  tokenOrigin: TokenOrigin;
  onSelectToken: SelectTokenProps['onSelectToken'];
  favoriteForm: SelectTokenModalProps['favoriteForm'];
  isFavorite?: boolean;
}

export interface FavoriteTokensProps {
  currentTokenType: string | null;
  askedToken: Web3ManagerSuiObject | null;
  tokenOrigin: TokenOrigin;
  onSelectToken: SelectTokenProps['onSelectToken'];
  favoriteForm: SelectTokenModalProps['favoriteForm'];
  coinsMap: Record<string, Web3ManagerSuiObject>;
}
