import {
  getReturnValuesFromInspectResults,
  OBJECT_RECORD,
} from '@interest-protocol/sui-amm-sdk';
import { SUI_CLOCK_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { bcs } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { AddressZero } from 'lib';
import useSWR, { SWRConfiguration } from 'swr';

import { FarmMetadataType } from '@/constants';
import { useNetwork, useProvider } from '@/hooks';
import { Farm } from '@/interface';
import { makeSWRKey, parseSuiRawDataToFarms } from '@/utils';

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
          target: `${objects.DEX_PACKAGE_ID}::master_chef::get_pending_rewards`,
          typeArguments: [farmMetadata.lpCoin.type],
          arguments: [
            txb.object(objects.DEX_MASTER_CHEF_STORAGE),
            txb.object(objects.DEX_MASTER_CHEF_ACCOUNT_STORAGE),
            txb.object(SUI_CLOCK_OBJECT_ID),
            txb.pure(account),
          ],
        });

        const data = await provider.devInspectTransactionBlock({
          transactionBlock: txb,
          sender: account,
        });

        const result = getReturnValuesFromInspectResults(data);

        if (!result || !result.length) return 0;

        return bcs.de(result[0][1], Uint8Array.from(result[0][0]));
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
        target: `${objects.DEX_PACKAGE_ID}::interface::get_farms`,
        arguments: [
          txb.object(objects.DEX_MASTER_CHEF_STORAGE),
          txb.object(objects.DEX_MASTER_CHEF_ACCOUNT_STORAGE),
          txb.pure(account || AddressZero),
          txb.pure(1),
        ],
        typeArguments: [id, id, id],
      });

      const result = await provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: account || AddressZero,
      });

      const returnValues = getReturnValuesFromInspectResults(result);

      if (!returnValues || !returnValues.length) return [];

      return parseSuiRawDataToFarms(
        bcs.de(returnValues[0][1], Uint8Array.from(returnValues[0][0]))
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
