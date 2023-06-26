import { Network, STABLE } from '@interest-protocol/sui-amm-sdk';
import { propOr } from 'ramda';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  COIN_TYPE_TO_COIN,
  DEX_LP_COIN_TYPE,
  RECOMMENDED_POOLS,
} from '@/constants';
import { CoinData } from '@/interface';
import {
  getCoinsFromLpCoinType,
  getSymbolByType,
  ZERO_BIG_NUMBER,
} from '@/utils';

import { FormatLpCoinToPoolArgs, IPools } from './pool.types';

export const filterPools = (
  network: Network,
  coinsMap: Record<string, Web3ManagerSuiObject>,
  stable: boolean
): IPools =>
  RECOMMENDED_POOLS[network].reduce(
    ({ active, inactive }, pool) => {
      const activePool = coinsMap[pool.lpCoin.type];

      if (pool.stable !== stable) return { active, inactive };

      return activePool
        ? {
            active: [
              ...active,
              {
                ...pool,
                decimals: activePool.decimals,
                balance: activePool.totalBalance,
              },
            ],
            inactive,
          }
        : {
            active,
            inactive: [
              ...inactive,
              { ...pool, decimals: 0, balance: ZERO_BIG_NUMBER },
            ],
          };
    },
    { active: [], inactive: [] } as IPools
  );

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
