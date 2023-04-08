import { DevInspectResults } from '@mysten/sui.js/src/types';
import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { KeyedMutator } from 'swr';

import { Web3ManagerState } from '@/components/web3-manager/web3-manager.types';
import { DexFunctions, Network } from '@/constants';
import { CoinData, DexMarket } from '@/interface';

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
  tokenInType: string;
  tokenOutType: string;
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
  mutate: KeyedMutator<PaginatedCoins | undefined>;
  poolsMap: PoolsMap;
}

export interface SwapManagerWrapperProps {
  swapButtonProps: Omit<SwapButtonProps, 'disabled'>;
  tokenInType: string;
  tokenOutType: string;
  account: string | null;
  poolsMap: PoolsMap;
  control: Control<ISwapForm>;
  register: UseFormRegister<ISwapForm>;
  setValue: UseFormSetValue<ISwapForm>;
  getValues: UseFormGetValues<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  onSelectCurrency: (data: CoinData) => void;
  searchTokenModalState: TokenModalMetadata | null;
}

export interface SwapManagerProps {
  tokenInType: string;
  tokenOutType: string;
  hasNoMarket: boolean;
  account: string | null;
  tokenIn: SwapFormTokenData;
  poolsMap: PoolsMap;
  control: Control<ISwapForm>;
  isFetchingSwapAmount: boolean;
  register: UseFormRegister<ISwapForm>;
  setValue: UseFormSetValue<ISwapForm>;
  getValues: UseFormGetValues<ISwapForm>;
  coinsMap: Web3ManagerState['coinsMap'];
  setError: Dispatch<SetStateAction<boolean>>;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  searchTokenModalState: TokenModalMetadata | null;
  setIsZeroSwapAmount: Dispatch<SetStateAction<boolean>>;
  onSelectCurrency: (data: CoinData) => void;
  setIsFetchingSwapAmount: Dispatch<SetStateAction<boolean>>;
}

export interface GetSwapPayload {
  tokenIn: SwapFormTokenData;
  tokenOutType: string;
  coinsMap: Web3ManagerState['coinsMap'];
  poolsMap: PoolsMap;
  network: Network;
}

export interface LocalSwapSettings {
  slippage: string; // 20 equals 20%
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

export interface FindMarketArgs {
  data: PoolsMap;
  tokenInType: string;
  tokenOutType: string;
  network: Network;
}

export interface FindSwapAmountOutput {
  packageId: string;
  data: DevInspectResults | undefined;
}
