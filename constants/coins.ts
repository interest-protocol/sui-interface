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
      DEV_NET_BASE_COINS.USDT
    }>`,
  },
  [Network.TESTNET]: {
    ...TESTNET_NET_BASE_COINS,
    V_LP_SUI_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.SUI
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    V_LP_BTC_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.BTC
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    V_LP_BNB_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.BNB
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    V_LP_ETH_USDT: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.ETH
    }, ${TESTNET_NET_BASE_COINS.USDT}>`,
    V_LP_ETH_USDC: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.ETH
    }, ${TESTNET_NET_BASE_COINS.USDC}>`,
    V_LP_ETH_IPX: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.IPX
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    S_LP_USDC_USDT: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.USDC
    }, ${TESTNET_NET_BASE_COINS.USDT}>`,
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
      '0x1bb5d38d666337556748d3d32d38148c944e546ff957b8681bb714b46980a2b6',
    V_LP_BTC_ETH:
      '0xe13cf939f077bc7a3c010fc29fe360c4b1eea93dace4a4fcf9c3db0bf53aa9ea',
    V_LP_BNB_ETH:
      '0x652eebcd05fb44b89148246957f8072a64817f7c88296fffb082f6e62d8d125e',
    V_LP_ETH_USDT:
      '0x15a2fbd76841d3fb0779baf4ea01f83acd6b546b7c229196041468f273eba065',
    V_LP_ETH_USDC:
      '0x0a0c3cefe37372bcdb6b03c8e6c03a6842aeb6ef123472033aafe65e311d2ee0',
    V_LP_ETH_IPX:
      '0x198699d22508dcb997fd844f1406b1883ebe92655b03d5be6dd4345a386f2443',
    S_LP_USDC_USDT:
      '0xeef837308de57a6cfe264e2dbac3bc282978146042f02237fff4de6481edf9a5',
  },
  [Network.TESTNET]: {
    V_LP_SUI_ETH:
      '0x6d4ed8b403436010d5dc9f3ad41641d9597b80a1db43315cb35dd97198e9f1ea',
    V_LP_BTC_ETH:
      '0x5c9448416f4b9e3ac364df8762bec197759cff475a1aad7d958ca09f8d200ccf',
    V_LP_BNB_ETH:
      '0xc56ff6d797dc782c6a9d05a50c107182a05caacc6274fc9e38f2d998d84c0281',
    V_LP_ETH_USDT:
      '0xc9b63e7ee0169d801c7af337be86c06e73140c08ac8591b9d8322447e21a41f3',
    V_LP_ETH_USDC:
      '0x2a02ad747af597ac80e2979f2f126b2665277102ea301024e6687df898e2e320',
    V_LP_ETH_IPX:
      '0xa13ecd207a147b2a70d59e322b9a862474d8ed17f7f9d3e0fbc2364f4c5036ff',
    S_LP_USDC_USDT:
      '0xb65c0ec308595966ad7d9df5ba9f2fc919af76d75fcd043b07dcdf0e0084ab9b',
  },
};

export const COIN_FARM = {
  [Network.DEVNET]: {
    ETH_IPX:
      '0x884a15cfb9a81492451f5e6322333a52d45ac5af79460cd40e4113050783a1aa',
    ETH_USDC:
      '0x23f9df9397fa27ab26f28c0de2b42ad2b211a96770dcefafb38f21fc2cb85225',
    BTC_ETH:
      '0x2393a8147e884d9f2460f413f42b57da18228e4f9bf2528d3751031e63413b4f',
    ETH_USDT:
      '0x68d1294287de7c19af16b4954cef2bb4852c077f39456d49b5c713b512d557f4',
    BNB_ETH:
      '0x605f3f2700520fd16d10b32e916dcf5c9bf0c33a6748e5d8720437b8891cd3ba',
    SUI_ETH:
      '0x28fb32f13c9be2460027b473810b71f8a54ef63aab1d54d66b5a037b4c3244ed',
    IPX: '0xa36015dc4132ccdce02c910356ca3f7cf7f0bee8131172859f64068581d0b546',
    S_LP_USDC_USDT:
      '0xe5b4f1672efc8a9927c909032f765c39f8f52c89e063f9fab319546fba8aa27e',
  },
  [Network.TESTNET]: {
    ETH_IPX:
      '0x9c2ec47cc13e4e8e8f5bb49284fd2a60217a0c83c88f8512781032ffecbe75a7',
    ETH_USDC:
      '0xebb59945ff9ad2a63e454ea7b3afbb45b609b4104d6fc9d3bf97313f391fd833',
    BTC_ETH:
      '0xfec157cda49c766e8987d61c28846da601ccd8f74f18b7e64f25962233991d1b',
    ETH_USDT:
      '0xef26a0a016e935edb41937c28612277ef105fbdb21f84a16d483b1470e580702',
    BNB_ETH:
      '0x6d4f1ec2aab9ef1140b65d3bc6511f1360b6da9f608aad48f02e4dceefb52c0e',
    SUI_ETH:
      '0xe8df2dcd438d9cd064598fb5ef4e3f327ccc59534d2cca3e1a07b8961a42211f',
    IPX: '0xf7d854ec3aefe6d1f1f53340bed30116a9648e6ec7fa6011cfbf60fe05c9a16e',
    S_LP_USDC_USDT:
      '0x4119b550b6f340ee77d8b940d4c5eb488afaee0e49cf27df872bd0619e06087b',
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
