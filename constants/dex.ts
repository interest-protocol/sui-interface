import { Network } from '@mysten/sui.js';

import { TOKEN_SYMBOL } from '@/sdk';

import { COIN_TYPE } from './coins';

export const DEX_PACKAGE_ID = '0x95c1a2d3308de0332603f211eae2a994d653bcb3';

export const VOLATILE_POOLS_OBJECT_ID =
  '0xa54ed88b85f835cd366e456221676906563500d4';

export const DEX_BASE_TOKEN_ARRAY = [COIN_TYPE[Network.DEVNET].ETH];

export const DEX_STORAGE_VOLATILE =
  '0x93cdffbd51cb093f7a9f7e8474a6f215486891c9';

export const DEX_STORAGE_STABLE = '0x67082edde8104eec6b20ff4a629f68f3efaf6a76';

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
