import { TransactionBlock } from '@mysten/sui.js';
import { bcsForVersion } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import useSWR, { SWRConfiguration } from 'swr';

import { FarmMetadataType, OBJECT_RECORD } from '@/constants';
import { useNetwork, useProvider } from '@/hooks';
import { getDevInspectData, getDevInspectType, makeSWRKey } from '@/utils';

export const useGetPendingRewards = (
  account: string | null,
  farmMetadata: FarmMetadataType,
  config: SWRConfiguration = {}
) => {
  const { network } = useNetwork();
  const { provider } = useProvider();

  const objects = OBJECT_RECORD[network];

  const { data, ...rest } = useSWR(
    makeSWRKey([account, farmMetadata.lpCoin.type], 'useGetPendingRewards'),
    async () => {
      if (account) {
        const transactionBlock = new TransactionBlock();

        transactionBlock.moveCall({
          target: `${objects.PACKAGE_ID}::ipx::get_pending_rewards`,
          typeArguments: [farmMetadata.lpCoin.type],
          arguments: [
            transactionBlock.object(objects.IPX_STORAGE),
            transactionBlock.object(objects.IPX_ACCOUNT_STORAGE),
            transactionBlock.pure(account),
          ],
        });

        const data = await provider.devInspectTransactionBlock({
          transactionBlock,
          sender: account,
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
