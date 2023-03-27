import { TOKEN_SYMBOL } from '@/sdk';

import { Network } from './network';
import { OBJECT_RECORD } from './objects';

const DEV_NET_BASE_COINS = {
  SUI: '0x2::sui::SUI',
  BNB: `${OBJECT_RECORD[Network.DEVNET].PACKAGE_ID}::coins::BNB`,
  ETH: `${OBJECT_RECORD[Network.DEVNET].PACKAGE_ID}::coins::ETH`,
  BTC: `${OBJECT_RECORD[Network.DEVNET].PACKAGE_ID}::coins::BTC`,
  USDT: `${OBJECT_RECORD[Network.DEVNET].PACKAGE_ID}::coins::USDT`,
  USDC: `${OBJECT_RECORD[Network.DEVNET].PACKAGE_ID}::coins::USDC`,
  DAI: `${OBJECT_RECORD[Network.DEVNET].PACKAGE_ID}::coins::DAI`,
  IPX: `${OBJECT_RECORD[Network.DEVNET].PACKAGE_ID}::ipx::IPX`,
};

const TESTNET_NET_BASE_COINS = {
  SUI: '0x2::sui::SUI',
  BNB: `${OBJECT_RECORD[Network.TESTNET].PACKAGE_ID}::coins::BNB`,
  ETH: `${OBJECT_RECORD[Network.TESTNET].PACKAGE_ID}::coins::ETH`,
  BTC: `${OBJECT_RECORD[Network.TESTNET].PACKAGE_ID}::coins::BTC`,
  USDT: `${OBJECT_RECORD[Network.TESTNET].PACKAGE_ID}::coins::USDT`,
  USDC: `${OBJECT_RECORD[Network.TESTNET].PACKAGE_ID}::coins::USDC`,
  DAI: `${OBJECT_RECORD[Network.TESTNET].PACKAGE_ID}::coins::DAI`,
  IPX: `${OBJECT_RECORD[Network.TESTNET].PACKAGE_ID}::ipx::IPX`,
};

export const COIN_TYPE = {
  [Network.DEVNET]: {
    ...DEV_NET_BASE_COINS,
    V_LP_SUI_ETH: `${
      OBJECT_RECORD[Network.DEVNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.SUI}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BTC_ETH: `${
      OBJECT_RECORD[Network.DEVNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.BTC}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BNB_ETH: `${
      OBJECT_RECORD[Network.DEVNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.BNB}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_ETH_USDT: `${
      OBJECT_RECORD[Network.DEVNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDT
    }>`,
    V_LP_ETH_USDC: `${
      OBJECT_RECORD[Network.DEVNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDC
    }>`,
    V_LP_DAI_ETH: `${
      OBJECT_RECORD[Network.DEVNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.DAI}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_ETH_IPX: `${
      OBJECT_RECORD[Network.DEVNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.IPX
    }>`,
  },
  [Network.TESTNET]: {
    ...DEV_NET_BASE_COINS,
    V_LP_SUI_ETH: `${
      OBJECT_RECORD[Network.TESTNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${TESTNET_NET_BASE_COINS.SUI}, ${
      TESTNET_NET_BASE_COINS.ETH
    }>`,
    V_LP_BTC_ETH: `${
      OBJECT_RECORD[Network.TESTNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${TESTNET_NET_BASE_COINS.BTC}, ${
      TESTNET_NET_BASE_COINS.ETH
    }>`,
    V_LP_BNB_ETH: `${
      OBJECT_RECORD[Network.TESTNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${TESTNET_NET_BASE_COINS.BNB}, ${
      TESTNET_NET_BASE_COINS.ETH
    }>`,
    V_LP_ETH_USDT: `${
      OBJECT_RECORD[Network.TESTNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${TESTNET_NET_BASE_COINS.ETH}, ${
      TESTNET_NET_BASE_COINS.USDT
    }>`,
    V_LP_ETH_USDC: `${
      OBJECT_RECORD[Network.TESTNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${TESTNET_NET_BASE_COINS.ETH}, ${
      TESTNET_NET_BASE_COINS.USDC
    }>`,
    V_LP_DAI_ETH: `${
      OBJECT_RECORD[Network.TESTNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${TESTNET_NET_BASE_COINS.DAI}, ${
      TESTNET_NET_BASE_COINS.ETH
    }>`,
    V_LP_ETH_IPX: `${
      OBJECT_RECORD[Network.TESTNET].PACKAGE_ID
    }::dex_volatile::VLPCoin<${TESTNET_NET_BASE_COINS.ETH}, ${
      TESTNET_NET_BASE_COINS.IPX
    }>`,
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
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.TESTNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.TESTNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.TESTNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.TESTNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.TESTNET].DAI]: TOKEN_SYMBOL.DAI,
    [COIN_TYPE[Network.TESTNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.TESTNET].IPX]: TOKEN_SYMBOL.IPX,
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: TOKEN_SYMBOL.V_LP_SUI_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: TOKEN_SYMBOL.V_LP_BTC_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: TOKEN_SYMBOL.V_LP_BNB_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: TOKEN_SYMBOL.V_LP_ETH_USDT,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: TOKEN_SYMBOL.V_LP_ETH_USDC,
    [COIN_TYPE[Network.TESTNET].V_LP_DAI_ETH]: TOKEN_SYMBOL.V_LP_DAI_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: TOKEN_SYMBOL.V_LP_ETH_IPX,
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
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BTC]: 0,
    [COIN_TYPE[Network.TESTNET].ETH]: 0,
    [COIN_TYPE[Network.TESTNET].BNB]: 0,
    [COIN_TYPE[Network.TESTNET].USDT]: 0,
    [COIN_TYPE[Network.TESTNET].USDC]: 0,
    [COIN_TYPE[Network.TESTNET].DAI]: 0,
    [COIN_TYPE[Network.TESTNET].SUI]: 9,
    [COIN_TYPE[Network.TESTNET].IPX]: 9,
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_DAI_ETH]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: 0,
  },
};

