import { TOKEN_SYMBOL } from '@/sdk';

import { COIN_TYPE } from './coins';
import { Network } from './network';

export const DEX_PACKAGE_ID = '0xb48622ffc926f6e30944e2837ad623c9e3633ced';

export const VOLATILE_POOLS_OBJECT_ID =
  '0xbaad86fbb5c86b3ff64c35bf8fb535459a033f5e';

export const DEX_BASE_TOKEN_ARRAY = [COIN_TYPE[Network.DEVNET].ETH];

export const DEX_STORAGE_VOLATILE =
  '0x7072fca1954ee6addc5b0e6b83ca70e4516d57ad';

export const DEX_STORAGE_STABLE = '0x1b7f2dd3c708f029101f12a6a15fc951f8726334';

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
