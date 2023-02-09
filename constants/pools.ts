import { Network } from '@mysten/sui.js';

import { COINS, COINS_PACKAGE_ID } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x432501040c8375662db44e5128401bb31063d573',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BNB, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x4a142ec5a435f578a094d4b2619cc3a37b65ad8e',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BTC, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x1996be27d445511227a88742f28a5c04b012312e',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::DAI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: '0x0e7f1521096ea498e21d69fd958aabaa057b01d5',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDT>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: '0xdd16f1f901c8095cd1fca2a5e5c4fad13344fb28',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDC>`,
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0xf3dee451ea961a79736777532d84d31f5871560c',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<0x2::sui::SUI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    '0xf3dee451ea961a79736777532d84d31f5871560c': {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    '0xdd16f1f901c8095cd1fca2a5e5c4fad13344fb28': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    '0x0e7f1521096ea498e21d69fd958aabaa057b01d5': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    '0x1996be27d445511227a88742f28a5c04b012312e': {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    '0x4a142ec5a435f578a094d4b2619cc3a37b65ad8e': {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    '0x432501040c8375662db44e5128401bb31063d573': {
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
