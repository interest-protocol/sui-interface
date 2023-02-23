import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { always, cond, equals, ifElse, isEmpty, not, o, prop, T } from 'ramda';

import { FixedPointMath, TOKEN_SYMBOL } from '@/sdk';
import {
  getAllocationPoints,
  getBalance,
  getReserve,
  getToken,
} from '@/utils/farms';

import { COIN_TYPE_TO_SYMBOL } from './../../../constants/index';
import { FARMS_TOKENS_SVG_MAP } from './farms.data';
import { FarmSortByFilter, FarmTypeFilter, SafeFarmData } from './farms.types';

export const getFarmsSVGByToken = (tokenA: string, tokenB: string) =>
  FARMS_TOKENS_SVG_MAP[tokenB] ??
  FARMS_TOKENS_SVG_MAP[tokenA] ??
  FARMS_TOKENS_SVG_MAP.default;

export const makeFarmSymbol = (token: string) =>
  COIN_TYPE_TO_SYMBOL[Network.DEVNET][token] ?? TOKEN_SYMBOL.IPX;

const sortByIdFn = (x: SafeFarmData, y: SafeFarmData) => (x.id < y.id ? -1 : 1);

const sortByAPRFn = (x: SafeFarmData, y: SafeFarmData) =>
  x.apr.lt(y.apr) ? 1 : -1;

const sortByAllocationFn = (x: SafeFarmData, y: SafeFarmData) =>
  x.allocation.lt(y.allocation) ? 1 : -1;

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
      return ({ token0, token1 }: SafeFarmData) => {
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
          token1.toLocaleLowerCase().includes(parsedSearch) ||
          token0.toLocaleLowerCase().includes(parsedSearch) ||
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
  (prices: ReadonlyArray<{ type: string; price: number }>) =>
  (data: any): SafeFarmData => {
    // TODO unused price
    console.log(prices);

    const id = ~~(Math.random() * 999999);
    const tvl = ~~(Math.random() * 9999);
    const allocation = FixedPointMath.from(BigNumber(0));
    const allocationPoints = BigNumber(10e9 * +getAllocationPoints(0)(data));
    const reserve0 = BigNumber(10e9 * +getReserve(0)(data));
    const reserve1 = BigNumber(10e9 * +getReserve(1)(data));
    const balanceX = +getBalance(0, 0)(data);
    const balanceY = +getBalance(1, 1)(data);
    const token0 = getToken(0)(data);
    const token1 = getToken(1)(data);
    const stakingAmount = BigNumber(0);
    const totalStakedAmount = BigNumber(10e9 * +data.account ? 0 : 1);
    const stakingTokenPrice = BigNumber(
      (10e9 * (balanceX ?? 0)) / (balanceY || 1)
    );
    const apr = FixedPointMath.from(
      BigNumber(
        (10e9 * +getAllocationPoints(0)(data)) /
          (+getAllocationPoints(1)(data) || 1)
      )
    );

    const stakingTokenObjectId = data.objectId;

    return {
      id,
      tvl,
      apr,
      token0,
      token1,
      reserve0,
      reserve1,
      allocation,
      isLive: true,
      stable: false,
      stakingAmount,
      allocationPoints,
      stakingTokenPrice,
      totalStakedAmount,
      stakingTokenObjectId,
    };
  };

export const parseFarmListData = (
  data: ReadonlyArray<any[]>,
  prices: ReadonlyArray<{ type: string; price: number }>
): ReadonlyArray<SafeFarmData> => data?.map(parseFarmData(prices)) ?? [];
