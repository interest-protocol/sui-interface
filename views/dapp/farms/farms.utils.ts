import { ethers } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import {
  always,
  cond,
  equals,
  ifElse,
  isEmpty,
  not,
  o,
  pathOr,
  prop,
  T,
} from 'ramda';

import {
  CASA_DE_PAPEL_FARM_RESPONSE_MAP,
  ERC_20_DATA,
  TOKEN_FARM_ID_MAP,
  UNKNOWN_ERC_20,
} from '@/constants';
import { Address } from '@/interface';
import { CHAIN_ID, FixedPointMath, ZERO_BIG_NUMBER } from '@/sdk';
import {
  calculateAllocation,
  calculateFarmBaseAPR,
  calculateFarmTokenPrice,
  calculateIntUSDPrice,
  hasKeys,
  isSameAddress,
  replaceWrappedNativeTokenWithNativeTokenSymbol,
} from '@/utils';

import { InterestViewEarn } from '../../../../types/ethers-contracts/InterestViewEarnAbi';
import {
  FarmSortByFilter,
  FarmTypeFilter,
  GetSafeFarmSummaryData,
  SafeFarmData,
  TFarmData,
  TFarmDataKeys,
} from './farms.types';

const FARM_DATA_KEYS: TFarmDataKeys = {
  mintData: ['interestPerBlock', 'totalAllocationPoints'],
  pools: [
    'allocationPoints',
    'reserve0',
    'reserve1',
    'stable',
    'stakingAmount',
    'stakingToken',
    'totalStakingAmount',
    'totalSupply',
  ],
};

const isMissingAttribute = (farmData: TFarmData) =>
  !hasKeys(FARM_DATA_KEYS.mintData, farmData?.mintData) ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (farmData?.pools).some((data: any) => !hasKeys(FARM_DATA_KEYS.pools, data));

export const getSafeFarmSummaryData: GetSafeFarmSummaryData = (
  chainId,
  data
) => {
  if (!data || !chainId)
    return {
      intUSDPrice: ZERO_BIG_NUMBER,
      totalAllocationPoints: ZERO_BIG_NUMBER,
      farms: [
        {
          allocationPoints: ZERO_BIG_NUMBER,
          chainId: CHAIN_ID.UNSUPPORTED,
          reserve0: ZERO_BIG_NUMBER,
          reserve1: ZERO_BIG_NUMBER,
          stakingTokenAddress: ethers.constants.AddressZero as Address,
          id: 1,
          token1: ethers.constants.AddressZero as Address,
          token0: ethers.constants.AddressZero as Address,
          totalStakedAmount: ZERO_BIG_NUMBER,
          allocation: FixedPointMath.from(0),
          tvl: 0,
          apr: FixedPointMath.from(0),
          stakingTokenPrice: ZERO_BIG_NUMBER,
          stable: false,
          stakingAmount: ZERO_BIG_NUMBER,
          isLive: true,
        },
      ],
      loading: true,
    };

  const farmResponseMapData = CASA_DE_PAPEL_FARM_RESPONSE_MAP[chainId];

  if (!farmResponseMapData || isMissingAttribute(data))
    return {
      intUSDPrice: ZERO_BIG_NUMBER,
      totalAllocationPoints: ZERO_BIG_NUMBER,
      farms: [
        {
          totalAllocationPoints: ZERO_BIG_NUMBER,
          allocationPoints: ZERO_BIG_NUMBER,
          chainId: CHAIN_ID.UNSUPPORTED,
          reserve0: ZERO_BIG_NUMBER,
          reserve1: ZERO_BIG_NUMBER,
          stakingTokenAddress: ethers.constants.AddressZero as Address,
          stakingTokenPrice: ZERO_BIG_NUMBER,
          id: 1,
          token1: ethers.constants.AddressZero as Address,
          token0: ethers.constants.AddressZero as Address,
          totalStakedAmount: ZERO_BIG_NUMBER,
          allocation: FixedPointMath.from(0),
          tvl: 0,
          apr: FixedPointMath.from(0),
          stable: false,
          stakingAmount: ZERO_BIG_NUMBER,
          isLive: true,
        },
      ],
      loading: true,
    };

  const tokenPriceMap = farmResponseMapData.makeBaseTokensPriceMap(data.prices);

  const intUSDPrice = calculateIntUSDPrice(
    chainId,
    farmResponseMapData.pools[1].token0,
    farmResponseMapData.pools[1].token1,
    data.pools[1].reserve0,
    data.pools[1].reserve1,
    tokenPriceMap
  );

  return {
    intUSDPrice,
    totalAllocationPoints: data.mintData.totalAllocationPoints,
    farms: CASA_DE_PAPEL_FARM_RESPONSE_MAP[chainId].pools.map(
      ({ token0, token1, stakingTokenAddress, stable }, index) => {
        const {
          reserve0,
          reserve1,
          totalStakingAmount,
          allocationPoints,
          totalSupply,
          stakingAmount,
        }: InterestViewEarn.PoolDataStructOutput = data.pools[index];

        const stakingTokenPrice =
          index === 0
            ? intUSDPrice
            : calculateFarmTokenPrice(
                chainId,
                token0,
                token1,
                reserve0,
                reserve1,
                tokenPriceMap,
                totalSupply
              ).value();

        return {
          stable,
          stakingTokenAddress,
          stakingTokenPrice: stakingTokenPrice,
          allocationPoints,
          chainId,
          reserve0,
          reserve1,
          id: TOKEN_FARM_ID_MAP[chainId][stakingTokenAddress],
          token0,
          token1,
          totalStakedAmount: totalStakingAmount,
          apr: calculateFarmBaseAPR(
            chainId,
            data.mintData.totalAllocationPoints,
            allocationPoints,
            data.mintData.interestPerBlock,
            intUSDPrice,
            totalStakingAmount,
            stakingTokenPrice
          ),
          tvl: FixedPointMath.from(stakingTokenPrice)
            .mul(totalStakingAmount)
            .toNumber(),
          allocation: calculateAllocation(
            allocationPoints,
            data.mintData.totalAllocationPoints
          ),
          isLive: !allocationPoints.isZero(),
          stakingAmount,
        };
      }
    ),
    loading: false,
  };
};

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
      return ({ chainId, token0, token1 }: SafeFarmData) => {
        const erc0 = pathOr(
          UNKNOWN_ERC_20,
          [chainId.toString(), token0],
          ERC_20_DATA
        );
        const erc1 = pathOr(
          UNKNOWN_ERC_20,
          [chainId.toString(), token1],
          ERC_20_DATA
        );

        if (isAddress(search))
          return isSameAddress(search, token0) || isSameAddress(search, token1);

        const farmName = `${replaceWrappedNativeTokenWithNativeTokenSymbol(
          erc0.symbol
        )}-${replaceWrappedNativeTokenWithNativeTokenSymbol(erc1.symbol)}`;

        return (
          token1.toLocaleLowerCase().includes(parsedSearch) ||
          token0.toLocaleLowerCase().includes(parsedSearch) ||
          erc0.name.toLocaleLowerCase().includes(parsedSearch) ||
          erc1.name.toLocaleLowerCase().includes(parsedSearch) ||
          erc0.symbol.toLocaleLowerCase().includes(parsedSearch) ||
          erc1.symbol.toLocaleLowerCase().includes(parsedSearch) ||
          farmName.toLocaleLowerCase().includes(parsedSearch) ||
          farmName
            .toLocaleLowerCase()
            .replace(/[^a-zA-Z]/g, '')
            .includes(parsedSearch.replace(/[^a-zA-Z]/g, ''))
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
