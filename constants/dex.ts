import { Network } from '@mysten/sui.js';

import { TOKEN_SYMBOL } from '@/sdk';

import { COIN_TYPE } from './coins';

export const DEX_PACKAGE_ID = '0x4abf249feb6d6f7262b0dbbe61ae03e67a63193a';

export const VOLATILE_POOLS_OBJECT_ID =
  '0x8dc36a084b6aa80561b151f641aaadb637bc9c83';

export const DEX_BASE_TOKEN_ARRAY = [COIN_TYPE[Network.DEVNET].ETH];

export const DEX_STORAGE_VOLATILE =
  '0xf950c59befd41bd5d7b455fac242e6aba451b60f';

export const DEX_STORAGE_STABLE = '0x91e2506c05fc0c0294aad40c3b3cf73f008f107e';

export const DEX_TOKENS_DATA = [
  {
    symbol: TOKEN_SYMBOL.SUI,
    decimals: 9,
    type: COIN_TYPE[Network.DEVNET].SUI,
    name: 'Sui',
  },
  {
    symbol: TOKEN_SYMBOL.BTC,
    decimals: 0,
    type: COIN_TYPE[Network.DEVNET].BTC,
    name: 'Bitcoin',
  },
  {
    symbol: TOKEN_SYMBOL.BNB,
    decimals: 0,
    type: COIN_TYPE[Network.DEVNET].BNB,
    name: 'BNB Coin',
  },
  {
    symbol: TOKEN_SYMBOL.DAI,
    decimals: 0,
    type: COIN_TYPE[Network.DEVNET].DAI,
    name: 'DAI',
  },
  {
    symbol: TOKEN_SYMBOL.ETH,
    decimals: 0,
    type: COIN_TYPE[Network.DEVNET].ETH,
    name: 'Ether',
  },
  {
    symbol: TOKEN_SYMBOL.USDT,
    decimals: 0,
    type: COIN_TYPE[Network.DEVNET].USDT,
    name: 'USD Tether',
  },
  {
    symbol: TOKEN_SYMBOL.USDC,
    decimals: 0,
    type: COIN_TYPE[Network.DEVNET].USDC,
    name: 'USD Coin',
  },
  {
    symbol: TOKEN_SYMBOL.IPX,
    decimals: 9,
    type: COIN_TYPE[Network.DEVNET].IPX,
    name: 'Interest Protocol Coin',
  },
];
