import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { LoadingSVG, TimesSVG } from '@/svg';

import { SwapManagerWrapperProps } from '../swap.types';
import { findMarket } from '../swap.utils';
import SwapPath from '../swap-path';
import SwapButton from './swap-button';
import SwapMessage from './swap-button/swap-message';
import SwapManagerField from './swap-manager-field';

const SwapManager: FC<SwapManagerWrapperProps> = ({
  swapButtonProps,
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

  const markets = findMarket(
    props.volatilePoolsMap,
    props.tokenInType,
    props.tokenOutType
  );
  const hasNoMarket = !markets.length;

  const readyToSwap =
    !(error && +tokenIn.value > 0) &&
    !isFetchingSwapAmount &&
    !(isZeroSwapAmount && !!+tokenIn.value && !isFetchingSwapAmount) &&
    !(props.tokenInType === props.tokenOutType) &&
    !hasNoMarket;

  return (
    <>
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
      <SwapButton {...swapButtonProps} disabled={disabled} />
    </>
  );
};

export default SwapManager;
