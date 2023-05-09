import { SUI_TYPE_ARG } from '@mysten/sui.js';
import { TOKEN_SYMBOL } from 'lib';

import { Network } from './network';
import { OBJECT_RECORD } from './objects';

export const VOLATILE = {
  [Network.DEVNET]: `${
    OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
  }::curve::Volatile`,
  [Network.TESTNET]: `${
    OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
  }::curve::Volatile`,
};

export const STABLE = {
  [Network.DEVNET]: `${
    OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
  }::curve::Stable`,
  [Network.TESTNET]: `${
    OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
  }::curve::Stable`,
};

const DEV_NET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  BNB: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::ibnb::IBNB`,
  ETH: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::ieth::IETH`,
  BTC: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::ibtc::IBTC`,
  USDT: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::iusdt::IUSDT`,
  USDC: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::iusdc::IUSDC`,
  IPX: `${OBJECT_RECORD[Network.DEVNET].IPX_PACKAGE_ID}::ipx::IPX`,
};

const TESTNET_NET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  BNB: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::ibnb::IBNB`,
  ETH: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::ieth::IETH`,
  BTC: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::ibtc::IBTC`,
  USDT: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::iusdt::IUSDT`,
  USDC: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::iusdc::IUSDC`,
  IPX: `${OBJECT_RECORD[Network.TESTNET].IPX_PACKAGE_ID}::ipx::IPX`,
};

export const COIN_TYPE = {
  [Network.DEVNET]: {
    ...DEV_NET_BASE_COINS,
    V_LP_SUI_ETH: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.SUI}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BTC_ETH: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.BTC}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BNB_ETH: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.BNB}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_ETH_USDT: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDT
    }>`,
    V_LP_ETH_USDC: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDC
    }>`,
    V_LP_ETH_IPX: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.IPX
    }>`,
    S_LP_USDC_USDT: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.USDC}, ${
      DEV_NET_BASE_COINS.USDC
    }>`,
  },
  [Network.TESTNET]: {
    ...TESTNET_NET_BASE_COINS,
    V_LP_SUI_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${DEV_NET_BASE_COINS.SUI}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BTC_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${DEV_NET_BASE_COINS.BTC}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BNB_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${DEV_NET_BASE_COINS.BNB}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_ETH_USDT: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDT
    }>`,
    V_LP_ETH_USDC: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDC
    }>`,
    V_LP_ETH_IPX: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.IPX
    }>`,
    S_LP_USDC_USDT: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.TESTNET]}, ${DEV_NET_BASE_COINS.USDC}, ${
      DEV_NET_BASE_COINS.USDC
    }>`,
  },
};

export const COIN_TYPE_TO_STABLE = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BNB]: false,
    [COIN_TYPE[Network.DEVNET].ETH]: false,
    [COIN_TYPE[Network.DEVNET].BTC]: false,
    [COIN_TYPE[Network.DEVNET].USDT]: true,
    [COIN_TYPE[Network.DEVNET].USDC]: true,
    [COIN_TYPE[Network.DEVNET].SUI]: false,
    [COIN_TYPE[Network.DEVNET].IPX]: false,
    [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: false,
    [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: false,
    [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: false,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: false,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: false,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: false,
  },
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]: false,
    [COIN_TYPE[Network.TESTNET].ETH]: false,
    [COIN_TYPE[Network.TESTNET].BTC]: false,
    [COIN_TYPE[Network.TESTNET].USDT]: true,
    [COIN_TYPE[Network.TESTNET].USDC]: true,
    [COIN_TYPE[Network.TESTNET].SUI]: false,
    [COIN_TYPE[Network.TESTNET].IPX]: false,
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: false,
    [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: false,
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: false,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: false,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: false,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: false,
  },
};

export const COIN_TYPE_TO_SYMBOL = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.DEVNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.DEVNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.DEVNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.DEVNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.DEVNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.DEVNET].IPX]: TOKEN_SYMBOL.IPX,
    [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: TOKEN_SYMBOL.V_LP_SUI_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: TOKEN_SYMBOL.V_LP_BTC_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: TOKEN_SYMBOL.V_LP_BNB_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: TOKEN_SYMBOL.V_LP_ETH_USDT,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: TOKEN_SYMBOL.V_LP_ETH_USDC,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: TOKEN_SYMBOL.V_LP_ETH_IPX,
  },
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.TESTNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.TESTNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.TESTNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.TESTNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.TESTNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.TESTNET].IPX]: TOKEN_SYMBOL.IPX,
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: TOKEN_SYMBOL.V_LP_SUI_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: TOKEN_SYMBOL.V_LP_BTC_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: TOKEN_SYMBOL.V_LP_BNB_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: TOKEN_SYMBOL.V_LP_ETH_USDT,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: TOKEN_SYMBOL.V_LP_ETH_USDC,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: TOKEN_SYMBOL.V_LP_ETH_IPX,
  },
};

