import { SuiObjectInfo } from '@mysten/sui.js';
import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { Dispatch, SetStateAction } from 'react';
import { Control, UseFormGetValues, UseFormSetValue } from 'react-hook-form';
import { KeyedMutator } from 'swr';

import { Web3ManagerState } from '@/components/web3-manager/web3-manager.types';

import { SwapFormTokenData } from '../dex.types';

export interface ISwapForm {
  tokenIn: SwapFormTokenData;
  tokenOut: SwapFormTokenData;
}

export interface OnSelectCurrencyData {
  type: string;
  symbol: string;
  decimals: number;
}

export type PoolsMap = Record<string, Record<string, SuiObjectInfo>>;

export interface SwapManagerProps {
  setValue: UseFormSetValue<ISwapForm>;
  account: string | null;
  setIsFetchingSwapAmount: Dispatch<SetStateAction<boolean>>;
  control: Control<ISwapForm>;
  mutate: KeyedMutator<never[] | PaginatedCoins>;
  getValues: UseFormGetValues<ISwapForm>;
  tokenInType: string;
  tokenOutType: string;
  coinsMap: Web3ManagerState['coinsMap'];
}

export interface SwapPathObject {
  baseTokens: ReadonlyArray<string>;
  tokenInType: string;
  tokenOutType: string;
}

export interface SwapButtonProps {
  control: Control<ISwapForm>;
  mutate: KeyedMutator<never[] | PaginatedCoins>;
  getValues: UseFormGetValues<ISwapForm>;
  tokenInType: string;
  tokenOutType: string;
  coinsMap: Web3ManagerState['coinsMap'];
}

export interface GetSwapPayload {
  tokenIn: SwapFormTokenData;
  tokenOutType: string;
  coinsMap: Web3ManagerState['coinsMap'];
  volatilesPools: PoolsMap;
}

export interface LocalSwapSettings {
  slippage: string; // 20 equals 20%
  autoFetch: boolean; // minutes
}
