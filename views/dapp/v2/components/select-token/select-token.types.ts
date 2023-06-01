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

export interface SelectTokenProps {
  onSelectToken: (token: CoinData) => void;
  currentTokenType: string | null;
  searchTokenModalState: TokenModalMetadata | null;
}

export interface SelectTokenModalProps extends SelectTokenProps {
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

export interface SelectTokenModalBodyProps {
  favoriteTokens: ReadonlyArray<Web3ManagerSuiObject>;
  favoriteTokensTypes: ReadonlyArray<string>;
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  tokenOrigin: TokenOrigin;
  setFavorites: (value: ReadonlyArray<string>) => void;
  currentTokenType: SelectTokenProps['currentTokenType'];
  onSelectToken: SelectTokenProps['onSelectToken'];
  searchTokenModalState: SelectTokenProps['searchTokenModalState'];
  recommendedTokens: ReadonlyArray<Web3ManagerSuiObject>;
  walletTokens: ReadonlyArray<Web3ManagerSuiObject>;
  favorites: ReadonlyArray<Web3ManagerSuiObject>;
  provider: JsonRpcProvider;
  network: Network;
  control: Control<SearchTokenForm>;
  fetchingMetaData: boolean;
}
