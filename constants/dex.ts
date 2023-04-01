import { TOKEN_SYMBOL } from '@/sdk';

import { COIN_TYPE } from './coins';
import { Network } from './network';

export const DEX_BASE_TOKEN_ARRAY = {
  [Network.DEVNET]: [COIN_TYPE[Network.DEVNET].ETH],
  [Network.TESTNET]: [COIN_TYPE[Network.TESTNET].ETH],
};

export const DEX_TOKENS_DATA = {
  [Network.DEVNET]: [
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
  ],
  [Network.TESTNET]: [
    {
      symbol: TOKEN_SYMBOL.SUI,
      decimals: 9,
      type: COIN_TYPE[Network.TESTNET].SUI,
      name: 'Sui',
    },
    {
      symbol: TOKEN_SYMBOL.BTC,
      decimals: 0,
      type: COIN_TYPE[Network.TESTNET].BTC,
      name: 'Bitcoin',
    },
    {
      symbol: TOKEN_SYMBOL.BNB,
      decimals: 0,
      type: COIN_TYPE[Network.TESTNET].BNB,
      name: 'BNB Coin',
    },
    {
      symbol: TOKEN_SYMBOL.DAI,
      decimals: 0,
      type: COIN_TYPE[Network.TESTNET].DAI,
      name: 'DAI',
    },
    {
      symbol: TOKEN_SYMBOL.ETH,
      decimals: 0,
      type: COIN_TYPE[Network.TESTNET].ETH,
      name: 'Ether',
    },
    {
      symbol: TOKEN_SYMBOL.USDT,
      decimals: 0,
      type: COIN_TYPE[Network.TESTNET].USDT,
      name: 'USD Tether',
    },
    {
      symbol: TOKEN_SYMBOL.USDC,
      decimals: 0,
      type: COIN_TYPE[Network.TESTNET].USDC,
      name: 'USD Coin',
    },
    {
      symbol: TOKEN_SYMBOL.IPX,
      decimals: 9,
      type: COIN_TYPE[Network.TESTNET].IPX,
      name: 'Interest Protocol Coin',
    },
  ],
};

export const BASE_TOKENS_TYPES = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].USDC,
    COIN_TYPE[Network.DEVNET].SUI,
  ],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].USDC,
    COIN_TYPE[Network.TESTNET].SUI,
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
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].DAI,
    COIN_TYPE[Network.TESTNET].BTC,
    COIN_TYPE[Network.TESTNET].IPX,
    COIN_TYPE[Network.TESTNET].USDT,
    COIN_TYPE[Network.TESTNET].BNB,
  ],
};

export enum DexFunctions {
  SwapX = 'swap_x',
  SwapY = 'swap_y',
  OneHopSwap = 'one_hop_swap',
  TwoHopSwap = 'two_hop_swap',
}
