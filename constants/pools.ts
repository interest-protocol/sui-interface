import { Network } from '@mysten/sui.js';

import { COINS, COINS_PACKAGE_ID } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x70563ebb45ce7e8732410e6d97fc56b22d0bc4a5',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BNB, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0xbaa8296b0c36047556a032011c89a6df9dd8cc03',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BTC, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x15e99b59d105faab120f30af5b55c59452b8050e',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::DAI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: '0x6895f8e3f0a52e2b2a1b0afcbd97901cad01fb55',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDT>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: '0x022340ffd50ba6fd3f17ae2226cbdd50914d1cff',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDC>`,
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,

    poolObjectId: '0x3c9eb95a5b26d1ac488465da8d700ca8e865b9fa',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<0x2::sui::SUI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    '0x3c9eb95a5b26d1ac488465da8d700ca8e865b9fa': {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    '0x022340ffd50ba6fd3f17ae2226cbdd50914d1cff': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    '0x6895f8e3f0a52e2b2a1b0afcbd97901cad01fb55': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    '0x15e99b59d105faab120f30af5b55c59452b8050e': {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    '0xbaa8296b0c36047556a032011c89a6df9dd8cc03': {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    '0x70563ebb45ce7e8732410e6d97fc56b22d0bc4a5': {
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
