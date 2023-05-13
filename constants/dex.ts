import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';
import { TOKEN_SYMBOL } from 'lib';

export const DEX_TOKENS_DATA = {
  [Network.DEVNET]: [
    {
      symbol: TOKEN_SYMBOL.SUI,
      decimals: 9,
      type: COIN_TYPE[Network.DEVNET].SUI,
      name: 'Sui',
    },
    {
      symbol: TOKEN_SYMBOL.ETH,
      decimals: 9,
      type: COIN_TYPE[Network.DEVNET].ETH,
      name: 'Ether',
    },
    {
      symbol: TOKEN_SYMBOL.BTC,
      decimals: 9,
      type: COIN_TYPE[Network.DEVNET].BTC,
      name: 'Bitcoin',
    },
    {
      symbol: TOKEN_SYMBOL.BNB,
      decimals: 9,
      type: COIN_TYPE[Network.DEVNET].BNB,
      name: 'BNB Coin',
    },
    {
      symbol: TOKEN_SYMBOL.USDT,
      decimals: 9,
      type: COIN_TYPE[Network.DEVNET].USDT,
      name: 'USD Tether',
    },
    {
      symbol: TOKEN_SYMBOL.USDC,
      decimals: 9,
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
      symbol: TOKEN_SYMBOL.ETH,
      decimals: 9,
      type: COIN_TYPE[Network.TESTNET].ETH,
      name: 'Ether',
    },
    {
      symbol: TOKEN_SYMBOL.BTC,
      decimals: 9,
      type: COIN_TYPE[Network.TESTNET].BTC,
      name: 'Bitcoin',
    },
    {
      symbol: TOKEN_SYMBOL.BNB,
      decimals: 9,
      type: COIN_TYPE[Network.TESTNET].BNB,
      name: 'BNB Coin',
    },
    {
      symbol: TOKEN_SYMBOL.USDT,
      decimals: 9,
      type: COIN_TYPE[Network.TESTNET].USDT,
      name: 'USD Tether',
    },
    {
      symbol: TOKEN_SYMBOL.USDC,
      decimals: 9,
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
  [Network.MAINNET]: [
    {
      symbol: TOKEN_SYMBOL.SUI,
      decimals: 9,
      type: COIN_TYPE[Network.MAINNET].SUI,
      name: 'Sui',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_ETH,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].WORMHOLE_ETH,
      name: 'Wormhole WETH',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_USDT,
      decimals: 6,
      type: COIN_TYPE[Network.MAINNET].WORMHOLE_USDT,
      name: 'Wormhole USDT',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_USDC,
      decimals: 6,
      type: COIN_TYPE[Network.MAINNET].WORMHOLE_USDC,
      name: 'Wormhole USDC',
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
  [Network.MAINNET]: [
    COIN_TYPE[Network.MAINNET].SUI,
    COIN_TYPE[Network.MAINNET].WORMHOLE_USDC,
  ],
};

export const RECOMMENDED_TOKENS_TYPES = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].BTC,
    COIN_TYPE[Network.DEVNET].IPX,
    COIN_TYPE[Network.DEVNET].USDT,
    COIN_TYPE[Network.DEVNET].BNB,
  ],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].BTC,
    COIN_TYPE[Network.TESTNET].IPX,
    COIN_TYPE[Network.TESTNET].USDT,
    COIN_TYPE[Network.TESTNET].BNB,
  ],
  [Network.MAINNET]: [
    COIN_TYPE[Network.MAINNET].WORMHOLE_ETH,
    COIN_TYPE[Network.MAINNET].WORMHOLE_USDT,
  ],
};
