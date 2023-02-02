import { Network } from '@mysten/sui.js';

import { TOKEN_SYMBOL } from '@/sdk';

export const COIN_TYPE = {
  [Network.DEVNET]: {
    SUI: '0x2::sui::SUI',
    BNB: '0x913e6be0ef93fb9a498b77ff7312f9428bb342de::coins::BNB',
    ETH: '0x913e6be0ef93fb9a498b77ff7312f9428bb342de::coins::ETH',
    BTC: '0x913e6be0ef93fb9a498b77ff7312f9428bb342de::coins::BTC',
    USDT: '0x913e6be0ef93fb9a498b77ff7312f9428bb342de::coins::USDT',
    USDC: '0x913e6be0ef93fb9a498b77ff7312f9428bb342de::coins::USDC',
    DAI: '0x913e6be0ef93fb9a498b77ff7312f9428bb342de::coins::DAI',
  },
};

export const COIN_TYPE_TO_SYMBOL = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BTC]: 'BTC',
    [COIN_TYPE[Network.DEVNET].ETH]: 'ETH',
    [COIN_TYPE[Network.DEVNET].BTC]: 'BNB',
    [COIN_TYPE[Network.DEVNET].USDT]: 'USDT',
    [COIN_TYPE[Network.DEVNET].USDC]: 'USDC',
    [COIN_TYPE[Network.DEVNET].DAI]: 'DAI',
    [COIN_TYPE[Network.DEVNET].SUI]: 'Sui',
  },
};

export const COIN_DECIMALS = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BTC]: 0,
    [COIN_TYPE[Network.DEVNET].ETH]: 0,
    [COIN_TYPE[Network.DEVNET].BNB]: 0,
    [COIN_TYPE[Network.DEVNET].USDT]: 0,
    [COIN_TYPE[Network.DEVNET].USDC]: 0,
    [COIN_TYPE[Network.DEVNET].DAI]: 0,
    [COIN_TYPE[Network.DEVNET].SUI]: 9,
  },
};

export const COINS = {
  [Network.DEVNET]: {
    ETH: {
      decimals: 0,
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.DEVNET].ETH,
    },
    BTC: {
      decimals: 0,
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.DEVNET].BTC,
    },
    BNB: {
      decimals: 0,
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.DEVNET].BNB,
    },
    SUI: {
      decimals: 0,
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
    },
    DAI: {
      decimals: 0,
      symbol: TOKEN_SYMBOL.DAI,
      type: COIN_TYPE[Network.DEVNET].DAI,
    },
    USDC: {
      decimals: 0,
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.DEVNET].USDC,
    },
    USDT: {
      decimals: 0,
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.DEVNET].USDT,
    },
  },
};
