import useSWR, { SWRConfiguration } from 'swr';

import { getVolatilePools, makeSWRKey } from '@/utils';

export const useGetVolatilePools = (
  account: string | null,
  typeArgs: ReadonlyArray<string>,
  numOfPools: number,
  config: SWRConfiguration = {}
) =>
  useSWR(
    makeSWRKey([account, typeArgs, numOfPools], 'useGetVolatilePools'),
    async () => getVolatilePools(account, typeArgs, numOfPools),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );
