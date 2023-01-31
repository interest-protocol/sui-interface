import { isEmpty } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import { TimesSVG } from '@/svg';
import { makeSWRKey, provider } from '@/utils';
import { useGetVolatilePools } from '@/views/dapp/dex/swap/swap.hooks';
import SwapButton from '@/views/dapp/dex/swap/swap-button';

import { SwapManagerProps } from './swap.types';
import { findMarket, findSwapAmountOutput, getSwapPayload } from './swap.utils';
import SwapMessage from './swap-button/swap-message';

const SwapManager: FC<SwapManagerProps> = ({
  tokenInType,
  tokenOutType,
  control,
  setValue,
  account,
  setIsFetchingSwapAmount,
  mutate,
  getValues,
  coinsMap,
}) => {
  const [tokenIn] = useDebounce(useWatch({ control, name: 'tokenIn' }), 1200);

  const { data: volatilePoolsMap } = useGetVolatilePools();

  const devInspectTransactionPayload = getSwapPayload({
    tokenIn,
    tokenOutType,
    volatilesPools: volatilePoolsMap,
    coinsMap,
  });

  const { error } = useSWR(
    makeSWRKey(
      [account, devInspectTransactionPayload, tokenIn.value, tokenIn.type],
      provider.devInspectTransaction.name
    ),
    async () => {
      if (!devInspectTransactionPayload) return;
      setIsFetchingSwapAmount(true);

      return provider.devInspectTransaction(
        account!,
        devInspectTransactionPayload!
      );
    },
    {
      isPaused: () =>
        !account || !+tokenIn.value || !devInspectTransactionPayload,
      onSuccess: (data) => {
        setIsFetchingSwapAmount(false);
        const amount = findSwapAmountOutput(data, tokenOutType);
        setValue('tokenOut.value', Number(amount).toString());
      },
      revalidateOnFocus: true,
      revalidateOnMount: true,
      refreshWhenHidden: true,
      refreshInterval: 0,
    }
  );

  const markets = findMarket(volatilePoolsMap, tokenInType, tokenOutType);
  const hasNoMarket = !markets.length;

  if (isEmpty(volatilePoolsMap)) return null;

  return (
    <>
      {tokenInType === tokenOutType && (
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
      {error && +tokenIn.value > 0 && (
        <div>error fetching the output amount. Try higher slippage</div>
      )}
      <SwapButton
        mutate={mutate}
        control={control}
        coinsMap={coinsMap}
        getValues={getValues}
        tokenInType={tokenInType}
        tokenOutType={tokenOutType}
      />
    </>
  );
};

export default SwapManager;
