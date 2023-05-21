import { DexFunctions } from '@interest-protocol/sui-sdk';
import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  UseFormGetValues,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { KeyedMutator } from 'swr';

import { Web3ManagerState } from '@/components/web3-manager/web3-manager.types';
import { DexMarket } from '@/interface';

import {
  OnSelectCurrency,
  TokenModalMetadata,
} from '../../components/select-currency/select-currency.types';
import { SwapFormTokenData } from '../dex.types';
import { ISwapSettingsForm } from './settings/settings.types';

export interface ISwapForm {
  tokenIn: SwapFormTokenData;
  tokenOut: SwapFormTokenData;
  lock: boolean;
  inputInLocked: boolean;
  inputOutLocked: boolean;
}

export type PoolsMap = DexMarket;

export interface SwapPathObject {
  baseTokens: ReadonlyArray<string>;
  coinInType: string;
  coinOutType: string;
  functionName: DexFunctions;
  typeArgs: Array<string>;
}

export interface SwapButtonProps {
  slippage: string;
  disabled: boolean;
  tokenInType: string;
  tokenOutType: string;
  control: Control<ISwapForm>;
  setValue: UseFormSetValue<ISwapForm>;
  getValues: UseFormGetValues<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  mutate: KeyedMutator<PaginatedCoins['data'] | undefined>;
  poolsMap: PoolsMap;
  deadline: string;
}

interface SwapManagerWrapperButtonProps {
  slippage: string;
  getValues: UseFormGetValues<ISwapForm>;
  mutate: KeyedMutator<PaginatedCoins['data'] | undefined>;
  deadline: string;
}

export interface SwapManagerWrapperProps {
  autoFetch: boolean;
  swapButtonProps: SwapManagerWrapperButtonProps;
  account: string | null;
  control: Control<ISwapForm>;
  poolsMap: PoolsMap;
  setValue: UseFormSetValue<ISwapForm>;
  getValues: UseFormGetValues<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  tokenInType: string;
  tokenOutType: string;
}

export interface SwapManagerProps {
  tokenOutType: string;
  hasNoMarket: boolean;
  account: string | null;
  poolsMap: PoolsMap;
  setValue: UseFormSetValue<ISwapForm>;
  setError: Dispatch<SetStateAction<boolean>>;
  tokenOutDecimals: number;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  setIsZeroSwapAmount: Dispatch<SetStateAction<boolean>>;
  setIsFetchingSwapAmount: Dispatch<SetStateAction<boolean>>;
  isFetchingSwapAmount: boolean;
  control: Control<ISwapForm>;
  name: 'tokenIn' | 'tokenOut';
  setValueName: 'tokenIn.value' | 'tokenOut.value';
  setValueLockName: 'inputInLocked' | 'inputOutLocked';
}

export interface LocalSwapSettings {
  slippage: string; // 20 equals 20%
  deadline: string; // 5 equals 5 minutes
  autoFetch: boolean;
}

export interface SwapPathProps {
  markets: ReadonlyArray<SwapPathObject>;
}

export interface SwapProps {
  setLocalSettings: (x: LocalSwapSettings) => void;
  localSettings: LocalSwapSettings;
  formSettingsDropdown: UseFormReturn<ISwapSettingsForm>;
  formSwap: UseFormReturn<ISwapForm>;
  autoButtonState: {
    isAuto: boolean;
    setAuto: Dispatch<SetStateAction<boolean>>;
  };
  openModalState: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };
  searchTokenModalState: TokenModalMetadata | null;
}

export interface CoinInputProps {
  coinsMap: Web3ManagerState['coinsMap'];
  formSwap: UseFormReturn<ISwapForm>;
  searchTokenModalState: SwapProps['searchTokenModalState'];
  onSelectCurrency: (name: 'tokenIn' | 'tokenOut') => OnSelectCurrency;
}
