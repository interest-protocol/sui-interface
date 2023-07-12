import { pathOr } from 'ramda';
import { SWRConfiguration } from 'swr';

import { COIN_POOL } from '@/constants';
import { CoinPriceRecord, useNetwork } from '@/hooks';
import { calculateIPXUSDPrice, parseSuiObjectToPool } from '@/utils';

import { useGetObject } from '../use-get-multi-objects';

export const useGetDexIpxPrice = (
  prices: CoinPriceRecord,
  config: SWRConfiguration = {}
) => {
  const { network } = useNetwork();
  const { data, ...otherProps } = useGetObject(
    pathOr('', [network, 'V_LP_ETH_IPX'], COIN_POOL),
    config
  );

  const ipxPool = parseSuiObjectToPool(data?.data);

  return {
    ...otherProps,
    data: data?.data
      ? calculateIPXUSDPrice({
          pool: ipxPool,
          prices,
          network,
        })
      : 0,
  };
};
