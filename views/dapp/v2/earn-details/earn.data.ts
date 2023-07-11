import { COIN_TYPE, Network } from '@interest-protocol/sui-amm-sdk';

import { TOKEN_SYMBOL } from '@/lib';

import { EarnPoolItemProps, EarnPositionItemProps } from './earn.types';

export const EARN_POOL_DATA: ReadonlyArray<EarnPoolItemProps> = [
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: '123',
    volume: '12h',
    allocation: '123',
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: '123',
    volume: '12h',
    allocation: '123',
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: '123',
    volume: '12h',
    allocation: '123',
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: '123',
    volume: '12h',
    allocation: '123',
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: '123',
    volume: '12h',
    allocation: '123',
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: '123',
    volume: '12h',
    allocation: '123',
    headerOption: {
      isStable: true,
      isFarm: true,
    },
  },
];

export const EARN_POSITION_DATA: ReadonlyArray<EarnPositionItemProps> = [
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: {
      token1: '123',
      token2: '123',
    },
    farmIPX: '123',
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: {
      token1: '123',
      token2: '123',
    },
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
  {
    token1: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    token2: {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'SUI',
    },
    apr: '123',
    fee: '123',
    liquidity: {
      token1: '123',
      token2: '123',
    },
    farmIPX: '123',
    headerOption: {
      isVolatile: true,
      isFarm: true,
    },
  },
];
