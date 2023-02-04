import { Network } from '@mysten/sui.js';
import { BigNumber } from 'bignumber.js';
import { pathOr } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import { COIN_DECIMALS } from '@/constants';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG, TimesSVG } from '@/svg';
import { formatMoney, makeSWRKey, provider, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../components/swap-select-currency';
import InputBalance from './input-balance';
import { SwapManagerProps } from './swap.types';
import { findMarket, findSwapAmountOutput, getSwapPayload } from './swap.utils';
import SwapMessage from './swap-button/swap-message';

const SwapManager: FC<SwapManagerProps> = ({
  control,
  account,
  coinsMap,
  register,
  setValue,
  getValues,
  tokenInType,
  setDisabled,
  tokenOutType,
  onSelectCurrency,
  volatilePoolsMap,
  isTokenOutOpenModal,
  setTokenOutIsOpenModal,
  isZeroSwapAmount,
  setIsFetchingSwapAmount,
  setIsZeroSwapAmount,
  isFetchingSwapAmount,
}) => {
  const [tokenIn] = useDebounce(useWatch({ control, name: 'tokenIn' }), 900);
  const tokenOutValue = useWatch({ control, name: 'tokenOut.value' });

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
        const amount = findSwapAmountOutput(data, tokenOutType);
        setIsZeroSwapAmount(!amount);
        setValue(
          'tokenOut.value',
          FixedPointMath.toNumber(
            new BigNumber(amount),
            COIN_DECIMALS[Network.DEVNET][tokenOutType],
            COIN_DECIMALS[Network.DEVNET][tokenOutType]
          ).toString()
        );
        setIsFetchingSwapAmount(false);
      },
      revalidateOnFocus: true,
      revalidateOnMount: true,
      refreshWhenHidden: true,
    }
  );

  const markets = findMarket(volatilePoolsMap, tokenInType, tokenOutType);
  const hasNoMarket = !markets.length;

  useEffect(() => {
    setDisabled(
      (error && +tokenIn.value > 0) ||
        isFetchingSwapAmount ||
        tokenInType === tokenOutType ||
        hasNoMarket ||
        (!+tokenOutValue && !!+tokenIn.value && !isFetchingSwapAmount)
    );
  }, [
    error,
    tokenIn,
    hasNoMarket,
    tokenInType,
    tokenOutType,
    tokenOutValue,
    isFetchingSwapAmount,
  ]);

  return (
    <>
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
    </>
  );
};

export default SwapManager;
