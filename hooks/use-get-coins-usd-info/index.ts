import { COIN_TYPE, ZERO_ADDRESS } from '@interest-protocol/sui-amm-sdk';
import { pathOr } from 'ramda';
import useSWR, { SWRConfiguration } from 'swr';

import { COIN_MARKET_CAP_ID_RECORD } from '@/constants';
import { fetcher } from '@/utils';

import { useNetwork } from '../use-network';

export interface CoinUSDInfo {
  price: number;
  timestamp: string;
  volume_24h: number;
  market_cap: number;
  total_supply: number;
  percent_change_24h: number;
  circulating_supply: number;
}

export interface CoinUSDInfoRecordData {
  type: string;
  info: ReadonlyArray<CoinUSDInfo>;
}

export type CoinInfoRecord = Record<string, CoinUSDInfoRecordData>;

export const useGetCoinsUSDInfo = (
  coinTypes: ReadonlyArray<string>,
  config: SWRConfiguration = {}
) => {
  const { network } = useNetwork();
  const {
    data: rawData,
    error,
    isLoading,
  } = useSWR(
    `/api/v1/quotes?id=${coinTypes
      .map((coinType) => COIN_MARKET_CAP_ID_RECORD[network][coinType])
      .filter((x) => x !== -1 && !!x)}`,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshInterval: 0,
      ...config,
    }
  );

  const suidType = pathOr(ZERO_ADDRESS, [network, 'SUID'], COIN_TYPE) as string;

  const data = coinTypes.reduce(
    (acc, coinType) => ({
      ...acc,
      [coinType]: {
        type: coinType,
        info: pathOr([], ['data', 'quotes'], rawData).map(
          ({ quote: { USD } }: { quote: { USD: CoinUSDInfo } }) => ({
            ...USD,
          })
        ),
      },
    }),
    {
      [suidType]: {
        type: suidType,
        info: [],
      },
    } as CoinInfoRecord
  );

  return {
    data,
    error,
    isLoading,
  };
};
