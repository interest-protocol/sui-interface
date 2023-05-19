import { BigNumber } from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { prop } from 'ramda';
import { FC, useEffect } from 'react';
import useSWR from 'swr';

import { COIN_DECIMALS } from '@/constants';
import { useNetwork, useProvider, useSDK } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { SwapManagerProps } from '../swap.types';
import { getSwapCoinOutAmountPayload } from '../swap.utils';

const SwapManagerField: FC<SwapManagerProps> = ({
  account,
  coinsMap,
  setValue,
  tokenInType,
  setDisabled,
  tokenOutType,
  poolsMap,
  setIsFetchingSwapAmount,
  setIsZeroSwapAmount,
  isFetchingSwapAmount,
  tokenIn,
  hasNoMarket,
  setError,
}) => {
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
      if (!payload || !tokenIn || !+tokenIn.value) return;
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
        }
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
        hasNoMarket
    );
  }, [
    error,
    tokenIn,
    hasNoMarket,
    tokenInType,
    tokenOutType,
    isFetchingSwapAmount,
  ]);

  return null;
};

export default SwapManagerField;
