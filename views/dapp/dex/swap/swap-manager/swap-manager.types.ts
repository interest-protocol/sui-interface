import { FC } from 'react';
import { Control } from 'react-hook-form';

import { SVGProps } from '@/components/svg/svg.types';
import { DexMarket } from '@/interface';
import { ISwapForm, SwapPathObject } from '@/views/dapp/dex/swap/swap.types';

export interface SwapMessageProps {
  color?: string;
  message: string;
  Icon: FC<SVGProps>;
  extraData?: Record<string, string>;
}

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
