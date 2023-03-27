import useSWR, { SWRConfiguration } from 'swr';

import { getFarms, makeSWRKey } from '@/utils';

import { useProvider } from '../use-provider';
import { useSuiNetwork } from '../use-sui-network';

export const useGetFarms = (
  account: string | null,
  typeArgs: ReadonlyArray<string>,
  numOfFarms: number,
  config: SWRConfiguration = {}
) => {
  const { provider } = useProvider();
  const { network } = useSuiNetwork();
  return useSWR(
    makeSWRKey([network, account, typeArgs, numOfFarms], 'useGetFarm'),
    async () => getFarms(network, provider, account, typeArgs, numOfFarms),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );
};
