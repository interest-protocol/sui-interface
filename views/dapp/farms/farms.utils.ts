import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { always, cond, equals, ifElse, isEmpty, not, o, prop, T } from 'ramda';

import { COIN_TYPE_TO_SYMBOL, FARMS } from '@/constants';
import { CoinPriceRecord, IPXStorage } from '@/hooks';
import { TOKEN_SYMBOL } from '@/sdk';
import {
  calculateAPR,
  calculateIPXUSDPrice,
  calculateTVL,
  getAllocationPoints,
  getFarmBalance,
} from '@/utils/farms';
import { GetFarmReturn } from '@/utils/farms/farms.types';

import { FARMS_TOKENS_SVG_MAP } from './farms.data';
import {
  FarmSortByFilter,
  FarmTypeFilter,
  ParseErrorArgs,
  ParseFarmListDataReturn,
  SafeFarmData,
} from './farms.types';

export const getFarmsSVGByToken = (lpCoinType: string) =>
  FARMS_TOKENS_SVG_MAP[lpCoinType] ?? FARMS_TOKENS_SVG_MAP.default;

export const makeFarmSymbol = (token0: string, token1: string): string =>
  COIN_TYPE_TO_SYMBOL[Network.DEVNET][token1]
    ? `${COIN_TYPE_TO_SYMBOL[Network.DEVNET][token0]}-${
        COIN_TYPE_TO_SYMBOL[Network.DEVNET][token1]
      }`
    : COIN_TYPE_TO_SYMBOL[Network.DEVNET][token0] ?? TOKEN_SYMBOL.IPX;

const sortByIdFn = (x: SafeFarmData, y: SafeFarmData) => (x.id < y.id ? -1 : 1);

const sortByAPRFn = (x: SafeFarmData, y: SafeFarmData) =>
  x.apr.lt(y.apr) ? 1 : -1;

const sortByAllocationFn = (x: SafeFarmData, y: SafeFarmData) =>
  x.allocationPoints.lt(y.allocationPoints) ? 1 : -1;

const sortByTVLFn = (x: SafeFarmData, y: SafeFarmData) =>
  x.tvl < y.tvl ? 1 : -1;

const sortByOperation = cond([
  [equals(FarmSortByFilter.Default), always(sortByIdFn)],
  [equals(FarmSortByFilter.APR), always(sortByAPRFn)],
  [equals(FarmSortByFilter.Allocation), always(sortByAllocationFn)],
  [equals(FarmSortByFilter.TVL), always(sortByTVLFn)],
  [T, always(sortByIdFn)],
]);

const searchOperation = cond([
  [isEmpty, always(T)],
  [
    T,
    (search: string) => {
      const parsedSearch = search.toLocaleLowerCase();
      return ({ coin0, coin1 }: SafeFarmData) => {
        const erc0 = {
          name: 'SUI',
          symbol: 'SUI',
          type: 'ajdfhasjklf',
        };
        const erc1 = {
          name: 'SUI',
          symbol: 'SUI',
          type: 'ajdfhasjklf',
        };

        return (
          coin0.type.toLocaleLowerCase().includes(parsedSearch) ||
          coin1.type.toLocaleLowerCase().includes(parsedSearch) ||
          erc0.name.toLocaleLowerCase().includes(parsedSearch) ||
          erc1.name.toLocaleLowerCase().includes(parsedSearch) ||
          erc0.symbol.toLocaleLowerCase().includes(parsedSearch) ||
          erc1.symbol.toLocaleLowerCase().includes(parsedSearch)
        );
      };
    },
  ],
]);

const typeOperation = cond([
  [equals(FarmTypeFilter.Stable), always(prop<string, boolean>('stable'))],
  [
    equals(FarmTypeFilter.Volatile),
    always(o(not, prop<'stable', boolean>('stable'))),
  ],
  [T, always(T)],
]) as any;

const onlyStakedOperation = ifElse<
  any[],
  (x: SafeFarmData) => boolean,
  (x: SafeFarmData) => boolean
>(
  equals(true),
  always(({ stakingAmount }) => !stakingAmount.isZero()),
  always(T)
);

const onlyFinishedOperation = ifElse<
  any[],
  (x: SafeFarmData) => boolean,
  (x: SafeFarmData) => boolean
>(
  equals(true),
  always(({ isLive }) => !isLive),
  always(prop('isLive'))
);

export const handleFilterFarms = (
  farms: ReadonlyArray<SafeFarmData>,
  sortBy: FarmSortByFilter,
  search: string,
  farmTypeFilter: FarmTypeFilter,
  onlyStaked: boolean,
  onlyFinished: boolean
) =>
  sortBy === FarmSortByFilter.Default
    ? farms.filter((x) =>
        [
          typeOperation(farmTypeFilter),
          searchOperation(search.trim()),
          onlyStakedOperation(onlyStaked),
          onlyFinishedOperation(onlyFinished),
        ].every((pred) => pred(x))
      )
    : farms
        .slice()
        .sort(sortByOperation(sortBy))
        .filter((x) =>
          [
            typeOperation(farmTypeFilter),
            searchOperation(search.trim()),
            onlyStakedOperation(onlyStaked),
            onlyFinishedOperation(onlyFinished),
          ].every((pred) => pred(x))
        );

const DEFAULT_PARSED_DATA: ReadonlyArray<SafeFarmData> = FARMS.map((farm) => ({
  ...farm,
  tvl: 0,
  apr: BigNumber(0),
  allocationPoints: BigNumber(0),
  stakingAmount: BigNumber(0),
  totalStakedAmount: BigNumber(0),
}));

export const parseFarmData =
  (
    prices: CoinPriceRecord,
    ipxUSDPrice: number,
    ipxStorage: IPXStorage,
    data: Array<GetFarmReturn>
  ) =>
  (farmDefaultData: SafeFarmData, index: number) => {
    if (!data[index] || !ipxUSDPrice)
      return { ...farmDefaultData, loading: true };

    const farm = data[index]?.farmArray[0];
    const pool = data[index].farmArray[farmDefaultData.isSingleCoin ? 0 : 1];

    const tvl = calculateTVL({
      prices,
      ipxUSDPrice,
      farm,
      pool,
      farmMetadata: FARMS[index],
    });

    const allocationPoints = new BigNumber(getAllocationPoints(farm));
    const stakingAmount = BigNumber(0);
    const totalStakedAmount = new BigNumber(getFarmBalance(farm));

    const apr = calculateAPR({
      ipxUSDPrice,
      ipxStorage,
      tvl,
      allocationPoints,
    });

    return {
      ...farmDefaultData,
      tvl,
      apr,
      allocationPoints,
      stakingAmount,
      totalStakedAmount,
    };
  };

export const parseFarmListData = (
  data: Array<GetFarmReturn>,
  prices: CoinPriceRecord,
  ipxStorage: IPXStorage
): ParseFarmListDataReturn => {
  const ipxUSDPrice = data[2]
    ? calculateIPXUSDPrice({
        pool: data[2].farmArray[1],
        prices,
      })
    : 0;

  return {
    farms: DEFAULT_PARSED_DATA.map(
      parseFarmData(prices, ipxUSDPrice, ipxStorage, data)
    ),
    totalAllocationPoints: new BigNumber(ipxStorage.totalAllocation),
  };
};

export const parseError = ({
  error,
  pricesError,
  ipxStorageError,
}: ParseErrorArgs) => {
  if (error) return 'Failed to fetch Farms data';

  if (pricesError) return 'Failed to fetch the coin prices';

  if (!ipxStorageError) return 'Failed to fetch the IPXStorage object';

  return 'error';
};
