import { Network } from '@mysten/sui.js';

import { COIN_POOL, COINS } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

const networkDevNetCoinPool = COIN_POOL[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: networkDevNetCoinPool.V_LP_BNB_ETH,
    lpCoinType: networkDevNetCoins.V_LP_BNB_ETH,
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: networkDevNetCoinPool.V_LP_BTC_ETH,
    lpCoinType: networkDevNetCoins.V_LP_BTC_ETH,
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: networkDevNetCoinPool.V_LP_DAI_ETH,
    lpCoinType: networkDevNetCoins.V_LP_DAI_ETH,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: networkDevNetCoinPool.V_LP_ETH_USDT,
    lpCoinType: networkDevNetCoins.V_LP_ETH_USDT,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: networkDevNetCoinPool.V_LP_ETH_USDC,
    lpCoinType: networkDevNetCoins.V_LP_ETH_USDC,
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: networkDevNetCoinPool.V_LP_SUI_ETH,
    lpCoinType: networkDevNetCoins.V_LP_SUI_ETH,
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    [networkDevNetCoinPool.V_LP_SUI_ETH]: {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    [networkDevNetCoinPool.V_LP_ETH_USDC]: {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    [networkDevNetCoinPool.V_LP_ETH_USDT]: {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    [networkDevNetCoinPool.V_LP_DAI_ETH]: {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    [networkDevNetCoinPool.V_LP_BTC_ETH]: {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    [networkDevNetCoinPool.V_LP_BTC_ETH]: {
      token0: networkDevNetCoins.BNB,
      token1: networkDevNetCoins.ETH,
    },
  },
} as Record<string, Record<string, PoolMetadata>>;

interface TokenMetadata {
  decimals: number;
  symbol: string;
  type: string;
}

export interface PoolMetadata {
  token0: TokenMetadata;
  token1: TokenMetadata;
}
