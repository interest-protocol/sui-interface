import { Network } from '@mysten/sui.js';
import { BigNumber } from 'bignumber.js';
import { isEmpty, pathOr } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import { COIN_DECIMALS } from '@/constants';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG, TimesSVG } from '@/svg';
import { formatMoney, makeSWRKey, provider, ZERO_BIG_NUMBER } from '@/utils';
import { useGetVolatilePools } from '@/views/dapp/dex/swap/swap.hooks';

import SwapSelectCurrency from '../components/swap-select-currency';
import InputBalance from './input-balance';
import { SwapManagerProps } from './swap.types';
import { findMarket, findSwapAmountOutput, getSwapPayload } from './swap.utils';
import SwapButton from './swap-button';
import SwapMessage from './swap-button/swap-message';

const SwapManager: FC<SwapManagerProps> = ({
  mutate,
  control,
  account,
  coinsMap,
  slippage,
  register,
  setValue,
  getValues,
  tokenInType,
  tokenOutType,
  isMountedRef,
  onSelectCurrency,
  isTokenOutOpenModal,
  setTokenOutIsOpenModal,
}) => {
  const [isFetchingSwapAmount, setIsFetchingSwapAmount] = useState(false);
  const [tokenIn] = useDebounce(useWatch({ control, name: 'tokenIn' }), 900);

  const { data: volatilePoolsMap } = useGetVolatilePools();

  const devInspectTransactionPayload = getSwapPayload({
    tokenIn,
    coinsMap,
    tokenOutType,
    volatilesPools: volatilePoolsMap,
  });

  const { error } = useSWR(
    makeSWRKey(
      [account, devInspectTransactionPayload, tokenIn.value, tokenIn.type],
      provider.devInspectTransaction.name
    ),
    async () => {
      if (!devInspectTransactionPayload || !account || !+tokenIn.value) return;
      setIsFetchingSwapAmount(true);

      return provider.devInspectTransaction(
        account!,
        devInspectTransactionPayload!
      );
    },
    {
      onSuccess: (data) => {
        setIsFetchingSwapAmount(false);
        const amount = findSwapAmountOutput(data, tokenOutType);
        setValue(
          'tokenOut.value',
          FixedPointMath.toNumber(
            new BigNumber(amount),
            COIN_DECIMALS[Network.DEVNET][tokenOutType],
            COIN_DECIMALS[Network.DEVNET][tokenOutType]
          ).toString()
        );
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

  const disabled =
    (error && +tokenIn.value > 0) ||
    isFetchingSwapAmount ||
    tokenInType === tokenOutType ||
    hasNoMarket;

  return (
    <>
      {isMountedRef.current && (
        <InputBalance
          disabled
          name="tokenOut"
          register={register}
          setValue={setValue}
          balance={formatMoney(
            FixedPointMath.toNumber(
              pathOr(ZERO_BIG_NUMBER, [tokenOutType, 'totalBalance'], coinsMap),
              pathOr(0, [tokenOutType, 'decimals'], coinsMap)
            )
          )}
          currencySelector={
            <SwapSelectCurrency
              tokens={coinsMap}
              currentToken={tokenOutType}
              isModalOpen={isTokenOutOpenModal}
              type={getValues('tokenOut.type')}
              onSelectCurrency={onSelectCurrency}
              symbol={getValues('tokenOut.symbol')}
              setIsModalOpen={setTokenOutIsOpenModal}
            />
          }
        />
      )}
      {isFetchingSwapAmount && (
        <SwapMessage
          Icon={LoadingSVG}
          message="dexSwap.swapMessage.fetchingAmounts"
        />
      )}
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
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.error"
        />
      )}
      <SwapButton
        mutate={mutate}
        control={control}
        slippage={slippage}
        disabled={disabled}
        coinsMap={coinsMap}
        getValues={getValues}
        tokenInType={tokenInType}
        isMountedRef={isMountedRef}
        tokenOutType={tokenOutType}
      />
    </>
  );
};

export default SwapManager;
