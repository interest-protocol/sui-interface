import { TOKEN_SYMBOL } from '@/sdk';

import { COIN_TYPE } from './coins';
import { Network } from './network';

export const DEX_PACKAGE_ID = '0x7519197dd8e31b375b4550017e64dc640743fcdd';

export const VOLATILE_POOLS_OBJECT_ID =
  '0x786930730b8add6a74ead624a5fee6d8496ee8fa';

export const DEX_BASE_TOKEN_ARRAY = [COIN_TYPE[Network.DEVNET].ETH];

export const DEX_STORAGE_VOLATILE =
  '0x82372c23919019ed09a12f9d3a6de32f19148615';

export const DEX_STORAGE_STABLE = '0x16352b4c66510e35df4767b1bfa73bec4029a9cc';

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

export const BASE_TOKENS_TYPES = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].USDC,
    COIN_TYPE[Network.DEVNET].SUI,
  ],
};

export const RECOMMENDED_TOKENS_TYPES = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].DAI,
    COIN_TYPE[Network.DEVNET].BTC,
    COIN_TYPE[Network.DEVNET].IPX,
    COIN_TYPE[Network.DEVNET].USDT,
    COIN_TYPE[Network.DEVNET].BNB,
  ],
};
