import { Network } from '@mysten/sui.js';

import { TOKEN_SYMBOL } from '@/sdk';

import { COIN_TYPE } from './coins';

export const DEX_PACKAGE_ID = '0x3c84fa90931ca85c49211b2f48cd0ff2e2362af6';

export const POOLS_OBJECT_ID = '0x72c7d297a6208dad992eae278494d90df63bbec4';

export const DEX_BASE_TOKEN_ARRAY = [COIN_TYPE[Network.DEVNET].ETH];

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

const getSUIDevNetData = (token: TOKEN_SYMBOL) =>
  DEX_TOKENS_DATA.find(({ symbol }) => symbol == token) ?? {
    symbol: TOKEN_SYMBOL.SUI,
    decimals: 9,
    type: COIN_TYPE[Network.DEVNET].SUI,
    name: 'Sui',
  };

export const RECOMMENDED_POOLS = [
  {
    token0: getSUIDevNetData(TOKEN_SYMBOL.BNB),
    token1: getSUIDevNetData(TOKEN_SYMBOL.ETH),
  },
  {
    token0: getSUIDevNetData(TOKEN_SYMBOL.BTC),
    token1: getSUIDevNetData(TOKEN_SYMBOL.ETH),
  },
  {
    token0: getSUIDevNetData(TOKEN_SYMBOL.DAI),
    token1: getSUIDevNetData(TOKEN_SYMBOL.ETH),
  },
  {
    token0: getSUIDevNetData(TOKEN_SYMBOL.ETH),
    token1: getSUIDevNetData(TOKEN_SYMBOL.USDT),
  },
  {
    token0: getSUIDevNetData(TOKEN_SYMBOL.ETH),
    token1: getSUIDevNetData(TOKEN_SYMBOL.USDC),
  },
  {
    token0: getSUIDevNetData(TOKEN_SYMBOL.ETH),
    token1: getSUIDevNetData(TOKEN_SYMBOL.SUI),
  },
];
