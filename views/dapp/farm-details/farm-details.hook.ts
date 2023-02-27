import { MoveCallTransaction } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import {
  COINS_PACKAGE_ID,
  FarmMetadataType,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { makeSWRKey, provider } from '@/utils';
import { getFarm } from '@/utils/farms';

import { UseGetFarmArgs } from './farm-details.types';

export const useGetPendingRewards = (
  account: string | null,
  farmMetadata: FarmMetadataType
) => {
  const { data, ...rest } = useSWR(
    makeSWRKey([account], 'useGetPendingRewards'),
    async () => {
      console.log(farmMetadata.lpCoin.type, 'WTF');
      if (account)
        return provider
          .devInspectTransaction(account, {
            kind: 'moveCall',
            data: {
              function: 'get_pending_rewards',
              gasBudget: 9000,
              module: 'ipx',
              packageObjectId: COINS_PACKAGE_ID,
              typeArguments: [farmMetadata.lpCoin.type],
              arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE, account],
            } as MoveCallTransaction,
          })
          .then((x) => x);
      // User never deposited - so it will throw an error
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  const ok = pathOr([], ['results', 'Ok'], data);
  const result = ok.length ? ok[0] : [];

  return {
    ...rest,
    data: result.length ? result[0] : 0,
  };
};

export const useGetFarm = ({
  poolObjectId,
  isSingleCoin,
  account,
  lpCoin,
  objectId,
}: UseGetFarmArgs) =>
  useSWR(
    makeSWRKey(
      [objectId, poolObjectId, isSingleCoin, account, lpCoin?.type],
      'useGetFarm'
    ),
    async () =>
      await getFarm({
        objectId,
        poolObjectId,
        isSingleCoin,
        account,
        lpCoin,
      }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );
