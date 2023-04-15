import BigNumber from 'bignumber.js';
import { TOKEN_SYMBOL } from 'lib';
import { always, cond, equals, ifElse, isEmpty, not, o, prop, T } from 'ramda';

import { COIN_TYPE_TO_SYMBOL, FARMS_RECORD, Network } from '@/constants';
import {
  calculateAPR,
  calculateIPXUSDPrice,
  calculateTVL,
  ZERO_BIG_NUMBER,
} from '@/utils';

import { COIN_TYPE_ARRAY_UI } from './farms.constants';
import { FARMS_TOKENS_SVG_MAP } from './farms.data';
import {
  FarmSortByFilter,
  FarmTypeFilter,
  ParseDataArgs,
  ParseErrorArgs,
  ParseFarmDataArgs,
  SafeFarmData,
} from './farms.types';

export const getFarmsSVGByToken = (lpCoinType: string) =>
  FARMS_TOKENS_SVG_MAP[lpCoinType] ?? FARMS_TOKENS_SVG_MAP.default;

export const makeFarmSymbol = (
  network: Network,
  token0: string,
  token1: string
): string =>
  COIN_TYPE_TO_SYMBOL[network][token1]
    ? `${COIN_TYPE_TO_SYMBOL[network][token0]}-${COIN_TYPE_TO_SYMBOL[network][token1]}`
    : COIN_TYPE_TO_SYMBOL[network][token0] ?? TOKEN_SYMBOL.IPX;

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
        return (
          coin0.type.toLocaleLowerCase().includes(parsedSearch) ||
          coin1.type.toLocaleLowerCase().includes(parsedSearch) ||
          coin0.symbol.toLocaleLowerCase().includes(parsedSearch) ||
          coin1.symbol.toLocaleLowerCase().includes(parsedSearch)
        );
      };
    },
  ],
]);

const typeOperation = cond([
  [equals(FarmTypeFilter.Stable), always(prop<boolean>('stable'))],
  [equals(FarmTypeFilter.Volatile), always(o(not, prop<boolean>('stable')))],
  [T, always(T)],
]) as any;

const onlyStakedOperation = ifElse<
  any[],
  (x: SafeFarmData) => boolean,
  (x: SafeFarmData) => boolean
>(
  equals(true),
  always(({ accountBalance }) => !accountBalance.isZero()),
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

export const parseFarmData = ({
  prices,
  ipxUSDPrice,
  ipxStorage,
  pools,
  farms,
  type,
  index,
  network,
}: ParseFarmDataArgs): SafeFarmData => {
  // First farm IPX has no pool
  const farm = farms[index];
  const pool = index > 0 ? pools[index - 1] : pools[index];
  const farmMetadata = FARMS_RECORD[network][type];
  const tvl = calculateTVL({
    prices,
    ipxUSDPrice,
    farm,
    pool,
    farmMetadata,
  });

  const allocationPoints = farm.allocationPoints;
  const accountBalance = farm.accountBalance;
  const totalStakedAmount = farm.totalStakedAmount;

  const apr = calculateAPR({
    ipxUSDPrice,
    ipxStorage,
    tvl,
    allocationPoints: allocationPoints.div(ipxStorage.totalAllocation),
  });

  return {
    ...farmMetadata,
    tvl,
    apr,
    allocationPoints,
    accountBalance,
    totalStakedAmount,
  };
};

export const parseData = ({
  prices,
  farms,
  ipxStorage,
  pools,
  network,
}: ParseDataArgs) => {
  if (
    !farms ||
    !pools ||
    !ipxStorage ||
    !prices ||
    !farms.length ||
    !pools.length
  )
    return {
      farms: [],
      totalAllocationPoints: ZERO_BIG_NUMBER,
    };

  const ipxUSDPrice = calculateIPXUSDPrice({
    pool: pools[0],
    prices,
    network,
  });

  return {
    farms: COIN_TYPE_ARRAY_UI[network].map((x, index) =>
      parseFarmData({
        ipxStorage,
        farms,
        pools,
        prices,
        ipxUSDPrice,
        type: x,
        index,
        network,
      })
    ),
    totalAllocationPoints: new BigNumber(ipxStorage.totalAllocation),
  };
};

export const parseError = ({
  errorFarms,
  errorPools,
  pricesError,
}: ParseErrorArgs) => {
  if (errorFarms) return 'farms.errors.farms';

  if (errorPools) return 'farms.errors.pools';

  if (pricesError) return 'farms.errors.prices';

  return 'common.error';
};
