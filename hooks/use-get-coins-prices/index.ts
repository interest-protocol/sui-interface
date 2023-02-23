import { Network } from '@mysten/sui.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { COIN_MARKET_CAP_ID_RECORD } from '@/constants';
import { fetcher } from '@/utils';

export const useGetCoinsPrices = (coinTypes: ReadonlyArray<string>) => {
  const {
    data: rawData,
    error,
    isLoading,
  } = useSWR(
    `/api/v1/quote?id=${coinTypes.map(
      (coinType) => COIN_MARKET_CAP_ID_RECORD[Network.DEVNET][coinType]
    )}`,
    fetcher
  );

  const data = coinTypes.map((coinType) => ({
    type: coinType,
    price: pathOr(
      0,
      [
        'data',
        COIN_MARKET_CAP_ID_RECORD[Network.DEVNET][coinType],
        'quote',
        'USD',
        'price',
      ],
      rawData
    ),
  }));

  return {
    data,
    error,
    isLoading,
  };
};
