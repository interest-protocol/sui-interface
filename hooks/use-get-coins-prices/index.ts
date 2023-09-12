import { last, map, mergeRight, pathOr, reduce, values } from 'ramda';
import { SWRConfiguration } from 'swr';

import { useGetCoinsUSDInfo } from '../use-get-coins-usd-info';
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
  } = useGetCoinsUSDInfo(coinTypes, config);

  const data = reduce(
    (acc, curr: CoinPricesRecordData) => mergeRight(acc, { [curr.type]: curr }),
    {} as CoinPriceRecord
  )(
    map(({ type, info }) => ({
      type,
      price: pathOr(0, ['price'], last(info)),
    }))(values(rawData)) as ReadonlyArray<CoinPricesRecordData>
  );

  return {
    data,
    error,
    isLoading,
  };
};