export const COIN_SYMBOL = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.DEVNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.DEVNET].BNB]: TOKEN_SYMBOL.BNB,
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
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.TESTNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.TESTNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.TESTNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.TESTNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.TESTNET].DAI]: TOKEN_SYMBOL.DAI,
    [COIN_TYPE[Network.TESTNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.TESTNET].IPX]: TOKEN_SYMBOL.IPX,
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: TOKEN_SYMBOL.V_LP_SUI_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: TOKEN_SYMBOL.V_LP_BTC_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: TOKEN_SYMBOL.V_LP_BNB_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: TOKEN_SYMBOL.V_LP_ETH_USDT,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: TOKEN_SYMBOL.V_LP_ETH_USDC,
    [COIN_TYPE[Network.TESTNET].V_LP_DAI_ETH]: TOKEN_SYMBOL.V_LP_DAI_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: TOKEN_SYMBOL.V_LP_ETH_IPX,
  },
};

export const COIN_POOL = {
  [Network.DEVNET]: {
    V_LP_SUI_ETH: '0x2b7115592bd6e80754d1f612da5e28f770176cc7',
    V_LP_BTC_ETH: '0x0d14c299e5becd306affec948df99309cfb0fe20',
    V_LP_BNB_ETH: '0xdd194ba383d9c449a3cf8403fc543c34f480ccd2',
    V_LP_ETH_USDT: '0x8c3bfa8784cb76a0826c3c477bcb8aeaa9fc0881',
    V_LP_ETH_USDC: '0x79e6b684a4e26b937bfd6918a46c584aff1dfd1c',
    V_LP_DAI_ETH: '0x3c241305bb172bf89a9002c1ef2bad1cd8fbd52d',
    V_LP_ETH_IPX: '0x343b03139a0cf001412831928499021fac647e5e',
  },
  [Network.TESTNET]: {
    V_LP_SUI_ETH: '0x2b7115592bd6e80754d1f612da5e28f770176cc7',
    V_LP_BTC_ETH: '0x0d14c299e5becd306affec948df99309cfb0fe20',
    V_LP_BNB_ETH: '0xdd194ba383d9c449a3cf8403fc543c34f480ccd2',
    V_LP_ETH_USDT: '0x8c3bfa8784cb76a0826c3c477bcb8aeaa9fc0881',
    V_LP_ETH_USDC: '0x79e6b684a4e26b937bfd6918a46c584aff1dfd1c',
    V_LP_DAI_ETH: '0x3c241305bb172bf89a9002c1ef2bad1cd8fbd52d',
    V_LP_ETH_IPX: '0x343b03139a0cf001412831928499021fac647e5e',
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
  [Network.TESTNET]: {
    ETH: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].ETH],
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.TESTNET].ETH,
    },
    BTC: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].BTC],
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.TESTNET].BTC,
    },
    BNB: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].BNB],
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.TESTNET].BNB,
    },
    SUI: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].SUI],
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.TESTNET].SUI,
    },
    DAI: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].DAI],
      symbol: TOKEN_SYMBOL.DAI,
      type: COIN_TYPE[Network.TESTNET].DAI,
    },
    USDC: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].USDC],
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.TESTNET].USDC,
    },
    USDT: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].USDT],
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.TESTNET].USDT,
    },
    IPX: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].IPX],
      symbol: TOKEN_SYMBOL.IPX,
      type: COIN_TYPE[Network.TESTNET].IPX,
    },
    V_LP_SUI_ETH: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH],
      symbol: TOKEN_SYMBOL.V_LP_SUI_ETH,
      type: COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
    },
    V_LP_BTC_ETH: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH],
      symbol: TOKEN_SYMBOL.V_LP_BTC_ETH,
      type: COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH,
    },
    V_LP_BNB_ETH: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH],
      symbol: TOKEN_SYMBOL.V_LP_BNB_ETH,
      type: COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
    },
    V_LP_ETH_USDT: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][
          COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT
        ],
      symbol: TOKEN_SYMBOL.V_LP_ETH_USDT,
      type: COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT,
    },
    V_LP_ETH_USDC: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][
          COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC
        ],
      symbol: TOKEN_SYMBOL.V_LP_ETH_USDC,
      type: COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC,
    },
    V_LP_DAI_ETH: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][
          COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC
        ],
      symbol: TOKEN_SYMBOL.V_LP_DAI_ETH,
      type: COIN_TYPE[Network.TESTNET].V_LP_DAI_ETH,
    },
    V_LP_ETH_IPX: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX],
      symbol: TOKEN_SYMBOL.V_LP_ETH_IPX,
      type: COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX,
    },
  },
};

