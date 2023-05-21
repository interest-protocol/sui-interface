import { findMarket } from '@interest-protocol/sui-sdk';
import { BigNumber } from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { prop } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import { useNetwork, useProvider, useSDK } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { SwapManagerProps } from '../swap.types';

const SwapManagerField: FC<SwapManagerProps> = ({
  account,
  setValue,
  setDisabled,
  tokenOutType,
  poolsMap,
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
}) => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const sdk = useSDK();
  const [tokenIn] = useDebounce(useWatch({ control, name }), 900);

  const lock = useWatch({ control, name: 'lock' });

  const path = findMarket({
    data: poolsMap,
    coinInType: tokenIn.type,
    coinOutType: tokenOutType,
    network,
  });

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

      if (!tokenIn || !+tokenIn.value || lock || !path.length) return;

      return sdk.getSwapCoinOutAmount({
        coinInType: tokenIn.type,
        coinOutType: tokenOutType,
        coinInAmount: safeAmount.toString(),
        dexMarkets: poolsMap,
      });
    },
    {
      onError: () => {
        setError(false);
        setIsFetchingSwapAmount(false);
        setValue(setValueLockName, false);
        setValue('lock', true);
      },
      onSuccess: (response) => {
        if (!response) {
          setError(false);
          setIsFetchingSwapAmount(false);
          setValue(setValueLockName, false);
          setValue('lock', true);
          return;
        }

        setIsZeroSwapAmount(!response);
        setValue(
          setValueName,
          FixedPointMath.toNumber(
            new BigNumber(response),
            tokenOutDecimals,
            tokenOutDecimals
          ).toString()
        );

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
    setDisabled(
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
