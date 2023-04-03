import { SuiObjectResponse } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { OBJECT_RECORD } from '@/constants';
import { makeSWRKey } from '@/utils';

import { useNetwork } from '../use-network';
import { useProvider } from '../use-provider';

const DEFAULT_IPX_STORAGE = {
  ipxPerEpoch: '0',
  startEpoch: '0',
  ipxSupply: '0',
  totalAllocation: '0',
};

export type IPXStorage = typeof DEFAULT_IPX_STORAGE;

export const parseIPXStorage = (data: SuiObjectResponse | undefined) => {
  if (!data) return DEFAULT_IPX_STORAGE;

  return {
    ipxPerEpoch: pathOr(
      '0',
      ['data', 'content', 'fields', 'ipx_per_epoch'],
      data
    ),
    startEpoch: pathOr('0', ['data', 'content', 'fields', 'start_epoch'], data),
    ipxSupply: pathOr(
      '0',
      ['data', 'content', 'fields', 'supply', 'fields', 'value'],
      data
    ),
    totalAllocation: pathOr(
      '0',
      ['data', 'content', 'fields', 'total_allocation_points'],
      data
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
      provider.getObject({
        id: objects.IPX_STORAGE,
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
    data: parseIPXStorage(data),
  };
};
