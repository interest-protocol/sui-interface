import { Control } from 'react-hook-form';

import { ISwapForm, SwapPathObject } from '@/views/dapp/dex/swap/swap.types';

export interface SwapMessagesProps {
  control: Control<ISwapForm>;
  isFetchingSwapAmountIn: boolean;
  isFetchingSwapAmountOut: boolean;
  error: boolean;
  isZeroSwapAmountOut: boolean;
  hasNoMarket: boolean;
  markets: ReadonlyArray<SwapPathObject>;
  isZeroSwapAmountIn: boolean;
}
