import { getReturnValuesFromInspectResults } from '@interest-protocol/sui-sdk';
import { SUI_CLOCK_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { bcs } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { AddressZero } from 'lib';
import useSWR, { SWRConfiguration } from 'swr';

import { FarmMetadataType } from '@/constants';
import { OBJECT_RECORD } from '@/constants/liquidity-farms.constants';
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
          target: `${objects.PACKAGE_ID}::amaster_chef::get_pending_rewards`,
          typeArguments: [farmMetadata.lpCoin.type],
          arguments: [
            txb.object(objects.AMASTER_CHEF_STORAGE),
            txb.object(objects.AMASTER_CHEF_ACCOUNT_STORAGE),
            txb.object(SUI_CLOCK_OBJECT_ID),
            txb.pure(account),
          ],
        });

        const data = await provider.devInspectTransactionBlock({
          transactionBlock: txb,
          sender: account,
        });

        const resultArray = getReturnValuesFromInspectResults(data);

        if (!resultArray || !resultArray.length) return 0;

        const result = resultArray[0];

        return bcs.de(result[1], Uint8Array.from(result[0]));
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
          txb.object(objects.AMASTER_CHEF_STORAGE),
          txb.object(objects.AMASTER_CHEF_ACCOUNT_STORAGE),
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

      const firstReturn = returnValues[0];

      return parseSuiRawDataToFarms(
        bcs.de(firstReturn[1], Uint8Array.from(firstReturn[0]))
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
