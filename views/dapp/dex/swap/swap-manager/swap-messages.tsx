import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Message } from '@/components';
import { LoadingSVG, TimesSVG } from '@/svg';
import SwapPath from '@/views/dapp/dex/swap/swap-manager/swap-path';

import { SwapMessagesProps } from './swap-manager.types';

export const SwapMessages: FC<SwapMessagesProps> = ({
  control,
  isFetchingSwapAmountIn,
  isFetchingSwapAmountOut,
  error,
  isZeroSwapAmountOut,
  hasNoMarket,
  swapPath,
  isZeroSwapAmountIn,
}) => {
  const tokenIn = useWatch({ control: control, name: 'tokenIn' });
  const tokenOut = useWatch({ control: control, name: 'tokenOut' });

  const readyToSwap =
    !(error && +tokenIn.value > 0) &&
    !(error && +tokenOut.value > 0) &&
    !isFetchingSwapAmountOut &&
    !(isZeroSwapAmountOut && !!+tokenIn.value && !isFetchingSwapAmountOut) &&
    !isFetchingSwapAmountIn &&
    !(isZeroSwapAmountIn && !!+tokenOut.value && !isFetchingSwapAmountIn) &&
    !(tokenIn.type === tokenOut.type) &&
    !hasNoMarket;

  return (
    <>
      {(isFetchingSwapAmountIn || isFetchingSwapAmountOut) && (
        <Message
          Icon={LoadingSVG}
          message="dexSwap.swapMessage.fetchingAmounts"
        />
      )}
      {(isZeroSwapAmountIn && !!+tokenIn.value && !isFetchingSwapAmountIn) ||
        (isZeroSwapAmountOut &&
          !!+tokenOut.value &&
          !isFetchingSwapAmountOut && (
            <Message
              color="error"
              Icon={TimesSVG}
              extraData={{
                symbol: +tokenIn.value ? tokenIn.symbol : tokenOut.symbol,
              }}
              message="dexSwap.swapMessage.increaseAmount"
            />
          ))}
      {tokenIn.type === tokenOut.type && (
        <Message
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.sameOut"
        />
      )}
      {hasNoMarket && (
        <Message
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.noMarket"
        />
      )}
      {error && (
        <Message
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.error"
        />
      )}
      {readyToSwap && swapPath && <SwapPath swapPath={swapPath} />}
    </>
  );
};
