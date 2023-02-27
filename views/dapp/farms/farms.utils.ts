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
  ParseFarmListDataReturn,
  SafeFarmData,
} from './farms.types';

export const getFarmsSVGByToken = (tokenA: string, tokenB: string) =>
  FARMS_TOKENS_SVG_MAP[tokenA] ??
  FARMS_TOKENS_SVG_MAP[tokenB] ??
  FARMS_TOKENS_SVG_MAP.default;

export const makeFarmSymbol = (token: string) =>
  COIN_TYPE_TO_SYMBOL[Network.DEVNET][token] ?? TOKEN_SYMBOL.IPX;

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

export const parseFarmData =
  (prices: CoinPriceRecord, ipxUSDPrice: number, ipxStorage: IPXStorage) =>
  (data: GetFarmReturn, index: number) => {
    const farmMetadata = FARMS[index];
    const farm = data.farmArray[0];
    const pool = data.farmArray[farmMetadata.isSingleCoin ? 0 : 1];
    const tvl = calculateTVL({
      prices,
      ipxUSDPrice,
      farm,
      pool,
      farmMetadata,
    });

    const allocationPoints = new BigNumber(getAllocationPoints(farm));
    const stakingAmount = BigNumber(0);
    const totalStakedAmount = new BigNumber(getFarmBalance(farm));

    return {
      ...farmMetadata,
      tvl,
      apr: calculateAPR({
        ipxUSDPrice,
        ipxStorage,
        tvl,
        allocationPoints,
      }),
      allocationPoints,
      stakingAmount,
      totalStakedAmount,
    };
  };

export const parseFarmListData = (
  data: Array<GetFarmReturn> | undefined,
  prices: CoinPriceRecord,
  ipxStorage: IPXStorage
): ParseFarmListDataReturn => {
  if (!data || !data[2])
    return {
      farms: [],
      totalAllocationPoints: new BigNumber(0),
    };

  const ipxUSDPrice = calculateIPXUSDPrice({
    pool: data[2].farmArray[1],
    prices,
  });

  return {
    farms: data.map(parseFarmData(prices, ipxUSDPrice, ipxStorage)),
    totalAllocationPoints: new BigNumber(ipxStorage.totalAllocation),
  };
};
