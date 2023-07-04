import { BigNumber } from 'bignumber.js';
import { prop } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import { useAmmSdk, useNetwork, useProvider } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { makeSWRKey } from '@/utils';

import { SwapManagerProps } from './swap-manager.types';

const SwapManagerField: FC<SwapManagerProps> = ({
  type,
  name,
  control,
  account,
  setError,
  decimals,
  setValue,
  dexMarket,
  hasNoMarket,
  setSwapPath,
  setIsZeroSwapAmount,
  isFetchingSwapAmount,
  setIsFetchingSwapAmount,
  setValueName,
}) => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const sdk = useAmmSdk();
  const [tokenIn] = useDebounce(useWatch({ control, name }), 900);

  const lock = useWatch({ control, name: 'lock' });

  const { error } = useSWR(
    makeSWRKey(
      [account, type, prop('value', tokenIn), prop('type', tokenIn), network],
      provider.devInspectTransactionBlock.name
    ),
    async () => {
      setValue(`${name}.locked`, true);

      const amount = FixedPointMath.toBigNumber(
        tokenIn.value,
        tokenIn.decimals
      );

      const safeAmount = amount.decimalPlaces(0, BigNumber.ROUND_DOWN);

      if (!tokenIn || !+tokenIn.value || lock || hasNoMarket) return;

      setIsFetchingSwapAmount(true);

      return sdk.quoteSwap({
        coinInType: tokenIn.type,
        coinOutType: type,
        coinInAmount: safeAmount.toString(),
        markets: dexMarket,
      });
    },
    {
      onError: () => {
        setError(false);
        setIsFetchingSwapAmount(false);
        setValue(`${name}.locked`, false);
        setValue('lock', true);
        setSwapPath(null);
      },
      onSuccess: (response) => {
        if (!response) {
          setError(false);
          setIsFetchingSwapAmount(false);
          setValue(`${name}.locked`, false);
          setValue('lock', true);
          return;
        }

        setIsZeroSwapAmount(!response.amount);
        setValue(
          `${setValueName}.value`,
          FixedPointMath.toNumber(
            new BigNumber(response.amount),
            decimals,
            decimals
          ).toString()
        );

        setSwapPath(response.swapObject);

        setError(false);
        setValue(`${name}.locked`, false);
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
      !!(error && +tokenIn?.value > 0) ||
        isFetchingSwapAmount ||
        tokenIn?.type === type ||
        hasNoMarket
    );
  }, [error, tokenIn, hasNoMarket, tokenIn?.type, type, isFetchingSwapAmount]);

  return null;
};

export default SwapManagerField;
