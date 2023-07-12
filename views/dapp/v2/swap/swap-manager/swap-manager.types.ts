import { DexMarket, SwapPathObject } from '@interest-protocol/sui-amm-sdk';
import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldErrors,
  UseFormReturn,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form';

import { SwapForm } from '../swap.types';

export interface SwapManagerWrapperProps {
  autoFetch: boolean;
  dexMarket: DexMarket;
  tokenInType: string;
  tokenOutType: string;
  formSwap: UseFormReturn<SwapForm>;
}

export interface SwapMessagesProps {
  error: boolean;
  hasNoMarket: boolean;
  control: Control<SwapForm>;
  isZeroSwapAmountIn: boolean;
  isZeroSwapAmountOut: boolean;
  errors: FieldErrors<SwapForm>;
  swapPath: SwapPathObject | null;
  isFetchingSwapAmountIn: boolean;
  isFetchingSwapAmountOut: boolean;
  setError: UseFormSetError<SwapForm>;
}

export interface SwapManagerProps {
  type: string;
  decimals: number;
  name: 'from' | 'to';
  setValueName: 'from' | 'to';
  hasNoMarket: boolean;
  dexMarket: DexMarket;
  account: string | null;
  control: Control<SwapForm>;
  isFetchingSwapAmount: boolean;
  setValue: UseFormSetValue<SwapForm>;
  setError: Dispatch<SetStateAction<boolean>>;
  setIsZeroSwapAmount: Dispatch<SetStateAction<boolean>>;
  setIsFetchingSwapAmount: Dispatch<SetStateAction<boolean>>;
  setSwapPath: Dispatch<SetStateAction<SwapPathObject | null>>;
}
