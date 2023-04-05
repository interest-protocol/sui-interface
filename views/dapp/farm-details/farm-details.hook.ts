import { TransactionBlock } from '@mysten/sui.js';
import { bcsForVersion } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import useSWR, { SWRConfiguration } from 'swr';

import { FarmMetadataType, OBJECT_RECORD } from '@/constants';
import { useNetwork, useProvider } from '@/hooks';
import { Farm } from '@/interface';
import { AddressZero } from '@/sdk';
import {
  getReturnValuesFromInspectResults,
  makeSWRKey,
  parseSuiRawDataToFarms,
} from '@/utils';

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
        const txb = new TransactionBlock();

        txb.moveCall({
          target: `${objects.PACKAGE_ID}::ipx::get_pending_rewards`,
          typeArguments: [farmMetadata.lpCoin.type],
          arguments: [
            txb.object(objects.IPX_STORAGE),
            txb.object(objects.IPX_ACCOUNT_STORAGE),
            txb.pure(account),
          ],
        });

        const data = await provider.devInspectTransactionBlock({
          transactionBlock: txb,
          sender: account,
        });

        const result = getReturnValuesFromInspectResults(data);

        if (!result) return 0;

        return bcsForVersion(await provider.getRpcApiVersion()).de(
          result[1],
          Uint8Array.from(result[0])
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

export const useGetFarm = (id: string, account: string) => {
  const { network } = useNetwork();
  const { provider } = useProvider();

  const objects = OBJECT_RECORD[network];
  const { data, ...otherProps } = useSWR(
    makeSWRKey([account, network], 'useGetFarm-details'),
    async () => {
      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::interface::get_farms`,
        arguments: [
          txb.object(objects.IPX_STORAGE),
          txb.object(objects.IPX_ACCOUNT_STORAGE),
          txb.pure(account || AddressZero),
          txb.pure(1),
        ],
        typeArguments: [id, id, id, id, id],
      });

      const result = await provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: account || AddressZero,
      });

      const returnValues = getReturnValuesFromInspectResults(result);

      if (!returnValues) return [];

      const bcs = bcsForVersion(await provider.getRpcApiVersion());

      return parseSuiRawDataToFarms(
        bcs.de(returnValues[1], Uint8Array.from(returnValues[0]))
      );
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return {
    ...otherProps,
    data: data as ReadonlyArray<Farm>,
  };
};
