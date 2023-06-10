import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { pathOr, propOr } from 'ramda';
import { FC, useState } from 'react';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';

import { SwapMessagesProps } from './swap-manager.types';
import SwapPath from './swap-path';

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
  const t = useTranslations();
  const tokenIn = useWatch({ control: control, name: 'from' });
  const tokenOut = useWatch({ control: control, name: 'to' });
  const [toastState, setToastState] = useState<boolean>(false);

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

  const amountNotEnough =
    (isZeroSwapAmountIn && !!tokenInValue && !isFetchingSwapAmountIn) ||
    (isZeroSwapAmountOut && !!tokenOutValue && !isFetchingSwapAmountOut);

  const errorMessage = pathOr(null, ['to', 'message'], errors);

  // Clear errors
  useEffect(() => {
    // If there is no error or both tokens are not selected - do nothing
    if (!errorMessage || !tokenIn?.type || !tokenOut?.type) return;

    const name = tokenInValue ? 'from' : 'to';

    if (!amountNotEnough && errors[name]?.message === 'increaseAmount')
      setError(name, {});

    if (tokenIn?.type !== tokenOut?.type && errorMessage === 'sameTokens')
      setError(name, {});

    if (!error && errorMessage === 'error') setError(name, {});

    if (!hasNoMarket && errorMessage === 'noMarket') setError(name, {});
  }, [
    error,
    amountNotEnough,
    hasNoMarket,
    errorMessage,
    tokenIn?.type,
    tokenOut?.type,
  ]);

  useEffect(() => {
    if ((isFetchingSwapAmountIn || isFetchingSwapAmountOut) && !toastState)
      setToastState(true);
  }, [isFetchingSwapAmountIn, isFetchingSwapAmountOut]);

  useEffect(() => {
    if (toastState) toast.loading(t('swap.form.fetchMarkets'));
  }, [toastState]);

  useEffect(() => {
    if (!(isFetchingSwapAmountIn || isFetchingSwapAmountOut) && toastState) {
      setToastState(false);
      toast.dismiss();
    }
  }, [isFetchingSwapAmountIn, isFetchingSwapAmountOut]);

  // Set Error
  useEffect(() => {
    // If there is already an error or both tokens are not selected -> do nothing
    if (!!errorMessage || !tokenIn?.type || !tokenOut?.type) return;
    if (error)
      if (errors.to?.message !== 'error')
        setError('to', { type: 'custom', message: 'error' });

    if (hasNoMarket)
      if (errors.to?.message !== 'noMarket')
        setError('to', { type: 'custom', message: 'noMarket' });

    if (tokenIn?.type === tokenOut?.type)
      if (errors.to?.message !== 'sameTokens')
        setError('to', { type: 'custom', message: 'sameTokens' });

    if (amountNotEnough) {
      const name = tokenInValue ? 'from' : 'to';
      if (errors[name]?.message !== 'increaseAmount')
        setError(name, {
          type: 'custom',
          message: 'increaseAmount',
        });
    }
  }, [
    error,
    amountNotEnough,
    hasNoMarket,
    tokenIn?.type,
    tokenOut?.type,
    errorMessage,
  ]);

  if (errorMessage) return null;

  return (
    <Box gridColumn="1/-1" textAlign="center">
      {readyToSwap && swapPath && <SwapPath swapPath={swapPath} />}
    </Box>
  );
};
