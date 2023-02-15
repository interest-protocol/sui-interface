import { useMemo } from 'react';
import useSWR from 'swr';

import { VOLATILE_POOLS_OBJECT_ID } from '@/constants';
import { makeSWRKey, provider } from '@/utils';

import { parsePools } from './swap.utils';

/**
 * @dev The stable pools will be hardcoded as they can only be deployed by the dev team.
 */
export const useGetVolatilePools = () => {
  const { data, ...rest } = useSWR(
    makeSWRKey(
      [VOLATILE_POOLS_OBJECT_ID],
      provider.getObjectsOwnedByObject.name
    ),
    async () => provider.getDynamicFields(VOLATILE_POOLS_OBJECT_ID),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  const parsedData = useMemo(() => parsePools(data?.data), [data]);

  return {
    ...rest,
    data: parsedData,
  };
};
