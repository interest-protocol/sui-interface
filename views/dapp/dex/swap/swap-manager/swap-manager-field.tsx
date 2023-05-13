import { BigNumber } from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { pathOr, prop } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';

import { COIN_DECIMALS } from '@/constants';
import InputBalance from '@/elements/input-balance';
import { useNetwork, useProvider, useSDK } from '@/hooks';
import { makeSWRKey, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../../../components/select-currency';
import { SwapManagerProps } from '../swap.types';
import { getSwapCoinOutAmountPayload } from '../swap.utils';

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
  poolsMap,
  setIsFetchingSwapAmount,
  setIsZeroSwapAmount,
  isFetchingSwapAmount,
  tokenIn,
  hasNoMarket,
  setError,
  searchTokenModalState,
}) => {
  const tokenOutValue = useWatch({ control, name: 'tokenOut.value' });

  const { provider } = useProvider();
  const { network } = useNetwork();
  const sdk = useSDK();

  const payload = getSwapCoinOutAmountPayload({
    tokenIn,
    coinsMap,
    tokenOutType,
    poolsMap,
    account,
  });

  const { error } = useSWR(
    makeSWRKey(
      [account, payload, prop('value', tokenIn), prop('type', tokenIn)],
      provider.devInspectTransactionBlock.name
    ),
    async () => {
      if (!payload || !account || !tokenIn || !+tokenIn.value) return;
      setIsFetchingSwapAmount(true);

      return sdk.getSwapCoinOutAmount(payload);
    },
    {
      onError: () => {
        setError(true);
      },
      onSuccess: (response) => {
        if (!response) {
          setError(false);
          setValue('tokenOut.value', '0');
          setIsZeroSwapAmount(true);
          return;
        }
        if (response.data.effects.status.status === 'failure') {
          setError(true);
        } else {
          setError(false);
          const amountOut = response.parsedData;

          setIsZeroSwapAmount(!amountOut);
          setValue(
            'tokenOut.value',
            FixedPointMath.toNumber(
              new BigNumber(amountOut),
              COIN_DECIMALS[network][tokenOutType],
              COIN_DECIMALS[network][tokenOutType]
            ).toString()
          );
          setIsFetchingSwapAmount(false);
        }
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
  const balance = FixedPointMath.toNumber(
    pathOr(ZERO_BIG_NUMBER, [tokenOutType, 'totalBalance'], coinsMap),
    pathOr(0, [tokenOutType, 'decimals'], coinsMap)
  ).toString();
  return (
    <InputBalance
      isLarge
      disabled
      balance={balance}
      register={register}
      setValue={setValue}
      name="tokenOut.value"
      Suffix={
        <SwapSelectCurrency
          currentToken={tokenOutType}
          type={getValues('tokenOut.type')}
          onSelectCurrency={onSelectCurrency}
          symbol={getValues('tokenOut.symbol')}
          searchTokenModalState={searchTokenModalState}
        />
      }
    />
  );
};

export default SwapManagerField;
