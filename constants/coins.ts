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
  [Network.MAINNET]: `${
    OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
  }::curve::Volatile`,
};

export const STABLE = {
  [Network.DEVNET]: `${
    OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
  }::curve::Stable`,
  [Network.TESTNET]: `${
    OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
  }::curve::Stable`,
  [Network.MAINNET]: `${
    OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
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

const MAINNET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  WORMHOLE_USDC:
    '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN',
  WORMHOLE_ETH:
    '0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN',
  WORMHOLE_USDT:
    '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN',
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
  [Network.MAINNET]: {
    ...MAINNET_BASE_COINS,
    S_LP_WORMHOLE_USDC_WORMHOLE_USDT: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.MAINNET]}, ${
      MAINNET_BASE_COINS.WORMHOLE_USDC
    }, ${MAINNET_BASE_COINS.WORMHOLE_USDT}>`,
    V_LP_SUI_WORMHOLE_ETH: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.WORMHOLE_ETH
    }>`,
    V_LP_SUI_WORMHOLE_USDT: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.WORMHOLE_USDT
    }>`,
    V_LP_SUI_WORMHOLE_USDC: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.WORMHOLE_USDC
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
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: false,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_ETH]: false,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDC]: true,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDT]: true,
    [COIN_TYPE[Network.MAINNET].S_LP_WORMHOLE_USDC_WORMHOLE_USDT]: true,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_ETH]: false,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDC]: false,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDT]: false,
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
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_ETH]: TOKEN_SYMBOL.WORMHOLE_ETH,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDC]: TOKEN_SYMBOL.WORMHOLE_USDC,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDT]: TOKEN_SYMBOL.WORMHOLE_USDT,
    [COIN_TYPE[Network.MAINNET].S_LP_WORMHOLE_USDC_WORMHOLE_USDT]:
      TOKEN_SYMBOL.S_LP_WORMHOLE_USDC_WORMHOLE_USDT,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_ETH]:
      TOKEN_SYMBOL.V_LP_SUI_WORMHOLE_ETH,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDC]:
      TOKEN_SYMBOL.V_LP_SUI_WORMHOLE_USDC,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDT]:
      TOKEN_SYMBOL.V_LP_SUI_WORMHOLE_USDT,
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
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: 9,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_ETH]: 8,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDC]: 6,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDT]: 6,
    [COIN_TYPE[Network.MAINNET].S_LP_WORMHOLE_USDC_WORMHOLE_USDT]: 0,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_ETH]: 0,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDC]: 0,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDT]: 0,
  },
};

