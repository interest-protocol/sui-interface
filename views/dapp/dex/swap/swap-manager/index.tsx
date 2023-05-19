import { findMarket } from '@interest-protocol/sui-sdk';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { useNetwork } from '@/hooks';
import { LoadingSVG, TimesSVG } from '@/svg';

import { SwapManagerWrapperProps } from '../swap.types';
import SwapPath from '../swap-path';
import SwapButton from './swap-button';
import SwapMessage from './swap-button/swap-message';
import SwapManagerField from './swap-manager-field';

const SwapManager: FC<SwapManagerWrapperProps> = ({
  swapButtonProps,
  autoFetch,
  ...props
}) => {
  const [isFetchingSwapAmount, setIsFetchingSwapAmount] = useState(false);
  const [isZeroSwapAmount, setIsZeroSwapAmount] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [tokenIn] = useDebounce(
    useWatch({ control: props.control, name: 'tokenIn' }),
    900
  );
  const { network } = useNetwork();

  const markets = findMarket({
    data: props.poolsMap,
    coinInType: props.tokenInType,
    coinOutType: props.tokenOutType,
    network,
  });
  const hasNoMarket = !markets.length;

  const readyToSwap =
    !(error && +tokenIn.value > 0) &&
    !isFetchingSwapAmount &&
    !(isZeroSwapAmount && !!+tokenIn.value && !isFetchingSwapAmount) &&
    !(props.tokenInType === props.tokenOutType) &&
    !hasNoMarket;

  return (
    <>
      {autoFetch && (
        <SwapManagerField
          {...props}
          setIsFetchingSwapAmount={setIsFetchingSwapAmount}
          isFetchingSwapAmount={isFetchingSwapAmount}
          setError={setError}
          setIsZeroSwapAmount={setIsZeroSwapAmount}
          hasNoMarket={hasNoMarket}
          tokenIn={tokenIn}
          setDisabled={setDisabled}
        />
      )}
      {isFetchingSwapAmount && (
        <SwapMessage
          Icon={LoadingSVG}
          message="dexSwap.swapMessage.fetchingAmounts"
        />
      )}
      {isZeroSwapAmount && !!+tokenIn.value && !isFetchingSwapAmount && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          extraData={{ symbol: tokenIn.symbol }}
          message="dexSwap.swapMessage.increaseAmount"
        />
      )}
      {props.tokenInType === props.tokenOutType && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.sameOut"
        />
      )}
      {hasNoMarket && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.noMarket"
        />
      )}
      {error && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.error"
        />
      )}
      {readyToSwap && <SwapPath markets={markets} />}
      <SwapButton
        {...swapButtonProps}
        poolsMap={props.poolsMap}
        disabled={disabled}
      />
    </>
  );
};

export default SwapManager;
