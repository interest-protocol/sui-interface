import { Network } from '@mysten/sui.js';

import { TOKEN_SYMBOL } from '@/sdk';

export const COINS_PACKAGE_ID = '0x95c1a2d3308de0332603f211eae2a994d653bcb3';

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
    V_LP_SUI_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VPool<${DEV_NET_BASE_COINS.SUI}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_BTC_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VPool<${DEV_NET_BASE_COINS.BTC}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_BNB_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VPool<${DEV_NET_BASE_COINS.BNB}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_ETH_USDT: `${COINS_PACKAGE_ID}::dex_volatile::VPool<${DEV_NET_BASE_COINS.ETH}, ${DEV_NET_BASE_COINS.USDT}>`,
    V_LP_ETH_USDC: `${COINS_PACKAGE_ID}::dex_volatile::VPool<${DEV_NET_BASE_COINS.ETH}, ${DEV_NET_BASE_COINS.USDC}>`,
    V_LP_DAI_ETH: `${COINS_PACKAGE_ID}::dex_volatile::VPool<${DEV_NET_BASE_COINS.DAI}, ${DEV_NET_BASE_COINS.ETH}>`,
    V_LP_ETH_IPX: `${COINS_PACKAGE_ID}::dex_volatile::VPool<${DEV_NET_BASE_COINS.ETH}, ${DEV_NET_BASE_COINS.IPX}>`,
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
    V_LP_SUI_ETH: '0x08caaca6e89d2b4d388381b82ca85e748f5a5d54',
    V_LP_BTC_ETH: '0x8d4aeeb6bc2cd4479700cafd9ab7f3bb2bc5c4ed',
    V_LP_BNB_ETH: '0x8232fa7931bd6d0379670f798ade1cfc5846ce25',
    V_LP_ETH_USDT: '0x009332fc347832f7d239f31bc7458334bdc60506',
    V_LP_ETH_USDC: '0x90e2098f4d9fdb7aa3ffbdff303e3b68202378fc',
    V_LP_DAI_ETH: '0xb4603189ed3d772cd732b5276f8f92faef8edbc3',
    V_LP_ETH_IPX: '0x7fa5ea474919b64ddfb0761bb42e7a5e934171f0',
  },
};

export const COIN_FARM = {
  [Network.DEVNET]: {
    V_LP_SUI_ETH: '0x18da39efe8a0c76a2d435ac7d03acab26720e03a',
    V_LP_BTC_ETH: '0xbefa20699ccc1029fe58d762d9f16646dbefaf22',
    V_LP_BNB_ETH: '0x5c1067dcdc858fe12e22559ac262f8c06823dcb5',
    V_LP_ETH_USDT: '0x5bae6d7600af9b62aa8a57a0e551495cc28ea725',
    V_LP_ETH_USDC: '0x599dac102cb15d7da99d0c2e128932f52b50723a',
    V_LP_DAI_ETH: '0x1bf8436f19523d668e9f75662529e17f0aae636e',
    V_LP_ETH_IPX: '0xb64871a218e69421e2ffd9e89e2cc40c3c248836',
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
