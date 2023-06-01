import { BigNumber } from 'bignumber.js';
import { prop } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import { useNetwork, useProvider, useSDK } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { makeSWRKey } from '@/utils';

import { SwapManagerProps } from './swap-manager.types';

const SwapManagerField: FC<SwapManagerProps> = ({
  account,
  setValue,
  tokenOutType,
  dexMarket,
  hasNoMarket,
  setError,
  setIsZeroSwapAmount,
  setIsFetchingSwapAmount,
  isFetchingSwapAmount,
  control,
  name,
  setValueName,
  setValueLockName,
  tokenOutDecimals,
  setSwapPath,
}) => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const sdk = useSDK();
  const [tokenIn] = useDebounce(useWatch({ control, name }), 900);

  const lock = useWatch({ control, name: 'lock' });

  const { error } = useSWR(
    makeSWRKey(
      [
        account,
        tokenOutType,
        prop('value', tokenIn),
        prop('type', tokenIn),
        network,
      ],
      provider.devInspectTransactionBlock.name
    ),
    async () => {
      setIsFetchingSwapAmount(true);
      setValue(setValueLockName, true);

      const amount = FixedPointMath.toBigNumber(
        tokenIn.value,
        tokenIn.decimals
      );

      const safeAmount = amount.decimalPlaces(0, BigNumber.ROUND_DOWN);

      if (!tokenIn || !+tokenIn.value || lock || hasNoMarket) return;

      return sdk.quoteSwap({
        coinInType: tokenIn.type,
        coinOutType: tokenOutType,
        coinInAmount: safeAmount.toString(),
        markets: dexMarket,
      });
    },
    {
      onError: () => {
        setError(false);
        setIsFetchingSwapAmount(false);
        setValue(setValueLockName, false);
        setValue('lock', true);
        setSwapPath(null);
      },
      onSuccess: (response) => {
        if (!response) {
          setError(false);
          setIsFetchingSwapAmount(false);
          setValue(setValueLockName, false);
          setValue('lock', true);
          return;
        }

        setIsZeroSwapAmount(!response.amount);
        setValue(
          setValueName,
          FixedPointMath.toNumber(
            new BigNumber(response.amount),
            tokenOutDecimals,
            tokenOutDecimals
          ).toString()
        );

        setSwapPath(response.swapObject);

        setError(false);
        setValue(setValueLockName, false);
        setIsFetchingSwapAmount(false);
        setValue('lock', true);
      },
      revalidateOnFocus: true,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  useEffect(() => {
    setValue(
      'disabled',
      !!(error && +tokenIn.value > 0) ||
        isFetchingSwapAmount ||
        tokenIn.type === tokenOutType ||
        hasNoMarket
    );
  }, [
    error,
    tokenIn,
    hasNoMarket,
    tokenIn.type,
    tokenOutType,
    isFetchingSwapAmount,
  ]);

  return null;
};

export default SwapManagerField;
