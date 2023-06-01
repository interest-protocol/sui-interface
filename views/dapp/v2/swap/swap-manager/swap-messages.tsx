import { propOr } from 'ramda';
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
  const tokenIn = useWatch({ control: control, name: 'from' });
  const tokenOut = useWatch({ control: control, name: 'to' });

  const tokenInValue = +(propOr('0', 'value', tokenIn) as string);
  const tokenOutValue = +(propOr('0', 'value', tokenOut) as string);

  const readyToSwap =
    !(error && tokenInValue > 0) &&
    !(error && tokenOutValue > 0) &&
    !isFetchingSwapAmountOut &&
    !(isZeroSwapAmountOut && !!tokenInValue && !isFetchingSwapAmountOut) &&
    !isFetchingSwapAmountIn &&
    !(isZeroSwapAmountIn && !!tokenOutValue && !isFetchingSwapAmountIn) &&
    !(propOr('', 'type', tokenIn) === propOr('', 'type', tokenOut)) &&
    !hasNoMarket;

  return (
    <>
      {(isFetchingSwapAmountIn || isFetchingSwapAmountOut) && (
        <Message
          Icon={LoadingSVG}
          message="dexSwap.swapMessage.fetchingAmounts"
        />
      )}
      {(isZeroSwapAmountIn && !!tokenInValue && !isFetchingSwapAmountIn) ||
        (isZeroSwapAmountOut && !!tokenOutValue && !isFetchingSwapAmountOut && (
          <Message
            color="error"
            Icon={TimesSVG}
            extraData={{
              symbol: tokenInValue ? tokenIn.symbol : tokenOut.symbol,
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
