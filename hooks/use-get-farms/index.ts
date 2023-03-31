import useSWR, { SWRConfiguration } from 'swr';

import { getFarms, makeSWRKey } from '@/utils';

import { useNetwork } from '../use-network';
import { useProvider } from '../use-provider';

export const useGetFarms = (
  account: string | null,
  typeArgs: Array<string>,
  numOfFarms: number,
  config: SWRConfiguration = {}
) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  return useSWR(
    makeSWRKey([account, typeArgs, numOfFarms], 'useGetFarm'),
    async () => getFarms({ provider, numOfFarms, typeArgs, network, account }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );
};
