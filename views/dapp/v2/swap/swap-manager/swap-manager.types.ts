import { DexMarket, SwapPathObject } from '@interest-protocol/sui-sdk';
import { Dispatch, SetStateAction } from 'react';
import { Control, UseFormReturn, UseFormSetValue } from 'react-hook-form';

import { SwapForm } from '../swap.types';

export interface SwapManagerWrapperProps {
  autoFetch: boolean;
  dexMarket: DexMarket;
  tokenInType: string;
  tokenOutType: string;
  formSwap: UseFormReturn<SwapForm>;
}

export interface SwapMessagesProps {
  control: Control<SwapForm>;
  isFetchingSwapAmountIn: boolean;
  isFetchingSwapAmountOut: boolean;
  error: boolean;
  isZeroSwapAmountOut: boolean;
  hasNoMarket: boolean;
  swapPath: SwapPathObject | null;
  isZeroSwapAmountIn: boolean;
}

export interface SwapManagerProps {
  tokenOutType: string;
  hasNoMarket: boolean;
  account: string | null;
  dexMarket: DexMarket;
  setValue: UseFormSetValue<SwapForm>;
  setError: Dispatch<SetStateAction<boolean>>;
  tokenOutDecimals: number;
  setIsZeroSwapAmount: Dispatch<SetStateAction<boolean>>;
  setIsFetchingSwapAmount: Dispatch<SetStateAction<boolean>>;
  isFetchingSwapAmount: boolean;
  control: Control<SwapForm>;
  name: 'from' | 'to';
  setValueName: 'to.value' | 'from.value';
  setValueLockName: 'fromLocked' | 'toLocked';
  setSwapPath: Dispatch<SetStateAction<SwapPathObject | null>>;
}
