import useSWR, { SWRConfiguration } from 'swr';

import { getVolatilePools, makeSWRKey } from '@/utils';

import { useNetwork } from '../use-network';
import { useProvider } from '../use-provider';

export const useGetVolatilePools = (
  account: string | null,
  typeArgs: Array<string>,
  numOfPools: number,
  config: SWRConfiguration = {}
) => {
  const { network } = useNetwork();
  const { provider } = useProvider();

  return useSWR(
    makeSWRKey([account, typeArgs, numOfPools], 'useGetVolatilePools'),
    async () =>
      getVolatilePools({ account, numOfPools, network, typeArgs, provider }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );
};
