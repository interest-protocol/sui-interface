import { MoveCallTransaction } from '@mysten/sui.js';
import { bcsForVersion } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import useSWR, { SWRConfiguration } from 'swr';

import { FarmMetadataType, OBJECT_RECORD } from '@/constants';
import { useProvider, useSuiNetwork } from '@/hooks';
import { getDevInspectData, getDevInspectType, makeSWRKey } from '@/utils';

export const useGetPendingRewards = (
  account: string | null,
  farmMetadata: FarmMetadataType,
  config: SWRConfiguration = {}
) => {
  const { provider } = useProvider();
  const { network } = useSuiNetwork();
  const objects = OBJECT_RECORD[network];

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
            packageObjectId: objects.PACKAGE_ID,
            typeArguments: [farmMetadata.lpCoin.type],
            arguments: [
              objects.IPX_STORAGE,
              objects.IPX_ACCOUNT_STORAGE,
              account,
            ],
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