export const COIN_DECIMALS = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BTC]: 9,
    [COIN_TYPE[Network.DEVNET].ETH]: 9,
    [COIN_TYPE[Network.DEVNET].BNB]: 9,
    [COIN_TYPE[Network.DEVNET].USDT]: 9,
    [COIN_TYPE[Network.DEVNET].USDC]: 9,
    [COIN_TYPE[Network.DEVNET].SUI]: 9,
    [COIN_TYPE[Network.DEVNET].IPX]: 9,
    [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: 0,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: 0,
    [COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT]: 0,
  },
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BTC]: 9,
    [COIN_TYPE[Network.TESTNET].ETH]: 9,
    [COIN_TYPE[Network.TESTNET].BNB]: 9,
    [COIN_TYPE[Network.TESTNET].USDT]: 9,
    [COIN_TYPE[Network.TESTNET].USDC]: 9,
    [COIN_TYPE[Network.TESTNET].SUI]: 9,
    [COIN_TYPE[Network.TESTNET].IPX]: 9,
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: 0,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: 0,
    [COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT]: 0,
  },
};

export const COIN_SYMBOL = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.DEVNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.DEVNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.DEVNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.DEVNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.DEVNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.DEVNET].IPX]: TOKEN_SYMBOL.IPX,
    [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: TOKEN_SYMBOL.V_LP_SUI_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: TOKEN_SYMBOL.V_LP_BTC_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: TOKEN_SYMBOL.V_LP_BNB_ETH,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: TOKEN_SYMBOL.V_LP_ETH_USDT,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: TOKEN_SYMBOL.V_LP_ETH_USDC,
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: TOKEN_SYMBOL.V_LP_ETH_IPX,
    [COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT]: TOKEN_SYMBOL.S_LP_USDC_USDT,
  },
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.TESTNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.TESTNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.TESTNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.TESTNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.TESTNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.TESTNET].IPX]: TOKEN_SYMBOL.IPX,
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: TOKEN_SYMBOL.V_LP_SUI_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: TOKEN_SYMBOL.V_LP_BTC_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: TOKEN_SYMBOL.V_LP_BNB_ETH,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: TOKEN_SYMBOL.V_LP_ETH_USDT,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: TOKEN_SYMBOL.V_LP_ETH_USDC,
    [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: TOKEN_SYMBOL.V_LP_ETH_IPX,
    [COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT]: TOKEN_SYMBOL.S_LP_USDC_USDT,
  },
};

export const COIN_POOL = {
  [Network.DEVNET]: {
    V_LP_SUI_ETH:
      '0x6d4d98a7ed723194a2d83f3cf933de84eb013efe7457e07bf2eed8583f61b5e6',
    V_LP_BTC_ETH:
      '0x6024a66bc7dd21a547f82ebe743aeaa56565331d4e5d9b2aef39a604fbe18bcd',
    V_LP_BNB_ETH:
      '0x19ab8a7282b8ff94fcac52ee627e040b61126317e8722dac792eea59d3c01a21',
    V_LP_ETH_USDT:
      '0xae59f453e9043cd79f73a44ad047df33bae371563e2f062d55c9d3070e62f631',
    V_LP_ETH_USDC:
      '0x393190ac2f650f1ca25d2ce7202aaa2fe4bc6403c3b6fb3bf14ad123e8bef75f',
    V_LP_ETH_IPX:
      '0xde700f941c6690c0ab59e5cbb03a92959d3a7286247ba58d9d3d661df60d098c',
    S_LP_USDC_USDT:
      '0x476b66b018f1a91a7ec8022eab10a821e935adbf0ecde579bda95685648474a5',
  },
  [Network.TESTNET]: {
    V_LP_SUI_ETH:
      '0x7de1065e4a2017837aad11a32e4bc1765504cc2b7ba19a5e5939d5892c9d3242',
    V_LP_BTC_ETH:
      '0xbb06523ee69b243a1298a8de02d8e26d9cfed3575641ead842c35379c0fa361e',
    V_LP_BNB_ETH:
      '0xe5376c546a03d2ff9f703f50da58446b166cba4b1b17608eda7912f7bc43a7d9',
    V_LP_ETH_USDT:
      '0x27989fd07935cad9ff835729e9695d5fb42a0809983bf912962125a6f6e3a788',
    V_LP_ETH_USDC:
      '0xb4042410d89c52823cf8decfd6a30b7aa50fa0fd13bcf28b39c192136676f2ed',
    V_LP_ETH_IPX:
      '0x58fe704c74abf7126fd63ca8839a9831d2f359947632d9a3a19cf5e2586e3010',
    S_LP_USDC_USDT:
      '0x7749a1903fecd7c2566edc3475c98a7621832eef464a95ba783bdf7de203c5e6',
  },
};

