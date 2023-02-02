import { Network } from '@mysten/sui.js';

import { COINS } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x163e8a2478bba7b8b261fd0d6b00c2ffe7f65584',
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0xf669b40d3c7c24fc2dab0653852dbe38993c670f',
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x9f99d3ff0848d20d53d834ee6494e9042b88e967',
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: '0x2e8ed92906c5478fddadf457f1033954f5261cbd',
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: '0x30a336febad59357572af7ed352f2f3eb2a687c8',
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x6a7905cae5eddc0b5189ad23ddf076c338281a7a',
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    '0x6a7905cae5eddc0b5189ad23ddf076c338281a7a': {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    '0x30a336febad59357572af7ed352f2f3eb2a687c8': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    '0x2e8ed92906c5478fddadf457f1033954f5261cbd': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    '0x9f99d3ff0848d20d53d834ee6494e9042b88e967': {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    '0xf669b40d3c7c24fc2dab0653852dbe38993c670f': {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    '0x163e8a2478bba7b8b261fd0d6b00c2ffe7f65584': {
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
