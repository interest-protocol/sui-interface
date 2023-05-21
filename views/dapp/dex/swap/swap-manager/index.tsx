import { findMarket } from '@interest-protocol/sui-sdk';
import { FC, useState } from 'react';

import { useNetwork } from '@/hooks';

import { SwapManagerWrapperProps } from '../swap.types';
import SwapButton from './swap-button';
import SwapManagerField from './swap-manager-field';
import { SwapMessages } from './swap-messages';

const SwapManager: FC<SwapManagerWrapperProps> = ({
  swapButtonProps,
  autoFetch,
  tokenOutType,
  tokenInType,
  coinsMap,
  getValues,
  ...props
}) => {
  const [isFetchingSwapAmountOut, setIsFetchingSwapAmountOut] = useState(false);
  const [isZeroSwapAmountOut, setIsZeroSwapAmountOut] = useState(false);
  const [isFetchingSwapAmountIn, setIsFetchingSwapAmountIn] = useState(false);
  const [isZeroSwapAmountIn, setIsZeroSwapAmountIn] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { network } = useNetwork();

  const markets = findMarket({
    data: props.poolsMap,
    coinInType: tokenInType,
    coinOutType: tokenOutType,
    network,
  });
  const hasNoMarket = !markets.length;

  return (
    <>
      {autoFetch && (
        <>
          <SwapManagerField
            {...props}
            tokenOutDecimals={getValues('tokenOut.decimals')}
            setIsFetchingSwapAmount={setIsFetchingSwapAmountOut}
            isFetchingSwapAmount={isFetchingSwapAmountOut}
            setIsZeroSwapAmount={setIsZeroSwapAmountOut}
            setError={setError}
            hasNoMarket={hasNoMarket}
            setDisabled={setDisabled}
            tokenOutType={tokenOutType}
            control={props.control}
            name="tokenIn"
            setValueName="tokenOut.value"
            setValueLockName="inputOutLocked"
          />
          <SwapManagerField
            {...props}
            tokenOutDecimals={getValues('tokenIn.decimals')}
            setIsFetchingSwapAmount={setIsFetchingSwapAmountIn}
            isFetchingSwapAmount={isFetchingSwapAmountIn}
            setIsZeroSwapAmount={setIsZeroSwapAmountIn}
            setError={setError}
            hasNoMarket={hasNoMarket}
            setDisabled={setDisabled}
            tokenOutType={tokenInType}
            control={props.control}
            name="tokenOut"
            setValueName="tokenIn.value"
            setValueLockName="inputInLocked"
          />
        </>
      )}
      <SwapMessages
        isFetchingSwapAmountIn={isFetchingSwapAmountIn}
        isFetchingSwapAmountOut={isFetchingSwapAmountOut}
        isZeroSwapAmountIn={isZeroSwapAmountIn}
        isZeroSwapAmountOut={isZeroSwapAmountOut}
        error={error}
        hasNoMarket={hasNoMarket}
        markets={markets}
        control={props.control}
      />
      <SwapButton
        {...swapButtonProps}
        poolsMap={props.poolsMap}
        disabled={disabled}
        control={props.control}
        coinsMap={coinsMap}
        tokenInType={tokenInType}
        tokenOutType={tokenOutType}
        setValue={props.setValue}
      />
    </>
  );
};

export default SwapManager;
