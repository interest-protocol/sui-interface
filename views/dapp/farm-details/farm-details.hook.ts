import { MoveCallTransaction } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR, { SWRConfiguration } from 'swr';

import {
  COINS_PACKAGE_ID,
  FarmMetadataType,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { makeSWRKey, provider } from '@/utils';

export const useGetPendingRewards = (
  account: string | null,
  farmMetadata: FarmMetadataType,
  config: SWRConfiguration = {}
) => {
  const { data, ...rest } = useSWR(
    makeSWRKey([account, farmMetadata.lpCoin.type], 'useGetPendingRewards'),
    async () => {
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
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );

  const ok = pathOr([], ['results', 'Ok'], data);
  const result = ok.length ? ok[0] : [];

  return {
    ...rest,
    data: result.length ? result[0] : 0,
  };
};
