import { Network } from '@mysten/sui.js';

import { COINS, COINS_PACKAGE_ID } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x43c8683373ba8ee9dc350a8dc0b75ef0749b8d17',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BNB, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x7a20e4eea4796dd92440770253017ec96068dcfa',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BTC, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x26bebdd1b93e37f3753565f76ebf27e74f694bee',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::DAI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: '0x042524bb6c65de80e7daeb692abb3bb90d993d0e',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDT>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: '0x942f679fdc1fb760a68297122b9fd20743ed428d',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDC>`,
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x46db2ef7d2bb7ce4bf80ecb6ebfd55a341c1a6c8',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<0x2::sui::SUI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    '0x46db2ef7d2bb7ce4bf80ecb6ebfd55a341c1a6c8': {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    '0x942f679fdc1fb760a68297122b9fd20743ed428d': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    '0x042524bb6c65de80e7daeb692abb3bb90d993d0e': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    '0x26bebdd1b93e37f3753565f76ebf27e74f694bee': {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    '0x7a20e4eea4796dd92440770253017ec96068dcfa': {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    '0x43c8683373ba8ee9dc350a8dc0b75ef0749b8d17': {
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
