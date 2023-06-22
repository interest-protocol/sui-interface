import { findAllMarkets, SwapPathObject } from '@interest-protocol/sui-amm-sdk';
import { FC, useState } from 'react';

import { BASE_TOKENS_TYPES } from '@/constants';
import { useNetwork, useWeb3 } from '@/hooks';

import { SwapManagerWrapperProps } from './swap-manager.types';
import SwapManagerField from './swap-manager-field';
import { SwapMessages } from './swap-messages';

const SwapManager: FC<SwapManagerWrapperProps> = ({
  formSwap,
  dexMarket,
  autoFetch,
  tokenInType,
  tokenOutType,
}) => {
  const { account } = useWeb3();
  const { network } = useNetwork();

  const [error, setError] = useState(false);
  const [isZeroSwapAmountIn, setIsZeroSwapAmountIn] = useState(false);
  const [isZeroSwapAmountOut, setIsZeroSwapAmountOut] = useState(false);
  const [swapPath, setSwapPath] = useState<SwapPathObject | null>(null);
  const [isFetchingSwapAmountIn, setIsFetchingSwapAmountIn] = useState(false);
  const [isFetchingSwapAmountOut, setIsFetchingSwapAmountOut] = useState(false);

  const markets = findAllMarkets({
    baseTokens: BASE_TOKENS_TYPES[network],
    markets: dexMarket,
    coinInType: tokenInType,
    coinOutType: tokenOutType,
  });

  const hasNoMarket = !markets.length;

  return (
    <>
      {autoFetch && (
        <>
          <SwapManagerField
            name="from"
            setValueName="to"
            account={account}
            setError={setError}
            type={tokenOutType}
            dexMarket={dexMarket}
            setSwapPath={setSwapPath}
            hasNoMarket={hasNoMarket}
            control={formSwap.control}
            setValue={formSwap.setValue}
            setIsZeroSwapAmount={setIsZeroSwapAmountOut}
            decimals={formSwap.getValues('to.decimals')}
            isFetchingSwapAmount={isFetchingSwapAmountOut}
            setIsFetchingSwapAmount={setIsFetchingSwapAmountOut}
          />
          <SwapManagerField
            name="to"
            setValueName="from"
            account={account}
            type={tokenInType}
            setError={setError}
            dexMarket={dexMarket}
            hasNoMarket={hasNoMarket}
            setSwapPath={setSwapPath}
            control={formSwap.control}
            setValue={formSwap.setValue}
            setIsZeroSwapAmount={setIsZeroSwapAmountIn}
            isFetchingSwapAmount={isFetchingSwapAmountIn}
            decimals={formSwap.getValues('from.decimals')}
            setIsFetchingSwapAmount={setIsFetchingSwapAmountIn}
          />
        </>
      )}
      <SwapMessages
        error={error}
        swapPath={swapPath}
        hasNoMarket={hasNoMarket}
        control={formSwap.control}
        setError={formSwap.setError}
        errors={formSwap.formState.errors}
        isZeroSwapAmountIn={isZeroSwapAmountIn}
        isZeroSwapAmountOut={isZeroSwapAmountOut}
        isFetchingSwapAmountIn={isFetchingSwapAmountIn}
        isFetchingSwapAmountOut={isFetchingSwapAmountOut}
      />
    </>
  );
};

export default SwapManager;
