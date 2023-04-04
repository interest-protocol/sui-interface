import {
  bcsForVersion,
  SuiObjectResponse,
  TransactionBlock,
} from '@mysten/sui.js';
import useSWR, { SWRConfiguration } from 'swr';

import { OBJECT_RECORD } from '@/constants';
import {
  parseIPXStorage,
  useGetMultiGetObjects,
  useNetwork,
  useProvider,
} from '@/hooks';
import { Farm, Pool } from '@/interface';
import { AddressZero } from '@/sdk';
import {
  getReturnValuesFromInspectResults,
  makeSWRKey,
  parseSuiObjectDataToPools,
  parseSuiRawDataToFarms,
} from '@/utils';

import {
  FARM_IDS_RECORD_FIRST_CALL,
  FARM_IDS_RECORD_SECOND_CALL,
  POOL_IDS_RECORD,
} from './farms.constants';

export const useGetFarms = (
  account: string | null,
  config: SWRConfiguration = {}
) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = OBJECT_RECORD[network];
  const farmIds1 = FARM_IDS_RECORD_FIRST_CALL[network];
  const farmIds2 = FARM_IDS_RECORD_SECOND_CALL[network];

  const { data, ...otherProps } = useSWR(
    makeSWRKey([account, network], 'useGetFarm'),
    async () => {
      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::interface::get_farms`,
        arguments: [
          txb.object(objects.IPX_STORAGE),
          txb.object(objects.IPX_ACCOUNT_STORAGE),
          txb.pure(account || AddressZero),
          txb.pure(5),
        ],
        typeArguments: farmIds1,
      });

      const txb2 = new TransactionBlock();

      txb2.moveCall({
        target: `${objects.PACKAGE_ID}::interface::get_farms`,
        arguments: [
          txb2.object(objects.IPX_STORAGE),
          txb2.object(objects.IPX_ACCOUNT_STORAGE),
          txb2.pure(account || AddressZero),
          txb2.pure(3),
        ],
        typeArguments: farmIds2,
      });

      const [result1, result2] = await Promise.all([
        provider.devInspectTransactionBlock({
          transactionBlock: txb,
          sender: account || AddressZero,
        }),
        provider.devInspectTransactionBlock({
          transactionBlock: txb2,
          sender: account || AddressZero,
        }),
      ]);

      const returnValues1 = getReturnValuesFromInspectResults(result1);
      const returnValues2 = getReturnValuesFromInspectResults(result2);

      if (!returnValues1 || !returnValues2) return [];

      const bcs = bcsForVersion(await provider.getRpcApiVersion());

      return parseSuiRawDataToFarms(
        bcs
          .de(returnValues1[1], Uint8Array.from(returnValues1[0]))
          .concat(bcs.de(returnValues2[1], Uint8Array.from(returnValues2[0])))
      );
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
  const { data, ...otherProps } = useGetMultiGetObjects(
    poolIds.concat(objects.IPX_STORAGE)
  );

  const poolsRawData = (
    (data as SuiObjectResponse[]) || ([] as SuiObjectResponse[])
  ).slice(0, poolIds.length);

  return {
    ...otherProps,
    pools: poolsRawData.length
      ? parseSuiObjectDataToPools(poolsRawData)
      : ([] as ReadonlyArray<Pool>),
    ipxStorage: parseIPXStorage((data as SuiObjectResponse[])[data.length - 1]),
  };
};
