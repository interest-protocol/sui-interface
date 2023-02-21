import { Network } from '@mysten/sui.js';
import useSWR from 'swr';

import { COIN_MARKET_CAP_ID_RECORD } from '@/constants';
import { fetcher } from '@/utils';

export const useGetCoinsPrices = (coinTypes: ReadonlyArray<string>) => {
  const { data, error, isLoading } = useSWR(
    `/api/v1/quote?id=${coinTypes.map(
      (x) => COIN_MARKET_CAP_ID_RECORD[Network.DEVNET][x]
    )}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
