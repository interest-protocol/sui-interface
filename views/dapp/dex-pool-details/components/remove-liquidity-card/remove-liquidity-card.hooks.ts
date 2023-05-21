import BigNumber from 'bignumber.js';
import useSWR from 'swr';

import { useSDK } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { UseGetRemoveLiquidityAmountsArgs } from './remove-liquidity-card.types';

const getSafeAmount = (
  data: [number, number] | undefined | null
): [number, number] => {
  if (!data || !data.length) return [0, 0];
  return data;
};

export const useGetRemoveLiquidityAmounts = ({
  lpAmount,
  token0Type,
  token1Type,
  stable,
}: UseGetRemoveLiquidityAmountsArgs) => {
  const sdk = useSDK();

  const { isLoading, data, error } = useSWR(
    makeSWRKey(
      [stable, token1Type, token0Type, lpAmount.toString()],
      sdk.quoteRemoveLiquidity.name
    ),
    async () => {
      if (!+lpAmount) return;

      return sdk.quoteRemoveLiquidity({
        stable,
        coin0Type: token0Type,
        coin1Type: token1Type,
        lpCoinAmount: new BigNumber(lpAmount)
          .decimalPlaces(0, BigNumber.ROUND_DOWN)
          .toString(),
      });
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
      refreshInterval: 3000,
      isPaused: () => !+lpAmount,
    }
  );

  return {
    isLoading: isLoading && !!+lpAmount,
    error,
    data: getSafeAmount(data),
  };
};
