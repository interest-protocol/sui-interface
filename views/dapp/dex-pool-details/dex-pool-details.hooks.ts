import { GetObjectDataResponse } from '@mysten/sui.js/src/types';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { makeSWRKey, provider } from '@/utils';

import { Pool } from './dex-pool-details.types';

const DEFAULT_POOL: Pool = {
  token0Balance: '0',
  token1Balance: '0',
  lpCoinSupply: '0',
  lpCoin: '',
  poolType: '',
  token0Type: '',
  token1Type: '',
};

const processVolatilePool = (data: undefined | GetObjectDataResponse): Pool => {
  if (!data) return DEFAULT_POOL;

  const poolType: string = pathOr('', ['details', 'data', 'type'], data);

  if (!poolType) return DEFAULT_POOL;

  const x = poolType.split('<')[1];
  const tokens = x.split(',');
  const token0Type = tokens[0];
  const y = tokens[1];
  const token1Type = y.substring(1, y.length - 1);
  return {
    token0Balance: pathOr('', ['details', 'data', 'fields', 'balance_x'], data),
    token1Balance: pathOr('', ['details', 'data', 'fields', 'balance_y'], data),
    lpCoinSupply: pathOr(
      '',
      ['details', 'data', 'fields', 'lp_coin_supply', 'fields', 'value'],
      data
    ),
    lpCoin: pathOr(
      '',
      ['details', 'data', 'fields', 'lp_coin_supply', 'type'],
      data
    ),
    poolType,
    token0Type,
    token1Type,
  };
};

export const useGetVolatilePool = (objectId: string) => {
  const { data, isLoading, mutate, error } = useSWR(
    makeSWRKey([objectId], provider.getObject.name),
    () => provider.getObject(objectId),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  const processedData = processVolatilePool(data);

  return {
    error,
    isLoading,
    data: processedData,
    mutate,
  };
};
