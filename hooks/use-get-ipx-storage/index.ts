import { GetObjectDataResponse } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { IPX_STORAGE } from '@/constants';
import { makeSWRKey, provider } from '@/utils';

const DEFAULT_IPX_STORAGE = {
  ipxPerEpoch: '0',
  startEpoch: '0',
  ipxSupply: '0',
  totalAllocation: '0',
};

export type IPXStorage = typeof DEFAULT_IPX_STORAGE;

const parseIPXStorage = (data: GetObjectDataResponse | undefined) => {
  if (!data) return DEFAULT_IPX_STORAGE;

  return {
    ipxPerEpoch: pathOr(
      '0',
      ['details', 'data', 'fields', 'ipx_per_epoch'],
      data
    ),
    startEpoch: pathOr('0', ['details', 'data', 'fields', 'start_epoch'], data),
    ipxSupply: pathOr(
      '0',
      ['details', 'data', 'fields', 'supply', 'fields', 'value'],
      data
    ),
    totalAllocation: pathOr(
      '0',
      ['details', 'data', 'fields', 'total_allocation_points'],
      data
    ),
  };
};

export const useGetIPXStorage = () => {
  const { data, ...rest } = useSWR(
    makeSWRKey([IPX_STORAGE], 'useGetTotalAllocation'),
    async () => provider.getObject(IPX_STORAGE),
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