export const COIN_FARM = {
  [Network.DEVNET]: {
    ETH_IPX:
      '0xc353562d925bd92012ed7a36d129eac1b960fb35245c25853ed2aa1bada30896',
    ETH_USDC:
      '0x71c62d671e6dfaab27f23561890e602ef049bb2bedc08c0543204fba457cd9dc',
    BTC_ETH:
      '0x1835d45b63ad83e92d0eb263554534dfb391928b9fd74f1efd7522534da4fbf7',
    ETH_USDT:
      '0xcf33c2d61a67badc3e6083cc56ba1146b8274e88b4580170bb03d56049d1ad57',
    BNB_ETH:
      '0xee440b34d0ff9a12e33304d5ed0b1a1905cfc64b28e736aeb15224abb2cd2578',
    SUI_ETH:
      '0x7ef3348dc7788cd5ced507c0311abb3290886061a53cc3e351a076b04bf71d57',
    IPX: '0xf3cec53b57c9db122de441b7c5f9b1ce08e0cfaac0b755a9e6b4c0624cd198ee',
    S_LP_USDC_USDT:
      '0xad757d38e448759a5a0ade149e4e0e9590d0d1c38c24318c3e58014218dc383a',
  },
  [Network.TESTNET]: {
    ETH_IPX:
      '0x109a9fd9942e2a24f6b0c606437a141677209bd44be882a7815e94bb687c1485',
    ETH_USDC:
      '0x9cfca79f7b75c61b1e3ba305c5f59aae9f6bd1915eb50f8fd1f3cdad5eb784ff',
    BTC_ETH:
      '0x122ee4d07a031fc897b0a4f729e5bc2c12078c6be67fac649aa060164b7a8167',
    ETH_USDT:
      '0x219e8649b65a939ac58a0a3008db0af757f01283d1231e0a52ea19077fb483c1',
    BNB_ETH:
      '0x8148761f130500c8d36d6500701f203fa0f7f0acaf5a2492f07c2733b725363e',
    SUI_ETH:
      '0x7dd3dceae8565ce00632460ecf146504b7a957c460b01b489daefe556a9c44a9',
    IPX: '0xf24d5681cbb120bcd51d1d7dfef0d645b977c6e91a44891652aab66884d8f6cf',
    S_LP_USDC_USDT:
      '0xd27ce4448cabb437c176e4661baefc39166c9c97a28f32d0c738e7e91e95e32b',
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
    V_LP_ETH_IPX: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX],
      symbol: TOKEN_SYMBOL.V_LP_ETH_IPX,
      type: COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX,
    },
    S_LP_USDC_USDT: {
      decimals:
        COIN_DECIMALS[Network.DEVNET][COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT],
      symbol: TOKEN_SYMBOL.S_LP_USDC_USDT,
      type: COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT,
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
    V_LP_ETH_IPX: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX],
      symbol: TOKEN_SYMBOL.V_LP_ETH_IPX,
      type: COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX,
    },
    S_LP_USDC_USDT: {
      decimals:
        COIN_DECIMALS[Network.TESTNET][
          COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT
        ],
      symbol: TOKEN_SYMBOL.S_LP_USDC_USDT,
      type: COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT,
    },
  },
};

export const COIN_TYPE_TO_COIN = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].ETH]: COINS[Network.DEVNET].ETH,
    [COIN_TYPE[Network.DEVNET].BTC]: COINS[Network.DEVNET].BTC,
    [COIN_TYPE[Network.DEVNET].BNB]: COINS[Network.DEVNET].BNB,
    [COIN_TYPE[Network.DEVNET].SUI]: COINS[Network.DEVNET].SUI,
    [COIN_TYPE[Network.DEVNET].USDC]: COINS[Network.DEVNET].USDC,
    [COIN_TYPE[Network.DEVNET].USDT]: COINS[Network.DEVNET].USDT,
    [COIN_TYPE[Network.DEVNET].IPX]: COINS[Network.DEVNET].IPX,
  },
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].ETH]: COINS[Network.TESTNET].ETH,
    [COIN_TYPE[Network.TESTNET].BTC]: COINS[Network.TESTNET].BTC,
    [COIN_TYPE[Network.TESTNET].BNB]: COINS[Network.TESTNET].BNB,
    [COIN_TYPE[Network.TESTNET].SUI]: COINS[Network.TESTNET].SUI,
    [COIN_TYPE[Network.TESTNET].USDC]: COINS[Network.TESTNET].USDC,
    [COIN_TYPE[Network.TESTNET].USDT]: COINS[Network.TESTNET].USDT,
    [COIN_TYPE[Network.TESTNET].IPX]: COINS[Network.TESTNET].IPX,
  },
};
