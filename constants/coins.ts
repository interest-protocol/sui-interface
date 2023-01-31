import { Network } from '@mysten/sui.js';

export const COIN_TYPE = {
  [Network.DEVNET]: {
    SUI: '0x2::sui::SUI',
    BNB: '0x30ea97fddd3f2b7fb155990454d4213dfbaaaa14::coins::BNB',
    ETH: '0x30ea97fddd3f2b7fb155990454d4213dfbaaaa14::coins::ETH',
    BTC: '0x30ea97fddd3f2b7fb155990454d4213dfbaaaa14::coins::BTC',
    USDT: '0x30ea97fddd3f2b7fb155990454d4213dfbaaaa14::coins::USDT',
    USDC: '0x30ea97fddd3f2b7fb155990454d4213dfbaaaa14::coins::USDC',
    DAI: '0x30ea97fddd3f2b7fb155990454d4213dfbaaaa14::coins::DAI',
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
    [COIN_TYPE[Network.DEVNET].BTC]: 0,
    [COIN_TYPE[Network.DEVNET].USDT]: 0,
    [COIN_TYPE[Network.DEVNET].USDC]: 0,
    [COIN_TYPE[Network.DEVNET].DAI]: 0,
    [COIN_TYPE[Network.DEVNET].SUI]: 9,
  },
};