export const COIN_POOL = {
  [Network.DEVNET]: {
    V_LP_SUI_ETH:
      '0xd99a3eaade6f12e811e8ae21d2ecbab5d5c18e85614abac411fe2222940ba33d',
    V_LP_BTC_ETH:
      '0xb8daa9ff7c4c52cd07d171b95655d8dca7ede030424b9edca3093fcdcf3df3dd',
    V_LP_BNB_ETH:
      '0xfdaefef4aca6285bf15f3acb0ba10d2efdf2933d273db98648c564b5f9ea7257',
    V_LP_ETH_USDT:
      '0x02e256e29c0587d2faae74030bdf714ad0e874e2a0a1ab11dae6874b716bde9d',
    V_LP_ETH_USDC:
      '0x5485e84ca4d245d559c8a994dc578c47d90da55601137d0b7da998fe6c81c763',
    V_LP_ETH_IPX:
      '0xc72e4a6f1a31b55986a426b46251f48a459d28f30da257fa9b8d5f83f42b700a',
    S_LP_USDC_USDT:
      '0xb49d8b646d46ac51ba8b18a46f1f46ba21a9ea0a9504f0c973764f12e780bc14',
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
  [Network.MAINNET]: {
    S_LP_WORMHOLE_USDC_WORMHOLE_USDT:
      '0x9b7ef251c98bf6990f70f45bfd012de5308483ae2fa0d8e39f559323baacf9ca',
    V_LP_SUI_WORMHOLE_ETH:
      '0x8f41de61cdc1ee379cadd7889dd588fcab62552e48959d027ba1d8839c027771',
    V_LP_SUI_WORMHOLE_USDT:
      '0x9fc77859750974b84b931d79acfc7116abde230b5dd2bb164331819561b90771',
    V_LP_SUI_WORMHOLE_USDC:
      '0x85e87655a47628098b5fc2e62d4926c6384e0430f2eae60cf9c692562b688702',
  },
};

export const COIN_FARM = {
  [Network.DEVNET]: {
    ETH_IPX:
      '0x7994751e1b1e9c20bc8616ebc643784012795a57948e087f04277bf4829b5a4c',
    ETH_USDC:
      '0x288cfce7500ed8c6fdc1a31252a007f34f4db152d773656752f61a4ef3d84197',
    BTC_ETH:
      '0x745612de356f8bddbc7264ecba559d5d31ba94e0de0802c09f74a09259d7636a',
    ETH_USDT:
      '0xc66509bafa31dc6212caee6676c2c9856eb9fcc061a1deabb4b543f6cb79c309',
    BNB_ETH:
      '0xafe6161be847b636ff9c85349ef793df89ff9e53599c43d14e95681d030017f5',
    SUI_ETH:
      '0x36312703e4253e5865bd9c283d231c1bce19578bc46bde8faaf47db2d72b2f1b',
    IPX: '0xcdfa34955ebaa2f93f61c7deb6005ebaec54471a0d169758c4ce2410ca510d33',
    S_LP_USDC_USDT:
      '0x07b148f1eba6b41f0847649e9bb785dbf94dfde51304f20f75e1f86859d9ae86',
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
  [Network.MAINNET]: {},
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
  [Network.MAINNET]: {
    SUI: {
      decimals: COIN_DECIMALS[Network.MAINNET][COIN_TYPE[Network.MAINNET].SUI],
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.MAINNET].SUI,
    },
    WORMHOLE_ETH: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][COIN_TYPE[Network.MAINNET].WORMHOLE_ETH],
      symbol: TOKEN_SYMBOL.WORMHOLE_ETH,
      type: COIN_TYPE[Network.MAINNET].WORMHOLE_ETH,
    },
    WORMHOLE_USDC: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].WORMHOLE_USDC
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_USDC,
      type: COIN_TYPE[Network.MAINNET].WORMHOLE_USDC,
    },
    WORMHOLE_USDT: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].WORMHOLE_USDT
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_USDT,
      type: COIN_TYPE[Network.MAINNET].WORMHOLE_USDT,
    },
    S_LP_WORMHOLE_USDC_WORMHOLE_USDT: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].S_LP_WORMHOLE_USDC_WORMHOLE_USDT
        ],
      symbol: TOKEN_SYMBOL.S_LP_WORMHOLE_USDC_WORMHOLE_USDT,
      type: COIN_TYPE[Network.MAINNET].S_LP_WORMHOLE_USDC_WORMHOLE_USDT,
    },
    V_LP_SUI_WORMHOLE_ETH: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_ETH
        ],
      symbol: TOKEN_SYMBOL.V_LP_SUI_WORMHOLE_ETH,
      type: COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_ETH,
    },
    V_LP_SUI_WORMHOLE_USDT: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDT
        ],
      symbol: TOKEN_SYMBOL.V_LP_SUI_WORMHOLE_USDT,
      type: COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDT,
    },
    V_LP_SUI_WORMHOLE_USDC: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDC
        ],
      symbol: TOKEN_SYMBOL.V_LP_SUI_WORMHOLE_USDC,
      type: COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDC,
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
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: COINS[Network.MAINNET].SUI,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_ETH]:
      COINS[Network.MAINNET].WORMHOLE_ETH,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDT]:
      COINS[Network.MAINNET].WORMHOLE_USDT,
    [COIN_TYPE[Network.MAINNET].WORMHOLE_USDC]:
      COINS[Network.MAINNET].WORMHOLE_USDC,
    [COIN_TYPE[Network.MAINNET].S_LP_WORMHOLE_USDC_WORMHOLE_USDT]:
      COINS[Network.MAINNET].S_LP_WORMHOLE_USDC_WORMHOLE_USDT,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_ETH]:
      COINS[Network.MAINNET].V_LP_SUI_WORMHOLE_ETH,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDC]:
      COINS[Network.MAINNET].V_LP_SUI_WORMHOLE_USDC,
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_WORMHOLE_USDT]:
      COINS[Network.MAINNET].V_LP_SUI_WORMHOLE_USDT,
  },
};
