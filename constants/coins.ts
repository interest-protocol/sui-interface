import { SUI_TYPE_ARG } from '@mysten/sui.js';
import { TOKEN_SYMBOL } from 'lib';

import { Network } from './network';
import { OBJECT_RECORD } from './objects';

export const VOLATILE = {
  [Network.DEVNET]: `${
    OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
  }::curve::VOLATILE`,
  [Network.TESTNET]: `${
    OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
  }::curve::VOLATILE`,
};

export const STABLE = {
  [Network.DEVNET]: `${
    OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
  }::curve::STABLE`,
  [Network.TESTNET]: `${
    OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
  }::curve::STABLE`,
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
      '0xc1d92466011f56957001cf9c4af150fc76b9fb46438d57d5031e1d4e84912e75',
    V_LP_BTC_ETH:
      '0xab2ef90a5be143517c50e1906bfa9485c4016cadf7486f40d2a9049d20761497',
    V_LP_BNB_ETH:
      '0xaceebd651309256ca371cfc9356d1daceed32ac466f14d7eccf62100b9148bc4',
    V_LP_ETH_USDT:
      '0x81013c277415ccbad602a6632f4f7e5971d4d406798dddfe63943b9e2f6da7c2',
    V_LP_ETH_USDC:
      '0x00103a5971e0f204ceedc6acc0072124c64979c886c02308c951d6074088d504',
    V_LP_ETH_IPX:
      '0xcb98ca44a26bb1840076aa9c09f714152273673417933bb099538bd1eed34af6',
    S_LP_USDC_USDT:
      '0x479657ac4f90364789d2ef2302a5c42cf282bb76456548741c1ae89d9ba1fb0b',
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
      '0x3721fbdd5165d65cc967d9008413e152308bca0b248530d159e84a7a00f175f0',
    DAI_ETH:
      '0x5fd483ccf133a48d5c70f405aaddf6628bf7400f6f2dc177f27c960b33084a04',
    ETH_USDC:
      '0xf862435fc53ca2fb578290f0eeb2b4a8cad9cb49a9570a230ecb5184878b313b',
    BTC_ETH:
      '0x631043845a745e30e7a148790382694b72fe58a434d2e91cd78fff3926d0ea62',
    ETH_USDT:
      '0x8f2fe4d03c66ef7c23667e1dde0d43f139e7db2b21ff2594abdfa370e12256e7',
    BNB_ETH:
      '0x62b41e1c028cbff60fdc576f84674fcee83564ce0d8f996da77e0a9daf9d2b22',
    SUI_ETH:
      '0x027f204419770afd9be71240ffda215df9447572375205ae4eec632e8e99f6b6',
    IPX: '0xb51cf7511860fd6ac19b3c0f3da2417c7e60cd8b943fee3242142d198e07132b',
    S_LP_USDC_USDT:
      '0x3615e3c420b1059e27b0e97cc6d07a01a3eb9b773cf1c03799eb72d915cf6859',
  },
  [Network.TESTNET]: {
    ETH_IPX:
      '0x109a9fd9942e2a24f6b0c606437a141677209bd44be882a7815e94bb687c1485',
    DAI_ETH:
      '0xe412762285e358df1393afe82dac92dcd95b2fbd46d79444af6fe02cb132c04a',
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
