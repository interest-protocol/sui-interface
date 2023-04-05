import { BigNumber } from 'bignumber.js';
import { pathOr, prop } from 'ramda';
import { FC, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import useSWR from 'swr';

import { COIN_DECIMALS, OBJECT_RECORD } from '@/constants';
import InputBalance from '@/elements/input-balance';
import { useNetwork, useProvider } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { makeSWRKey, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../../../components/select-currency';
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

  const devInspectTransactionPayload = getSwapPayload({
    tokenIn,
    coinsMap,
    tokenOutType,
    poolsMap,
    network,
  });

  const { error } = useSWR(
    makeSWRKey(
      [
        account,
        devInspectTransactionPayload,
        prop('value', tokenIn),
        prop('type', tokenIn),
      ],
      provider.devInspectTransactionBlock.name
    ),
    async () => {
      if (
        !devInspectTransactionPayload ||
        !account ||
        !tokenIn ||
        !+tokenIn.value
      )
        return;
      setIsFetchingSwapAmount(true);

      return provider.devInspectTransactionBlock({
        transactionBlock: devInspectTransactionPayload!,
        sender: account!,
      });
    },
    {
      onError: () => {
        setError(true);
      },
      onSuccess: (data) => {
        const amount = findSwapAmountOutput({
          data,
          packageId: OBJECT_RECORD[network].PACKAGE_ID,
        });
        setError(false);

        setIsZeroSwapAmount(!amount);
        setValue(
          'tokenOut.value',
          FixedPointMath.toNumber(
            new BigNumber(amount),
            COIN_DECIMALS[network][tokenOutType],
            COIN_DECIMALS[network][tokenOutType]
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
