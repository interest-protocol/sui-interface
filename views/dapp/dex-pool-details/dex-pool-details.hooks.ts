import useSWR from 'swr';

import { useAmmSdk, useNetwork, useProvider } from '@/hooks';
import { makeSWRKey } from '@/utils';

import { Pool } from './dex-pool-details.types';

const DEFAULT_POOL: Pool = {
  token0Balance: '0',
  token1Balance: '0',
  lpCoinSupply: '0',
  lpCoin: '',
  poolType: '',
  token0Type: '',
  token1Type: '',
  stable: false,
};

export const useGetPool = (objectId: string) => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const sdk = useAmmSdk();

  const { data, isLoading, mutate, error } = useSWR(
    makeSWRKey([objectId, network], provider.getObject.name),
    () => sdk.getPool(objectId),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return {
    error,
    isLoading,
    data: data ? data : DEFAULT_POOL,
    mutate,
  };
};
