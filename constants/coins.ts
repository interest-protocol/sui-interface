import { Network } from '@mysten/sui.js';

import { TOKEN_SYMBOL } from '@/sdk';

export const COINS_PACKAGE_ID = '0xf946d5f17401154367c463ad4b31a3440d3da674';

const DEV_NET_BASE_COINS = {
  SUI: '0x2::sui::SUI',
  BNB: `${COINS_PACKAGE_ID}::coins::BNB`,
  ETH: `${COINS_PACKAGE_ID}::coins::ETH`,
  BTC: `${COINS_PACKAGE_ID}::coins::BTC`,
  USDT: `${COINS_PACKAGE_ID}::coins::USDT`,
  USDC: `${COINS_PACKAGE_ID}::coins::USDC`,
  DAI: `${COINS_PACKAGE_ID}::coins::DAI`,
  IPX: `${COINS_PACKAGE_ID}::ipx::IPX`,
};

export const COIN_TYPE = {
  [Network.DEVNET]: {
    ...DEV_NET_BASE_COINS,
    V_LP_SUI_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.SUI}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_BTC_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.BTC}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_BNB_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.BNB}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_ETH_USDT: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.ETH}, ${DEV_NET_BASE_COINS.USDT}>`,
    V_LP_ETH_USDC: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.ETH}, ${DEV_NET_BASE_COINS.USDC}>`,
    V_LP_DAI_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoinVPool<${DEV_NET_BASE_COINS.DAI}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_ETH_IPX: `${COINS_PACKAGE_ID}::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.ETH}, ${DEV_NET_BASE_COINS.IPX}>`,
  },
};

export const COIN_TYPE_TO_SYMBOL = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.DEVNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.DEVNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.DEVNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.DEVNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.DEVNET].DAI]: TOKEN_SYMBOL.DAI,
    [COIN_TYPE[Network.DEVNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.DEVNET].IPX]: TOKEN_SYMBOL.IPX,
    [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: TOKEN_SYMBOL.V_LP_SUI_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: TOKEN_SYMBOL.V_LP_BTC_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: TOKEN_SYMBOL.V_LP_BNB_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: TOKEN_SYMBOL.V_LP_ETH_USDT,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: TOKEN_SYMBOL.V_LP_ETH_USDC,
    [COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH]: TOKEN_SYMBOL.V_LP_DAI_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: TOKEN_SYMBOL.V_LP_ETH_IPX,
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
    [COIN_TYPE[Network.DEVNET].IPX]: 9,
    [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: 0,
  },
};

export const COIN_POOL = {
  [Network.DEVNET]: {
    V_LP_SUI_ETH: '0x76b8b470c62ce6d3e2dfb55217acbbc8c05b1346',
    V_LP_BTC_ETH: '0xc9cd6dfb99ec6044989c7d2117840bc4967076dd',
    V_LP_BNB_ETH: '0x0f0dfbf54ed0e676a70e9a92f18e7034eeb6e9f0',
    V_LP_ETH_USDT: '0x3f19ef686d50c46ec6d058b7475e9de860f2f9da',
    V_LP_ETH_USDC: '0x36bd6d4d9123087dcbce63db390c9a7e28ae675c',
    V_LP_DAI_ETH: '0x23ab67cea2bcf31646c24336c3175289f63d383e',
    V_LP_ETH_IPX: '0x1b05670b1edc88ca6a3d3fb4d44f8891c36d3c08',
  },
};

export const COIN_FARM = {
  [Network.DEVNET]: {
    V_LP_SUI_ETH: '0x7b2a8100629d19ce44bfeaa9023aa1347d6561de',
    V_LP_BTC_ETH: '0x899980a8bc7e0a14d7034d03d025664b01579d10',
    V_LP_BNB_ETH: '0xbace88a58142f6eff17faf24924e68eb9a6c9378',
    V_LP_ETH_USDT: '0xf1637c64c1be4236bd26888b86c1edc93981a55e',
    V_LP_ETH_USDC: '0xf80d0fd196aff2df5c9933e1a9075e613da46ab3',
    V_LP_DAI_ETH: '0x6db471672b94b207cf498829920395c0dbd7a970',
    V_LP_ETH_IPX: '0x54138a08b691422ec97f8b7c3cddae00587a47c8',
    IPX: '0x56df3eac6053fa1eb1b9ca41687bfbd92e00ecdf',
  },
};

export const COINS = {
  [Network.DEVNET]: {
    ETH: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].ETH],
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.DEVNET].ETH,
    },
    BTC: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].BTC],
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.DEVNET].BTC,
    },
    BNB: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].BNB],
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.DEVNET].BNB,
    },
    SUI: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].SUI],
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
    },
    DAI: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].DAI],
      symbol: TOKEN_SYMBOL.DAI,
      type: COIN_TYPE[Network.DEVNET].DAI,
    },
    USDC: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].USDC],
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.DEVNET].USDC,
    },
    USDT: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].USDT],
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.DEVNET].USDT,
    },
    IPX: {
      decimals: COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].IPX],
      symbol: TOKEN_SYMBOL.IPX,
      type: COIN_TYPE[Network.DEVNET].IPX,
    },
    V_LP_SUI_ETH: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH],
      symbol: TOKEN_SYMBOL.V_LP_SUI_ETH,
      type: COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH,
    },
    V_LP_BTC_ETH: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH],
      symbol: TOKEN_SYMBOL.V_LP_BTC_ETH,
      type: COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH,
    },
    V_LP_BNB_ETH: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH],
      symbol: TOKEN_SYMBOL.V_LP_BNB_ETH,
      type: COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH,
    },
    V_LP_ETH_USDT: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT],
      symbol: TOKEN_SYMBOL.V_LP_ETH_USDT,
      type: COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT,
    },
    V_LP_ETH_USDC: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC],
      symbol: TOKEN_SYMBOL.V_LP_ETH_USDC,
      type: COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC,
    },
    V_LP_DAI_ETH: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC],
      symbol: TOKEN_SYMBOL.V_LP_DAI_ETH,
      type: COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH,
    },
    V_LP_ETH_IPX: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX],
      symbol: TOKEN_SYMBOL.V_LP_ETH_IPX,
      type: COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX,
    },
  },
};
