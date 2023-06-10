import { OBJECT_RECORD } from '@interest-protocol/sui-sdk';
import { SuiObjectResponse } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { makeSWRKey } from '@/utils';

import { useNetwork } from '../use-network';
import { useProvider } from '../use-provider';

const DEFAULT_IPX_STORAGE = {
  ipxSupply: '0',
  ipxPerMS: '0',
  startTimestamp: '0',
  totalAllocation: '0',
};

export type IPXStorage = typeof DEFAULT_IPX_STORAGE;

export const parseIPXAndMasterChefStorage = (
  data: SuiObjectResponse[] | undefined
) => {
  if (!data || !data.length) return DEFAULT_IPX_STORAGE;
  const [ipxStorage, masterChefStorage] = data;

  return {
    ipxPerMS: pathOr(
      '0',
      ['data', 'content', 'fields', 'ipx_per_ms'],
      masterChefStorage
    ),
    startTimestamp: pathOr(
      '0',
      ['data', 'content', 'fields', 'start_timestamp'],
      masterChefStorage
    ),
    ipxSupply: pathOr(
      '0',
      ['data', 'content', 'fields', 'supply', 'fields', 'value'],
      ipxStorage
    ),
    totalAllocation: pathOr(
      '0',
      ['data', 'content', 'fields', 'total_allocation_points'],
      masterChefStorage
    ),
  };
};

export const useGetIPXStorage = () => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const objects = OBJECT_RECORD[network];

  const { data, ...rest } = useSWR(
    makeSWRKey([objects.IPX_STORAGE], 'useGetIPXStorage'),
    async () =>
      provider.multiGetObjects({
        ids: [objects.IPX_STORAGE, objects.DEX_MASTER_CHEF_STORAGE],
        options: { showContent: true },
      }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return {
    ...rest,
    data: parseIPXAndMasterChefStorage(data),
  };
};
