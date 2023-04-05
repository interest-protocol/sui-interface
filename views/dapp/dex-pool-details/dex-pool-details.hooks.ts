import { SuiObjectResponse } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { COIN_POOL_ID_TO_STABLE } from '@/constants';
import { useNetwork, useProvider } from '@/hooks';
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

const processPool = (
  data: undefined | SuiObjectResponse,
  stable: boolean
): Pool => {
  if (!data) return DEFAULT_POOL;

  const poolType: string = pathOr('', ['data', 'type'], data);

  if (!poolType) return DEFAULT_POOL;

  const x = poolType.split('<')[1];
  const tokens = x.split(',');
  const token0Type = tokens[0];
  const y = tokens[1];
  const token1Type = y.substring(1, y.length - 1);
  return {
    token0Balance: pathOr('', ['data', 'content', 'fields', 'balance_x'], data),
    token1Balance: pathOr('', ['data', 'content', 'fields', 'balance_y'], data),
    lpCoinSupply: pathOr(
      '',
      ['data', 'content', 'fields', 'lp_coin_supply', 'fields', 'value'],
      data
    ),
    lpCoin: pathOr(
      '',
      ['data', 'content', 'fields', 'lp_coin_supply', 'type'],
      data
    ),
    poolType,
    token0Type,
    token1Type,
    stable,
  };
};

export const useGetPool = (objectId: string) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const { data, isLoading, mutate, error } = useSWR(
    makeSWRKey([objectId, network], provider.getObject.name),
    () =>
      provider.getObject({
        id: objectId,
        options: { showContent: true, showType: true },
      }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  const processedData = processPool(
    data,
    pathOr(false, [network, objectId], COIN_POOL_ID_TO_STABLE)
  );

  return {
    error,
    isLoading,
    data: processedData,
    mutate,
  };
};
