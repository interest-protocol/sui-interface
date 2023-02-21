import { MoveCallTransaction } from '@mysten/sui.js/src/signers/txn-data-serializers/txn-data-serializer';
import useSWR from 'swr';

import {
  COINS_PACKAGE_ID,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { AddressZero } from '@/sdk';
import { makeSWRKey, provider } from '@/utils';

import { UseGetFarmDataArgs } from './farms.types';

export const useFarmData = ({
  objectId,
  poolObjectId,
  isSingleCoin,
  account,
  lpCoin,
}: UseGetFarmDataArgs) => {
  const { data, isLoading, mutate, error } = useSWR(
    makeSWRKey(
      [objectId, poolObjectId, isSingleCoin, account, lpCoin.type],
      'useFarmData'
    ),
    async () => {
      const array = isSingleCoin
        ? [provider.getObject(objectId)]
        : [provider.getObject(objectId), provider.getObject(poolObjectId)];

      const farmArray = await Promise.all(array);

      if (account)
        return (
          provider
            .devInspectTransaction(account, {
              kind: 'moveCall',
              data: {
                function: 'borrow_account',
                gasBudget: 5000,
                module: 'ipx',
                packageObjectId: COINS_PACKAGE_ID,
                typeArguments: [lpCoin.type],
                arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE, account],
              } as MoveCallTransaction,
            })
            .then((x) => ({
              farmArray,
              accountData: x,
            }))
            // User never deposited - so it will throw an error
            .catch(() => ({
              farmArray,
              accountData: null,
            }))
        );

      return {
        farmArray,
        accountData: null,
      };
    },

    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  console.log(data);

  return {
    error,
    isLoading,
    data,
    mutate,
  };
};
