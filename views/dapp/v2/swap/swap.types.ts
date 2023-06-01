import { DexMarket } from '@interest-protocol/sui-sdk';
import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { Dispatch, SetStateAction } from 'react';
import {
  UseFormGetValues,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { KeyedMutator } from 'swr';

import { CoinData } from '@/interface';
import { TokenModalMetadata } from '@/interface';

export interface LocalSwapSettings {
  slippage: string; // 20 equals 20%
  deadline: string; // 5 equals 5 minutes
  autoFetch: boolean;
}

export interface ISwapSettingsForm {
  slippage: string;
  deadline: string;
  autoFetch: boolean;
}

export interface SwapToken extends CoinData {
  value: string;
  locked: boolean;
}

export interface SwapForm {
  to: SwapToken;
  from: SwapToken;
  lock: boolean;
  fromLocked: boolean;
  toLocked: boolean;
  disabled: boolean;
}

export interface SwapProps {
  setLocalSettings: (x: LocalSwapSettings) => void;
  formSettings: UseFormReturn<ISwapSettingsForm>;
  formSwap: UseFormReturn<SwapForm>;
  openModalState: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };
  searchTokenModalState: TokenModalMetadata | null;
}

export interface SwapBodyProps {
  formSettings: UseFormReturn<ISwapSettingsForm>;
  formSwap: UseFormReturn<SwapForm>;
  searchTokenModalState: TokenModalMetadata | null;
}

export interface SwapHeaderProps {
  setLocalSettings: SwapProps['setLocalSettings'];
  formSettings: SwapProps['formSettings'];
}

export interface SwapFormProps {
  formSwap: UseFormReturn<SwapForm>;
  searchTokenModalState: TokenModalMetadata | null;
  formSettings: SwapProps['formSettings'];
  dexMarket: DexMarket;
  mutate: KeyedMutator<PaginatedCoins['data'] | undefined>;
}

export interface SwapInputProps {
  name: 'to' | 'from';
  formSwap: UseFormReturn<SwapForm>;
  searchTokenModalState: TokenModalMetadata | null;
}

export interface SwapFieldProps {
  setValue: UseFormSetValue<SwapForm>;
  getValues: UseFormGetValues<SwapForm>;
}

export interface SwapManagerWrapperProps {
  formSettings: SwapProps['formSettings'];
  formSwap: SwapProps['formSwap'];
  dexMarket: DexMarket;
}
