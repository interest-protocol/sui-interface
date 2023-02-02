import { GetObjectDataResponse } from '@mysten/sui.js/src/types';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { makeSWRKey, provider } from '@/utils';

const DEFAULT_POOL = {
  token0Balance: '0',
  token1Balance: '0',
  lpCoinSupply: '0',
  lpCoinType: '',
  poolType: '',
};

const processVolatilePool = (data: undefined | GetObjectDataResponse) => {
  if (!data) return DEFAULT_POOL;

  return {
    token0Balance: pathOr(
      '',
      ['details', 'data', 'fields', 'value', 'fields', 'balance_x'],
      data
    ),
    token1Balance: pathOr(
      '',
      ['details', 'data', 'fields', 'value', 'fields', 'balance_y'],
      data
    ),
    lpCoinSupply: pathOr(
      '',
      [
        'details',
        'data',
        'fields',
        'value',
        'fields',
        'lp_coin_supply',
        'fields',
        'value',
      ],
      data
    ),
    lpCoinType: pathOr(
      '',
      [
        'details',
        'data',
        'fields',
        'value',
        'fields',
        'lp_coin_supply',
        'type',
      ],
      data
    ),
    poolType: pathOr(
      '',
      ['details', 'data', 'fields', 'value', 'fields', 'type'],
      data
    ),
  };
};

export const useGetVolatilePool = (objectId: string) => {
  const { data, isLoading, error } = useSWR(
    makeSWRKey([objectId], provider.getObject.name),
    () => provider.getObject(objectId)
  );

  const processedDta = processVolatilePool(data);

  return {
    error,
    isLoading,
    data: processedDta,
  };
};
