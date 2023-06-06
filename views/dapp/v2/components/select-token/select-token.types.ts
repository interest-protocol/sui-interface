import { Network } from '@interest-protocol/sui-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';
import { FC } from 'react';
import { Control } from 'react-hook-form';

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
  favoriteTokens: ReadonlyArray<string>;
  Icon: FC<SVGProps & { filled?: boolean }>;
  setFavorites: (value: ReadonlyArray<string>) => void;
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
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  provider: JsonRpcProvider;
  network: Network;
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
  favoriteTokensTypes: ReadonlyArray<string>;
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  favorites: ReadonlyArray<Web3ManagerSuiObject>;
  onSelectToken: SelectTokenProps['onSelectToken'];
  walletTokens: ReadonlyArray<Web3ManagerSuiObject>;
  favoriteTokens: ReadonlyArray<Web3ManagerSuiObject>;
  setFavorites: (value: ReadonlyArray<string>) => void;
  currentTokenType: SelectTokenProps['currentTokenType'];
  recommendedTokens: ReadonlyArray<Web3ManagerSuiObject>;
  searchTokenModalState: SelectTokenProps['searchTokenModalState'];
}
