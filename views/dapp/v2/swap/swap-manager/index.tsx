import { findMarket, SwapPathObject } from '@interest-protocol/sui-sdk';
import { FC, useState } from 'react';

import { useNetwork, useWeb3 } from '@/hooks';

import { SwapManagerWrapperProps } from './swap-manager.types';
import SwapManagerField from './swap-manager-field';
import { SwapMessages } from './swap-messages';

const SwapManager: FC<SwapManagerWrapperProps> = ({
  autoFetch,
  tokenOutType,
  tokenInType,
  dexMarket,
  formSwap,
}) => {
  const [isFetchingSwapAmountOut, setIsFetchingSwapAmountOut] = useState(false);
  const [isZeroSwapAmountOut, setIsZeroSwapAmountOut] = useState(false);
  const [isFetchingSwapAmountIn, setIsFetchingSwapAmountIn] = useState(false);
  const [isZeroSwapAmountIn, setIsZeroSwapAmountIn] = useState(false);
  const [error, setError] = useState(false);
  const [swapPath, setSwapPath] = useState<SwapPathObject | null>(null);

  const { network } = useNetwork();
  const { account } = useWeb3();

  const markets = findMarket({
    data: dexMarket,
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
            tokenOutDecimals={formSwap.getValues('to.decimals')}
            setIsFetchingSwapAmount={setIsFetchingSwapAmountOut}
            isFetchingSwapAmount={isFetchingSwapAmountOut}
            setIsZeroSwapAmount={setIsZeroSwapAmountOut}
            setError={setError}
            hasNoMarket={hasNoMarket}
            tokenOutType={tokenOutType}
            control={formSwap.control}
            name="from"
            setValueName="to.value"
            setValueLockName="toLocked"
            setSwapPath={setSwapPath}
            account={account}
            dexMarket={dexMarket}
            setValue={formSwap.setValue}
          />
          <SwapManagerField
            tokenOutDecimals={formSwap.getValues('from.decimals')}
            setIsFetchingSwapAmount={setIsFetchingSwapAmountIn}
            isFetchingSwapAmount={isFetchingSwapAmountIn}
            setIsZeroSwapAmount={setIsZeroSwapAmountIn}
            setError={setError}
            hasNoMarket={hasNoMarket}
            tokenOutType={tokenInType}
            control={formSwap.control}
            name="to"
            setValueName="from.value"
            setValueLockName="fromLocked"
            setSwapPath={setSwapPath}
            account={account}
            dexMarket={dexMarket}
            setValue={formSwap.setValue}
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
        swapPath={swapPath}
        control={formSwap.control}
      />
    </>
  );
};

export default SwapManager;
