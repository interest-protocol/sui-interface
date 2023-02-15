import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { DynamicFieldInfo } from '@mysten/sui.js/src/types/dynamic_fields';
import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
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

export type PoolsMap = Record<string, Record<string, DynamicFieldInfo>>;

export interface SwapPathObject {
  baseTokens: ReadonlyArray<string>;
  tokenInType: string;
  tokenOutType: string;
}

export interface SwapButtonProps {
  slippage: string;
  disabled: boolean;
  tokenInType: string;
  tokenOutType: string;
  control: Control<ISwapForm>;
  getValues: UseFormGetValues<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  mutate: KeyedMutator<PaginatedCoins | undefined>;
}

export interface SwapManagerWrapperProps {
  swapButtonProps: Omit<SwapButtonProps, 'disabled'>;
  tokenInType: string;
  tokenOutType: string;
  account: string | null;
  volatilePoolsMap: PoolsMap;
  control: Control<ISwapForm>;
  isTokenOutOpenModal: boolean;
  register: UseFormRegister<ISwapForm>;
  setValue: UseFormSetValue<ISwapForm>;
  getValues: UseFormGetValues<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  onSelectCurrency: (data: OnSelectCurrencyData) => void;
  setTokenOutIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export interface SwapManagerProps {
  tokenInType: string;
  tokenOutType: string;
  account: string | null;
  volatilePoolsMap: PoolsMap;
  control: Control<ISwapForm>;
  isTokenOutOpenModal: boolean;
  register: UseFormRegister<ISwapForm>;
  setValue: UseFormSetValue<ISwapForm>;
  getValues: UseFormGetValues<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  setDisabled: Dispatch<SetStateAction<boolean>>;
  onSelectCurrency: (data: OnSelectCurrencyData) => void;
  setTokenOutIsOpenModal: Dispatch<SetStateAction<boolean>>;
  isFetchingSwapAmount: boolean;
  setIsFetchingSwapAmount: Dispatch<SetStateAction<boolean>>;
  setIsZeroSwapAmount: Dispatch<SetStateAction<boolean>>;
  tokenIn: SwapFormTokenData;
  hasNoMarket: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}

export interface GetSwapPayload {
  tokenIn: SwapFormTokenData;
  tokenOutType: string;
  coinsMap: Web3ManagerState['coinsMap'];
  volatilesPools: PoolsMap;
}

export interface LocalSwapSettings {
  slippage: string; // 20 equals 20%
}

export interface SwapPathProps {
  markets: ReadonlyArray<SwapPathObject>;
}
