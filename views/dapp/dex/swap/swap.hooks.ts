import { useMemo } from 'react';
import useSWR from 'swr';

import { OBJECT_RECORD } from '@/constants';
import { useNetwork, useProvider } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { parsePools } from './swap.utils';

/**
 * @dev The stable pools will be hardcoded as they can only be deployed by the dev team.
 */
export const useGetVolatilePools = () => {
  const { network } = useNetwork();
  const { provider } = useProvider();

  const objects = OBJECT_RECORD[network];

  const { data, ...rest } = useSWR(
    makeSWRKey(
      [objects.VOLATILE_POOLS_OBJECT_ID, network],
      provider.getDynamicFields.name
    ),
    async () =>
      provider.getDynamicFields({ parentId: objects.VOLATILE_POOLS_OBJECT_ID }),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  const parsedData = useMemo(() => parsePools(data?.data, false), [data]);

  return {
    ...rest,
    data: parsedData,
  };
};

// TODO WILL be removed in the next version and the storage will be combined
export const useGetStablePools = () => {
  const { network } = useNetwork();
  const { provider } = useProvider();

  const objects = OBJECT_RECORD[network];

  const { data, ...rest } = useSWR(
    makeSWRKey(
      [objects.STABLE_POOLS_OBJECT_ID, network],
      provider.getDynamicFields.name
    ),
    async () =>
      provider.getDynamicFields({ parentId: objects.STABLE_POOLS_OBJECT_ID }),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  const parsedData = useMemo(() => parsePools(data?.data, true), [data]);

  return {
    ...rest,
    data: parsedData,
  };
};
