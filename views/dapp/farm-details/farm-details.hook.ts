import { MoveCallTransaction } from '@mysten/sui.js';
import { bcsForVersion } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import useSWR, { SWRConfiguration } from 'swr';

import {
  COINS_PACKAGE_ID,
  FarmMetadataType,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import {
  getDevInspectData,
  getDevInspectType,
  makeSWRKey,
  provider,
} from '@/utils';

export const useGetPendingRewards = (
  account: string | null,
  farmMetadata: FarmMetadataType,
  config: SWRConfiguration = {}
) => {
  const { data, ...rest } = useSWR(
    makeSWRKey([account, farmMetadata.lpCoin.type], 'useGetPendingRewards'),
    async () => {
      if (account) {
        const data = await provider.devInspectTransaction(account, {
          kind: 'moveCall',
          data: {
            function: 'get_pending_rewards',
            gasBudget: 9000,
            module: 'ipx',
            packageObjectId: COINS_PACKAGE_ID,
            typeArguments: [farmMetadata.lpCoin.type],
            arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE, account],
          } as MoveCallTransaction,
        });

        return bcsForVersion(await provider.getRpcApiVersion()).de(
          getDevInspectType(data),
          Uint8Array.from(getDevInspectData(data))
        );
      }
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );

  return {
    ...rest,
    data: data
      ? BigNumber(data.toString()).div(BigNumber(10).pow(9))
      : BigNumber(0),
  };
};
