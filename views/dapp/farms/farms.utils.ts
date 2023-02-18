import { Network } from '@mysten/sui.js';
import { always, cond, equals, ifElse, isEmpty, not, o, prop, T } from 'ramda';

import {
  COIN_TYPE_TO_SYMBOL,
  TOKENS_SVG_MAP,
} from './../../../constants/index';
import { FarmSortByFilter, FarmTypeFilter, SafeFarmData } from './farms.types';

export const getFarmsSVGByToken = (tokenA: string, tokenB: string) => [
  { SVG: TOKENS_SVG_MAP[tokenA] ?? TOKENS_SVG_MAP.default, highZIndex: false },
  { SVG: TOKENS_SVG_MAP[tokenB] ?? TOKENS_SVG_MAP.default, highZIndex: true },
];
export const makeFarmSymbol = (tokenA: string, tokenB: string) =>
  COIN_TYPE_TO_SYMBOL[Network.DEVNET][tokenB]
    ? COIN_TYPE_TO_SYMBOL[Network.DEVNET][tokenA] +
      '-' +
      COIN_TYPE_TO_SYMBOL[Network.DEVNET][tokenB]
    : COIN_TYPE_TO_SYMBOL[Network.DEVNET][tokenB];
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
