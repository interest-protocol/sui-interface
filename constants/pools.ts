import { Network } from '@mysten/sui.js';

import { COINS, COINS_PACKAGE_ID } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x315ed3c4766b2f7747e2a42d3f5a52d1e6236721',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BNB, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x0b8d942d9aae953a451fed5b512f5b3f0771d6ab',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::BTC, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x994adc07f8d48aa6aac9be7f25fb0a6cc2ed0beb',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::DAI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: '0x04c63b82257c206750ecd1cdccb2ce37862c5011',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDT>`,
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: '0xd06a7620c5a15d0d72eb847877f34508b719c08d',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${COINS_PACKAGE_ID}::coins::ETH, ${COINS_PACKAGE_ID}::coins::USDC>`,
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x8b62772fe7298a24079a817755cc405cf1989aee',
    lpCoinType: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<0x2::sui::SUI, ${COINS_PACKAGE_ID}::coins::ETH>`,
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    '0x8b62772fe7298a24079a817755cc405cf1989aee': {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    '0xd06a7620c5a15d0d72eb847877f34508b719c08d': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    '0x04c63b82257c206750ecd1cdccb2ce37862c5011': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    '0x994adc07f8d48aa6aac9be7f25fb0a6cc2ed0beb': {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    '0x0b8d942d9aae953a451fed5b512f5b3f0771d6ab': {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    '0x315ed3c4766b2f7747e2a42d3f5a52d1e6236721': {
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
