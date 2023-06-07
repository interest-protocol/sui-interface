import { DexFunctions, DexMarket } from '@interest-protocol/sui-sdk';
import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldErrors,
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
  usdPrice: number | null;
}

export interface SwapForm {
  to: SwapToken;
  from: SwapToken;
  lock: boolean;
  disabled: boolean;
  maxValue: boolean;
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
  isLoading: boolean;
  dexMarket: DexMarket;
  formSwap: UseFormReturn<SwapForm>;
  formSettings: SwapProps['formSettings'];
  searchTokenModalState: TokenModalMetadata | null;
  mutate: KeyedMutator<PaginatedCoins['data'] | undefined>;
}

export interface SwapInputProps {
  name: 'to' | 'from';
  formSwap: UseFormReturn<SwapForm>;
  searchTokenModalState: TokenModalMetadata | null;
}

export interface TextFieldWrapperProps {
  control: UseFormReturn<SwapForm>['control'];
  name: SwapInputProps['name'];
  errors: FieldErrors<SwapForm>;
  currentTokenType: string;
  register: UseFormReturn<SwapForm>['register'];
  onSelectToken: (x: CoinData) => Promise<void>;
  searchTokenModalState: SwapInputProps['searchTokenModalState'];
  currentTokenSymbol: string | null;
  setValue: UseFormSetValue<SwapForm>;
}

export interface SwapSliderProps {
  balance: number;
  setValue: UseFormSetValue<SwapForm>;
  currentValue: number;
}

export interface SwapAmountInUSDProps {
  name: 'to' | 'from';
  control: Control<SwapForm>;
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

export interface SwapPathObject {
  baseTokens: ReadonlyArray<string>;
  coinInType: string;
  coinOutType: string;
  functionName: DexFunctions;
  typeArgs: Array<string>;
}

export interface SwapPathProps {
  swapPath: SwapPathObject;
}
