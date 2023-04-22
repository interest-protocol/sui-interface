import { JsonRpcProvider } from '@mysten/sui.js';
import { CoinStruct, PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { WalletAccount } from '@wallet-standard/base';
import BigNumber from 'bignumber.js';
import { ReactNode } from 'react';
import { KeyedMutator } from 'swr';

import { Network } from '@/constants';
import { LocalTokenMetadataRecord } from '@/interface';

export interface Web3ManagerSuiObject {
  type: string;
  symbol: string;
  totalBalance: BigNumber;
  objects: ReadonlyArray<CoinStruct>;
  decimals: number;
}

export interface Web3ManagerState {
  account: null | string;
  coins: ReadonlyArray<Web3ManagerSuiObject>;
  coinsMap: Record<string, Web3ManagerSuiObject>;
  connected: boolean;
  error: boolean;
  mutate: KeyedMutator<PaginatedCoins['data'] | undefined>;
  isFetchingCoinBalances: boolean;
  walletAccount: null | WalletAccount;
}

export interface Web3ManagerProps {
  children: ReactNode;
}

export type CoinsMap = Web3ManagerState['coinsMap'];

export interface ParseCoinsArgs {
  data: PaginatedCoins['data'] | undefined | never[];
  localTokens: LocalTokenMetadataRecord;
  network: Network;
}

export interface GetAllCoinsArgs {
  provider: JsonRpcProvider;
  account: string;
}

export interface GetAllCoinsInternalArgs extends GetAllCoinsArgs {
  data: PaginatedCoins['data'];
  cursor: null | string;
  hasNextPage: boolean;
}
