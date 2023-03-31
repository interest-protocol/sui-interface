import useSWR, { SWRConfiguration } from 'swr';

import { makeSWRKey } from '@/utils';

import { useProvider } from '../use-provider';

export const useGetCoinMetadata = (
  type: string,
  config: SWRConfiguration = {}
) => {
  const { provider } = useProvider();
  const { data, isLoading, mutate, error } = useSWR(
    makeSWRKey([type], provider.getCoinMetadata.name),
    () => provider.getCoinMetadata({ coinType: type }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
      ...config,
    }
  );

  return {
    error,
    isLoading,
    data,
    mutate,
  };
};
