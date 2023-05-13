import { TransactionBlock } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import useSWR from 'swr';

import { useProvider, useSDK } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { UseGetRemoveLiquidityAmountsArgs } from './remove-liquidity-card.types';

export const useGetRemoveLiquidityAmounts = ({
  lpAmount,
  token0Type,
  token1Type,
  account,
  objectIds,
  stable,
}: UseGetRemoveLiquidityAmountsArgs) => {
  const { provider } = useProvider();

  const sdk = useSDK();

  const { isLoading, data, error } = useSWR(
    makeSWRKey(
      [account, token1Type, token0Type, account],
      provider.devInspectTransactionBlock.name
    ),
    () => {
      if (!account || !objectIds.length || !+lpAmount) return;

      const txb = new TransactionBlock();

      return sdk.getRemoveLiquidityCoinsAmountsOut({
        txb,
        stable,
        coinAType: token0Type,
        coinBType: token1Type,
        lpCoinList: objectIds.map((x) => txb.object(x)),
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
    }
  );

  return {
    isLoading:
      !!account &&
      !!objectIds &&
      objectIds.length > 0 &&
      isLoading &&
      !!+lpAmount,
    error,
    data: data?.parsedData,
  };
};
