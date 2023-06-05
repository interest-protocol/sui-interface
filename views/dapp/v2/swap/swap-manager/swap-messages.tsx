import { Box } from '@interest-protocol/ui-kit';
import { propOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Message } from '@/components';
import { LoadingSVG } from '@/svg';
import SwapPath from '@/views/dapp/dex/swap/swap-manager/swap-path';

import { SwapMessagesProps } from './swap-manager.types';

export const SwapMessages: FC<SwapMessagesProps> = ({
  error,
  errors,
  control,
  swapPath,
  setError,
  hasNoMarket,
  isZeroSwapAmountIn,
  isZeroSwapAmountOut,
  isFetchingSwapAmountIn,
  isFetchingSwapAmountOut,
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

  if (error) {
    if (errors.to?.message !== 'error')
      setError('to', { type: 'custom', message: 'error' });

    return null;
  }

  if (hasNoMarket) {
    if (errors.to?.message !== 'noMarket')
      setError('to', { type: 'custom', message: 'noMarket' });

    return null;
  }

  if (tokenIn?.type === tokenOut?.type) {
    if (errors.to?.message !== 'sameTokens')
      setError('to', { type: 'custom', message: 'sameTokens' });

    return null;
  }

  const amountNotEnough =
    (isZeroSwapAmountIn && !!tokenInValue && !isFetchingSwapAmountIn) ||
    (isZeroSwapAmountOut && !!tokenOutValue && !isFetchingSwapAmountOut);

  if (amountNotEnough) {
    const name = tokenInValue ? 'from' : 'to';
    if (errors[name]?.message !== 'increaseAmount')
      setError(name, {
        type: 'custom',
        message: 'increaseAmount',
      });

    return null;
  }

  return (
    <Box gridColumn="1/-1">
      {(isFetchingSwapAmountIn || isFetchingSwapAmountOut) && (
        <Message
          Icon={LoadingSVG}
          message="dexSwap.swapMessage.fetchingAmounts"
        />
      )}
      {readyToSwap && swapPath && <SwapPath swapPath={swapPath} />}
    </Box>
  );
};
