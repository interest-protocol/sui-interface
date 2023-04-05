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
  stable: boolean;
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
  mutate: KeyedMutator<PaginatedCoins | undefined>;
  isFetchingCoinBalances: boolean;
  walletAccount: null | WalletAccount;
}

export interface Web3ManagerProps {
  children: ReactNode;
}

export type CoinsMap = Web3ManagerState['coinsMap'];

export interface ParseCoinsArg {
  data: PaginatedCoins | undefined | never[];
  localTokens: LocalTokenMetadataRecord;
  network: Network;
}
