import useSWR, { SWRConfiguration } from 'swr';

import { getVolatilePools, makeSWRKey } from '@/utils';

import { useProvider } from '../use-provider';
import { useSuiNetwork } from '../use-sui-network';

export const useGetVolatilePools = (
  account: string | null,
  typeArgs: ReadonlyArray<string>,
  numOfPools: number,
  config: SWRConfiguration = {}
) => {
  const { network } = useSuiNetwork();
  const { provider } = useProvider();
  return useSWR(
    makeSWRKey([account, typeArgs, numOfPools], 'useGetVolatilePools'),
    async () =>
      getVolatilePools(network, provider, account, typeArgs, numOfPools),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );
};
