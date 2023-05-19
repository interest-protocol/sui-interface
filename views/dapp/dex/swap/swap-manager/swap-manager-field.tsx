import { BigNumber } from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { prop } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import { COIN_DECIMALS } from '@/constants';
import { useNetwork, useProvider, useSDK } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { SwapManagerProps } from '../swap.types';
import { getSwapCoinOutAmountPayload } from '../swap.utils';

const SwapManagerField: FC<SwapManagerProps> = ({
  account,
  coinsMap,
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
}) => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const sdk = useSDK();

  const [tokenIn] = useDebounce(useWatch({ control, name }), 900);

  const lock = useWatch({ control, name: 'lock' });

  const payloadOut = getSwapCoinOutAmountPayload({
    tokenIn,
    coinsMap,
    tokenOutType,
    poolsMap,
    account,
  });

  const { error } = useSWR(
    makeSWRKey(
      [account, payloadOut, prop('value', tokenIn), prop('type', tokenIn)],
      provider.devInspectTransactionBlock.name
    ),
    async () => {
      setIsFetchingSwapAmount(true);
      setValue(setValueLockName, true);
      if (!payloadOut || !tokenIn || !+tokenIn.value || lock) return;

      return sdk.getSwapCoinOutAmount(payloadOut);
    },
    {
      onError: () => {
        setError(true);
      },
      onSuccess: (response) => {
        if (!response) {
          setError(false);
          setIsFetchingSwapAmount(false);
          setValue(setValueLockName, false);
          setValue('lock', true);
          return;
        }
        if (response.data.effects.status.status === 'failure') {
          setError(true);
        } else {
          setError(false);
          const amountOut = response.parsedData;

          setIsZeroSwapAmount(!amountOut);
          setValue(
            setValueName,
            FixedPointMath.toNumber(
              new BigNumber(amountOut),
              COIN_DECIMALS[network][tokenOutType],
              COIN_DECIMALS[network][tokenOutType]
            ).toString()
          );
        }
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
