import { Network, STABLE } from '@interest-protocol/sui-amm-sdk';
import BigNumber from 'bignumber.js';
import { propOr } from 'ramda';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  COIN_TYPE_ARRAY_UI,
  COIN_TYPE_TO_COIN,
  DEX_LP_COIN_TYPE,
  FARMS_RECORD,
  RECOMMENDED_POOLS,
} from '@/constants';
import { CoinData } from '@/interface';
import {
  calculateAPR,
  calculateIPXUSDPrice,
  calculateTVL,
  getCoinsFromLpCoinType,
  getSymbolByType,
  ZERO_BIG_NUMBER,
} from '@/utils';

import { FormatLpCoinToPoolArgs } from '../../dex-pool/pool.types';
import { TopPoolsTableItem } from '../metrics/top-tables/table.types';
import {
  IPools,
  ParseDataArgs,
  ParseFarmDataArgs,
  SafeFarmData,
} from './earn.types';

export const filterPools = (
  network: Network,
  coinsMap: Record<string, Web3ManagerSuiObject>
): IPools =>
  RECOMMENDED_POOLS[network].map((pool) => ({
    ...pool,
    decimals: coinsMap[pool.lpCoin.type]?.decimals ?? 0,
    balance: coinsMap[pool.lpCoin.type]?.totalBalance ?? ZERO_BIG_NUMBER,
  }));

export const isIPXLPCoin = (x: string, network: Network) =>
  x.startsWith(DEX_LP_COIN_TYPE[network]);

export const formatLpCoinToPool = ({
  tokensMetadataRecord,
  network,
  object,
}: FormatLpCoinToPoolArgs) => {
  const { coinXType, coinYType } = getCoinsFromLpCoinType(object.type);

  const coins = COIN_TYPE_TO_COIN[network];

  const coinXMetadata =
    coins[coinXType] ||
    (propOr(null, coinXType, tokensMetadataRecord) as null | CoinData);

  const coinYMetadata =
    coins[coinYType] ||
    (propOr(null, coinYType, tokensMetadataRecord) as null | CoinData);

  const stable = object.type.includes(STABLE[network]);

  return {
    stable,
    token0: coinXMetadata
      ? coinXMetadata
      : {
          type: coinXType,
          decimals: 0,
          symbol: getSymbolByType(coinXType),
        },
    token1: coinYMetadata
      ? coinYMetadata
      : {
          type: coinYType,
          decimals: 0,
          symbol: getSymbolByType(coinYType),
        },
    decimals: 0,
    balance: object.totalBalance,
    poolObjectId: null,
  };
};

export const parseFarmData = ({
  type,
  index,
  pools,
  farms,
  prices,
  network,
  ipxStorage,
  ipxUSDPrice,
}: ParseFarmDataArgs): SafeFarmData => {
  // First farm IPX has no pool
  const farm = farms[index];
  const pool = index > 0 ? pools[index - 1] : pools[index];
  const farmMetadata = FARMS_RECORD[network][type];

  const tvl = calculateTVL({
    farm,
    pool,
    prices,
    ipxUSDPrice,
    farmMetadata,
  });

  const accountBalance = farm.accountBalance;
  const allocationPoints = farm.allocationPoints;
  const totalStakedAmount = farm.totalStakedAmount;

  const apr = calculateAPR({
    tvl,
    ipxStorage,
    ipxUSDPrice,
    allocationPoints: allocationPoints.div(ipxStorage.totalAllocation),
  });

  return {
    ...farmMetadata,
    tvl,
    apr,
    accountBalance,
    allocationPoints,
    totalStakedAmount,
    totalAllocationPoints: new BigNumber(ipxStorage.totalAllocation),
  };
};

export const parseMainnetData = (
  data: ReadonlyArray<TopPoolsTableItem>
): ReadonlyArray<SafeFarmData> =>
  data.map(
    (
      { a, b, c, pool: { poolObjectId, stable, token0, token1, lpCoin } },
      id
    ) => {
      const apr = BigNumber(
        Number(
          (a && b ? (365 * (b * (stable ? 0.05 : 0.3))) / a : 0).toFixed(4)
        ).toPrecision()
      );

      return {
        id,
        apr,
        tvl: a,
        lpCoin,
        stable,
        volume: c,
        farmType: '',
        poolObjectId,
        isLive: false,
        coin0: token0,
        coin1: token1,
        loading: false,
        farmObjectId: '',
        isSingleCoin: false,
        accountBalance: ZERO_BIG_NUMBER,
        allocationPoints: ZERO_BIG_NUMBER,
        totalStakedAmount: ZERO_BIG_NUMBER,
        totalAllocationPoints: ZERO_BIG_NUMBER,
      } as SafeFarmData;
    }
  );

export const parseTestnetData = ({
  farms,
  pools,
  prices,
  network,
  ipxStorage,
}: ParseDataArgs) => {
  if (
    !farms ||
    !pools ||
    !ipxStorage ||
    !prices ||
    !farms.length ||
    !pools.length
  )
    return [];

  const ipxUSDPrice = calculateIPXUSDPrice({
    pool: pools[0],
    prices,
    network,
  });

  return COIN_TYPE_ARRAY_UI[network].map((type, index) =>
    parseFarmData({
      ipxStorage,
      farms,
      pools,
      prices,
      ipxUSDPrice,
      type,
      index,
      network,
    })
  );
};
