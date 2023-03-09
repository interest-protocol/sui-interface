import { BigNumber } from 'bignumber.js';
import { pathOr } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';

import { COIN_DECIMALS, Network } from '@/constants';
import InputBalance from '@/elements/input-balance';
import { FixedPointMath } from '@/sdk';
import { formatMoney, makeSWRKey, provider, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../../components/swap-select-currency';
import { SwapManagerProps } from '../swap.types';
import { findSwapAmountOutput, getSwapPayload } from '../swap.utils';

const SwapManagerField: FC<SwapManagerProps> = ({
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
  setIsFetchingSwapAmount,
  setIsZeroSwapAmount,
  isFetchingSwapAmount,
  tokenIn,
  hasNoMarket,
  setError,
  searchingState,
  formSearch,
  searchTokenModalState,
}) => {
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
      onError: () => setError(true),
      onSuccess: (data) => {
        const amount = findSwapAmountOutput(data, tokenOutType);
        setError(false);

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
      refreshWhenHidden: false,
    }
  );

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
    <InputBalance
      balance={formatMoney(
        FixedPointMath.toNumber(
          pathOr(ZERO_BIG_NUMBER, [tokenOutType, 'totalBalance'], coinsMap),
          pathOr(0, [tokenOutType, 'decimals'], coinsMap)
        )
      )}
      name="tokenOut.value"
      register={register}
      setValue={setValue}
      disabled
      Prefix={
        <SwapSelectCurrency
          tokens={coinsMap}
          currentToken={tokenOutType}
          isModalOpen={isTokenOutOpenModal}
          type={getValues('tokenOut.type')}
          onSelectCurrency={onSelectCurrency}
          symbol={getValues('tokenOut.symbol')}
          setIsModalOpen={setTokenOutIsOpenModal}
          searchingState={searchingState}
          formSearch={formSearch}
          searchTokenModalState={searchTokenModalState}
        />
      }
      isLarge={true}
      buttonMaxPosition="right"
    />
  );
};

export default SwapManagerField;
