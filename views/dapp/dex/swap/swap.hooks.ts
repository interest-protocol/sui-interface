import { useMemo } from 'react';
import useSWR from 'swr';

import { OBJECT_RECORD } from '@/constants';
import { useProvider, useSuiNetwork } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { parsePools } from './swap.utils';

/**
 * @dev The stable pools will be hardcoded as they can only be deployed by the dev team.
 */
export const useGetVolatilePools = () => {
  const { provider } = useProvider();
  const { network } = useSuiNetwork();
  const { data, ...rest } = useSWR(
    makeSWRKey(
      [OBJECT_RECORD[network].VOLATILE_POOLS_OBJECT_ID],
      provider.getObjectsOwnedByAddress.name
    ),
    async () =>
      provider.getDynamicFields(
        OBJECT_RECORD[network].VOLATILE_POOLS_OBJECT_ID
      ),
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
