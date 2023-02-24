import { MoveCallTransaction, Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { always, cond, equals, ifElse, isEmpty, not, o, prop, T } from 'ramda';

import {
  COIN_TYPE_TO_SYMBOL,
  COINS_PACKAGE_ID,
  FARMS,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { CoinPriceRecord } from '@/hooks';
import { FixedPointMath, TOKEN_SYMBOL } from '@/sdk';
import { provider } from '@/utils';
import {
  getAllocationPoints,
  getFarmBalance,
  getPoolCoin0Balance,
  getPoolCoin1Balance,
  getPoolLPCoinSupply,
} from '@/utils/farms';

import { FARMS_TOKENS_SVG_MAP } from './farms.data';
import {
  FarmSortByFilter,
  FarmTypeFilter,
  GetFarmReturn,
  ParsedFarmReturn,
  SafeFarmData,
  UseGetFarmDataArgs,
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

const calculateTVL = (
  prices: CoinPriceRecord,
  farmMetadata: typeof FARMS[number],
  data: GetFarmReturn
) => {
  // IPX only logic
  if (farmMetadata.isSingleCoin) {
    // TODO
    return 0;
  } else {
    // if coin zero has a price
    const coin0Price = prices[farmMetadata.coin0.type];

    const farm = data.farmArray[0];
    const pool = data.farmArray[1];
    const lpCoinSupply = getPoolLPCoinSupply(pool);

    if (!+lpCoinSupply) return 0;

    if (coin0Price) {
      const coin0Reserve = new BigNumber(getPoolCoin0Balance(pool));
      const lpCoinPrice = coin0Reserve
        .multipliedBy(2)
        .multipliedBy(new BigNumber(coin0Price.price))
        .dividedBy(new BigNumber(lpCoinSupply));

      return FixedPointMath.toNumber(
        lpCoinPrice.multipliedBy(getFarmBalance(farm)),
        farmMetadata.coin0.decimals
      );
    }

    // if coin one has a price
    const coin1Price = prices[farmMetadata.coin1.type];

    if (coin1Price) {
      const coin1Reserve = new BigNumber(getPoolCoin1Balance(pool));
      const lpCoinPrice = coin1Reserve
        .multipliedBy(2)
        .multipliedBy(new BigNumber(coin1Price.price))
        .dividedBy(new BigNumber(lpCoinSupply));

      return FixedPointMath.toNumber(
        lpCoinPrice.multipliedBy(getFarmBalance(farm)),
        farmMetadata.coin1.decimals
      );
    }
  }

  return 0;
};

export const parseFarmData =
  (prices: CoinPriceRecord) =>
  (
    acc: ParsedFarmReturn,
    data: GetFarmReturn,
    index: number
  ): ParsedFarmReturn => {
    const currentFarm = FARMS[index];
    const tvl = calculateTVL(prices, currentFarm, data);
    const allocationPoints = new BigNumber(
      getAllocationPoints(data.farmArray[currentFarm.isSingleCoin ? 0 : 1])
    );
    const stakingAmount = BigNumber(0);
    const totalStakedAmount = new BigNumber(
      getFarmBalance(data.farmArray[currentFarm.isSingleCoin ? 0 : 1])
    );

    const apr = new BigNumber(0);

    return {
      farms: [
        ...acc.farms,
        {
          ...currentFarm,
          tvl,
          apr,
          allocationPoints,
          isLive: true,
          stable: false,
          stakingAmount,
          totalStakedAmount,
        },
      ],
      totalAllocationPoints: acc.totalAllocationPoints.plus(allocationPoints),
    };
  };

export const parseFarmListData = (
  data: Array<GetFarmReturn> | undefined,
  prices: CoinPriceRecord
): ParsedFarmReturn =>
  data?.reduce(parseFarmData(prices), {
    farms: [],
    totalAllocationPoints: new BigNumber(0),
  } as ParsedFarmReturn) ??
  ({ farms: [], totalAllocationPoints: new BigNumber(0) } as ParsedFarmReturn);

export const getFarm = async ({
  objectId,
  poolObjectId,
  isSingleCoin,
  account,
  lpCoin,
}: UseGetFarmDataArgs): Promise<GetFarmReturn> => {
  const array = isSingleCoin
    ? [provider.getObject(objectId)]
    : [provider.getObject(objectId), provider.getObject(poolObjectId)];

  const farmArray = await Promise.all(array);

  if (account)
    return (
      provider
        .devInspectTransaction(account, {
          kind: 'moveCall',
          data: {
            function: 'borrow_account',
            gasBudget: 5000,
            module: 'ipx',
            packageObjectId: COINS_PACKAGE_ID,
            typeArguments: [lpCoin.type],
            arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE, account],
          } as MoveCallTransaction,
        })
        .then((x) => ({
          objectId,
          farmArray,
          accountData: x,
        }))
        // User never deposited - so it will throw an error
        .catch(() => ({
          objectId,
          farmArray,
          accountData: null,
        }))
    );

  return {
    objectId,
    farmArray,
    accountData: null,
  };
};
