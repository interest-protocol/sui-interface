import { SUI_CLOCK_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { AddressZero } from 'lib';
import useSWR from 'swr';

import { OBJECT_RECORD, STABLE, VOLATILE } from '@/constants';
import { useNetwork, useProvider } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { UseGetRemoveLiquidityAmountsArgs } from './remove-liquidity-card.types';
import { getAmountsFromDevInspect } from './remove-liquidity-card.utils';

export const useGetRemoveLiquidityAmounts = ({
  lpAmount,
  token0Type,
  token1Type,
  account,
  objectIds,
  stable,
}: UseGetRemoveLiquidityAmountsArgs) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = OBJECT_RECORD[network];

  const { isLoading, data, error } = useSWR(
    makeSWRKey(
      [account, token1Type, token0Type, account],
      provider.devInspectTransactionBlock.name
    ),
    () => {
      if (!account || !objectIds.length || !+lpAmount) return;

      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.DEX_PACKAGE_ID}::interface::remove_liquidity`,
        typeArguments: [
          stable ? STABLE[network] : VOLATILE[network],
          token0Type,
          token1Type,
        ],
        arguments: [
          txb.object(objects.DEX_CORE_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.makeMoveVec({ objects: objectIds.map((x) => txb.object(x)) }),
          txb.pure(
            new BigNumber(lpAmount)
              .decimalPlaces(0, BigNumber.ROUND_DOWN)
              .toString()
          ),
          txb.pure('0'),
          txb.pure('0'),
        ],
      });

      return provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: account ?? AddressZero,
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
    data: getAmountsFromDevInspect(
      objects.DEX_PACKAGE_ID,
      data,
      token0Type,
      token1Type
    ),
  };
};
