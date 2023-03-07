import { pathOr } from 'ramda';
import useSWR, { SWRConfiguration } from 'swr';

import { COIN_MARKET_CAP_ID_RECORD, Network } from '@/constants';
import { fetcher } from '@/utils';

interface CoinPricesRecordData {
  type: string;
  price: number;
}

export type CoinPriceRecord = Record<string, CoinPricesRecordData>;

export const useGetCoinsPrices = (
  coinTypes: ReadonlyArray<string>,
  config: SWRConfiguration = {}
) => {
  const {
    data: rawData,
    error,
    isLoading,
  } = useSWR(
    `/api/v1/quote?id=${coinTypes
      .map((coinType) => COIN_MARKET_CAP_ID_RECORD[Network.DEVNET][coinType])
      .filter((x) => x !== -1)}`,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshInterval: 0,
      ...config,
    }
  );

  const data = coinTypes.reduce(
    (acc, coinType) => ({
      ...acc,
      [coinType]: {
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
      },
    }),
    {} as CoinPriceRecord
  );

  return {
    data,
    error,
    isLoading,
  };
};
