import { SuiObjectResponse } from '@mysten/sui.js';
import useSWR, { SWRConfiguration } from 'swr';

import { makeSWRKey } from '@/utils';

import { useNetwork } from '../use-network';
import { useProvider } from '../use-provider';

export const useGetMultiGetObjects = (
  ids: Array<string>,
  config: SWRConfiguration = {}
) => {
  const { network } = useNetwork();
  const { provider } = useProvider();

  const { data, ...otherProps } = useSWR(
    makeSWRKey([ids, network], 'useGetMultiGetObjects'),
    async () =>
      provider.multiGetObjects({ ids, options: { showContent: true } }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );

  return {
    ...otherProps,
    data: data ? data : ([] as SuiObjectResponse[]),
  };
};
