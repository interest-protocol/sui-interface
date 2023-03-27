import { GetObjectDataResponse } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { OBJECT_RECORD } from '@/constants';
import { makeSWRKey } from '@/utils';

import { useProvider } from '../use-provider';
import { useSuiNetwork } from '../use-sui-network';

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
  const { provider } = useProvider();
  const { network } = useSuiNetwork();
  const objects = OBJECT_RECORD[network];

  const { data, ...rest } = useSWR(
    makeSWRKey([objects.IPX_STORAGE], 'useGetTotalAllocation'),
    async () => provider.getObject(objects.IPX_STORAGE),
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
