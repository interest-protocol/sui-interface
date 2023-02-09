import { Network } from '@mysten/sui.js';

import { COINS } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];

export const RECOMMENDED_POOLS = [
  {
    token0: networkDevNetCoins.BNB,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0xaaba392e20f92c72a318ea15f7e49c2910d85b1f',
    lpCoinType:
      '0xb62ae677aea4435cb046bbce97b93416384fdf3e::dex_volatile::VLPCoin<0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::BNB, 0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::ETH>',
  },
  {
    token0: networkDevNetCoins.BTC,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0xff21ecf64ed5a5054b6b414dd402f1da6f5439a4',
    lpCoinType:
      '0xb62ae677aea4435cb046bbce97b93416384fdf3e::dex_volatile::VLPCoin<0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::BTC, 0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::ETH>',
  },
  {
    token0: networkDevNetCoins.DAI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0xaf450dcfb71a472b8fd0103dd92e1a2236faddfb',
    lpCoinType:
      '0xb62ae677aea4435cb046bbce97b93416384fdf3e::dex_volatile::VLPCoin<0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::DAI, 0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::ETH>',
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDT,
    poolObjectId: '0xe5522f2b207ed823dd945615e6e02b4a86627b92',
    lpCoinType:
      '0xb62ae677aea4435cb046bbce97b93416384fdf3e::dex_volatile::VLPCoin<0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::ETH, 0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::USDT>',
  },
  {
    token0: networkDevNetCoins.ETH,
    token1: networkDevNetCoins.USDC,
    poolObjectId: '0x986bbb3c29f902e5cadf12a2e422a5a58e5990f9',
    lpCoinType:
      '0xb62ae677aea4435cb046bbce97b93416384fdf3e::dex_volatile::VLPCoin<0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::ETH, 0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::USDC>',
  },
  {
    token0: networkDevNetCoins.SUI,
    token1: networkDevNetCoins.ETH,
    poolObjectId: '0x8d05edfe25f3c67376faa1ffddd96aa8ced7f731',
    lpCoinType:
      '0xb62ae677aea4435cb046bbce97b93416384fdf3e::dex_volatile::VLPCoin<0x2::sui::SUI, 0xb62ae677aea4435cb046bbce97b93416384fdf3e::coins::ETH>',
  },
];

export const POOL_METADATA_MAP = {
  [Network.DEVNET]: {
    '0x8d05edfe25f3c67376faa1ffddd96aa8ced7f731': {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
    },
    '0x986bbb3c29f902e5cadf12a2e422a5a58e5990f9': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
    },
    '0xe5522f2b207ed823dd945615e6e02b4a86627b92': {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
    },
    '0xaf450dcfb71a472b8fd0103dd92e1a2236faddfb': {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
    },
    '0xff21ecf64ed5a5054b6b414dd402f1da6f5439a4': {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
    },
    '0xaaba392e20f92c72a318ea15f7e49c2910d85b1f': {
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
