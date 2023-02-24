import { Network } from '@mysten/sui.js';

import { TOKEN_SYMBOL } from '@/sdk';

import { COIN_TYPE } from './coins';

export const DEX_PACKAGE_ID = '0xe5feafead91b461354f04fa4b9de78d20e49ec2e';

export const VOLATILE_POOLS_OBJECT_ID =
  '0x2e7fad5d2fc6e221ab0c893847107ea248096d83';

export const DEX_BASE_TOKEN_ARRAY = [COIN_TYPE[Network.DEVNET].ETH];

export const DEX_STORAGE_VOLATILE =
  '0xc686f956f46d893122af808ff96a4e8e6af16a3a';

export const DEX_STORAGE_STABLE = '0x2324a77108767fff2950afc515bb7ce63f4511d8';

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
];
