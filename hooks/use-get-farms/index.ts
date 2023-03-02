import useSWR, { SWRConfiguration } from 'swr';

import { getFarms, makeSWRKey } from '@/utils';

export const useGetFarms = (
  account: string | null,
  typeArgs: ReadonlyArray<string>,
  numOfFarms: number,
  config: SWRConfiguration = {}
) =>
  useSWR(
    makeSWRKey([account, typeArgs, numOfFarms], 'useGetFarm'),
    async () => getFarms(account, typeArgs, numOfFarms),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );
