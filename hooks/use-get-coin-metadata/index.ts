import useSWR, { SWRConfiguration } from 'swr';

import { makeSWRKey, provider } from '@/utils';

export const useGetCoinMetadata = (
  type: string,
  config: SWRConfiguration = {}
) => {
  const { data, isLoading, mutate, error } = useSWR(
    makeSWRKey([type], provider.getCoinMetadata.name),
    () => provider.getCoinMetadata(type),
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