export const COIN_TYPE_TO_COIN = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].ETH]: COINS[Network.DEVNET].ETH,
    [COIN_TYPE[Network.DEVNET].BTC]: COINS[Network.DEVNET].BTC,
    [COIN_TYPE[Network.DEVNET].BNB]: COINS[Network.DEVNET].BNB,
    [COIN_TYPE[Network.DEVNET].SUI]: COINS[Network.DEVNET].SUI,
    [COIN_TYPE[Network.DEVNET].DAI]: COINS[Network.DEVNET].DAI,
    [COIN_TYPE[Network.DEVNET].USDC]: COINS[Network.DEVNET].USDC,
    [COIN_TYPE[Network.DEVNET].USDT]: COINS[Network.DEVNET].USDT,
    [COIN_TYPE[Network.DEVNET].IPX]: COINS[Network.DEVNET].IPX,
  },
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].ETH]: COINS[Network.DEVNET].ETH,
    [COIN_TYPE[Network.TESTNET].BTC]: COINS[Network.DEVNET].BTC,
    [COIN_TYPE[Network.TESTNET].BNB]: COINS[Network.DEVNET].BNB,
    [COIN_TYPE[Network.TESTNET].SUI]: COINS[Network.DEVNET].SUI,
    [COIN_TYPE[Network.TESTNET].DAI]: COINS[Network.DEVNET].DAI,
    [COIN_TYPE[Network.TESTNET].USDC]: COINS[Network.DEVNET].USDC,
    [COIN_TYPE[Network.TESTNET].USDT]: COINS[Network.DEVNET].USDT,
    [COIN_TYPE[Network.TESTNET].IPX]: COINS[Network.DEVNET].IPX,
  },
};
