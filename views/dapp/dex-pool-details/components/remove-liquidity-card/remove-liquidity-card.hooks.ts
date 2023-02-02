import { MoveCallTransaction } from '@mysten/sui.js/src/signers/txn-data-serializers/txn-data-serializer';
import BigNumber from 'bignumber.js';
import useSWR from 'swr';

import { DEX_PACKAGE_ID, DEX_STORAGE_VOLATILE } from '@/constants';
import { AddressZero } from '@/sdk';
import { makeSWRKey } from '@/utils';
import { provider } from '@/utils';

import { UseGetRemoveLiquidityAmountsArgs } from './remove-liquidity-card.types';
import { getAmountsFromDevInspect } from './remove-liquidity-card.utils';

export const useGetRemoveLiquidityAmounts = ({
  lpAmount,
  token0Type,
  token1Type,
  account,
  objectIds,
}: UseGetRemoveLiquidityAmountsArgs) => {
  const { isLoading, data, error } = useSWR(
    makeSWRKey(
      [account, token1Type, token0Type, account],
      provider.devInspectTransaction.name
    ),
    () => {
      if (!account || !objectIds || !+lpAmount) return;
      return provider.devInspectTransaction(account || AddressZero, {
        kind: 'moveCall',
        data: {
          function: 'remove_v_liquidity',
          gasBudget: 9000,
          module: 'interface',
          packageObjectId: DEX_PACKAGE_ID,
          typeArguments: [token0Type, token1Type],
          arguments: [
            DEX_STORAGE_VOLATILE,
            objectIds || [],
            new BigNumber(lpAmount)
              .decimalPlaces(0, BigNumber.ROUND_DOWN)
              .toString(),
            '0',
            '0',
          ],
        } as MoveCallTransaction,
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
    data: getAmountsFromDevInspect(data, token0Type, token1Type),
  };
};
