import {
  getReturnValuesFromInspectResults,
  OBJECT_RECORD,
} from '@interest-protocol/sui-amm-sdk';
import { bcs, SuiObjectResponse, TransactionBlock } from '@mysten/sui.js';
import { AddressZero } from 'lib';
import useSWR, { SWRConfiguration } from 'swr';

import {
  parseIPXAndMasterChefStorage,
  useGetMultiGetObjects,
  useNetwork,
  useProvider,
} from '@/hooks';
import { Farm, Pool } from '@/interface';
import {
  makeSWRKey,
  parseSuiObjectDataToPools,
  parseSuiRawDataToFarms,
} from '@/utils';

import { FARM_IDS_RECORD_FIRST_CALL, POOL_IDS_RECORD } from './farms.constants';

export const useGetFarms = (
  account: string | null,
  config: SWRConfiguration = {}
) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = OBJECT_RECORD[network];
  const farmIds = FARM_IDS_RECORD_FIRST_CALL[network];

  const { data, ...otherProps } = useSWR(
    makeSWRKey([account, network], 'useGetFarm'),
    async () => {
      const txbArray = farmIds.map(({ number, data }) => {
        const txb = new TransactionBlock();
        txb.moveCall({
          target: `${objects.DEX_PACKAGE_ID}::interface::get_farms`,
          arguments: [
            txb.object(objects.DEX_MASTER_CHEF_STORAGE),
            txb.object(objects.DEX_MASTER_CHEF_ACCOUNT_STORAGE),
            txb.pure(account || AddressZero),
            txb.pure(number.toString()),
          ],
          typeArguments: data,
        });

        return txb;
      });

      const promiseArray = txbArray.map((block) =>
        provider.devInspectTransactionBlock({
          transactionBlock: block,
          sender: account || AddressZero,
        })
      );

      const results = await Promise.all(promiseArray);

      const returnValueArray = results.map((x) =>
        getReturnValuesFromInspectResults(x)
      );

      if (!returnValueArray.length) return [];

      const deArray = returnValueArray
        .filter((x) => !!x && !!x.length)
        .map((x) => bcs.de(x![0][1], Uint8Array.from(x![0][0])));

      return parseSuiRawDataToFarms(deArray.flat());
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
    ...otherProps,
    data: data ? (data as ReadonlyArray<Farm>) : ([] as ReadonlyArray<Farm>),
  };
};

export const useGetIPXStorageAndPools = () => {
  const { network } = useNetwork();
  const objects = OBJECT_RECORD[network];
  const poolIds = POOL_IDS_RECORD[network];
  const { data, ...otherProps } = useGetMultiGetObjects([
    ...poolIds,
    objects.IPX_STORAGE,
    objects.DEX_MASTER_CHEF_STORAGE,
  ]);

  const poolsRawData = (
    (data as SuiObjectResponse[]) || ([] as SuiObjectResponse[])
  ).slice(0, data.length - 2);

  return {
    ...otherProps,
    pools: poolsRawData.length
      ? parseSuiObjectDataToPools(poolsRawData)
      : ([] as ReadonlyArray<Pool>),
    ipxStorage: parseIPXAndMasterChefStorage(data.slice(poolIds.length)),
  };
};
