import { COIN_TYPE, Network } from '@interest-protocol/sui-amm-sdk';
import { TOKEN_SYMBOL } from 'lib';

export const EARN_TOKENS_DATA = {
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
      symbol: TOKEN_SYMBOL.WORMHOLE_BTCB,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB,
      name: 'Wormhole BTCB',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_ETH,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH,
      name: 'Wormhole WETH',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_ETH,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH,
      name: 'Wormhole WETH',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_USDT,
      decimals: 6,
      type: COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT,
      name: 'Wormhole USDT',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_USDC,
      decimals: 6,
      type: COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC,
      name: 'Wormhole USDC',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_USDC,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC,
      name: 'Wormhole USDC',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_USDT,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT,
      name: 'Wormhole USDT',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_WBNB,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB,
      name: 'Wormhole WBNB',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_SOL,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL,
      name: 'Wormhole SOL',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_ADA,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA,
      name: 'Wormhole ADA',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_WMATIC,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC,
      name: 'Wormhole WMATIC',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_WAVAX,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX,
      name: 'Wormhole WAVAX',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_WFTM,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM,
      name: 'Wormhole WFTM',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_CELO,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO,
      name: 'Wormhole CELO',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_DOGE,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE,
      name: 'Wormhole DOGE',
    },
    {
      symbol: TOKEN_SYMBOL.WORMHOLE_FLOKI,
      decimals: 8,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI,
      name: 'Wormhole FLOKI',
    },
  ],
};

export const COIN_TYPE_ARRAY_UI = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].IPX,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX,
    COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT,
    COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT,
  ],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].IPX,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX,
    COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT,
    COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT,
  ],
  [Network.MAINNET]: [],
};
