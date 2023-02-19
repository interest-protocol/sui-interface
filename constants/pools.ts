import { Network } from '@mysten/sui.js';

import { COINS, COINS_PACKAGE_ID } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x60ed75e41d12de71de0eac5fee3b1a946cb47b02',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BNB, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0xda3d7ab89eb2eebe5fea39f32c3a64a786a5772d',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BTC, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x25b7a2ce3134f6d6f4ce03d3d7845fdb20c3fae4',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::DAI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: '0xe12b8c6d534d596973f6db19fa80f516b3be7c92',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDT>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: '0x248cdd41faa488e1f94bc6e53023fb035ff26189',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDC>`,
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,

    poolObjectId: '0x28a5707bd2a4678ea1265baa02787e776fea4f94',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<0x2::sui::SUI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    '0x28a5707bd2a4678ea1265baa02787e776fea4f94': {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    '0x248cdd41faa488e1f94bc6e53023fb035ff26189': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    '0xe12b8c6d534d596973f6db19fa80f516b3be7c92': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    '0x25b7a2ce3134f6d6f4ce03d3d7845fdb20c3fae4': {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    '0xda3d7ab89eb2eebe5fea39f32c3a64a786a5772d': {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    '0x60ed75e41d12de71de0eac5fee3b1a946cb47b02': {
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
