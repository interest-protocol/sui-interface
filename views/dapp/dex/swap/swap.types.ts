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

import { TokenModalMetadata } from '../../components/select-currency/select-currency.types';
import { SwapFormTokenData } from '../dex.types';
import { ISwapSettingsForm } from './settings/settings.types';

export interface ISwapForm {
  tokenIn: SwapFormTokenData;
  tokenOut: SwapFormTokenData;
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

export interface SwapManagerWrapperProps {
  autoFetch: boolean;
  swapButtonProps: Omit<SwapButtonProps, 'disabled' | 'poolsMap'>;
  tokenInType: string;
  tokenOutType: string;
  account: string | null;
  control: Control<ISwapForm>;
  poolsMap: PoolsMap;
  setValue: UseFormSetValue<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
}

export interface SwapManagerProps {
  tokenInType: string;
  tokenOutType: string;
  hasNoMarket: boolean;
  account: string | null;
  tokenIn: SwapFormTokenData;
  poolsMap: PoolsMap;
  isFetchingSwapAmount: boolean;
  setValue: UseFormSetValue<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  setError: Dispatch<SetStateAction<boolean>>;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  setIsZeroSwapAmount: Dispatch<SetStateAction<boolean>>;
  setIsFetchingSwapAmount: Dispatch<SetStateAction<boolean>>;
}

export interface GetSwapCoinOutAmountPayloadArgs {
  tokenIn: SwapFormTokenData;
  tokenOutType: string;
  coinsMap: Web3ManagerState['coinsMap'];
  poolsMap: PoolsMap;
  account: string | null;
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
