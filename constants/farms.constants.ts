import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';

import { COIN_POOL, COINS, FarmMetadataType } from '@/constants/index';

export const COIN_FARM = {
  [Network.DEVNET]: {},
  [Network.TESTNET]: {
    V_LP_SUI_ETH:
      '0x13daa9b828a33a269d8fdec07e39b8a8f56bffba37a49297ad59c440ca7e845f',
    V_LP_BNB_ETH:
      '0x88939f6a96904682f23c4a81c769d17ad86cd73e737641ebfc826cfb18c5dc85',
  },
  [Network.MAINNET]: {},
};

export const OBJECT_RECORD = {
  [Network.DEVNET]: {
    PACKAGE_ID:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AIPX_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AMASTER_CHEF_ACCOUNT_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AMASTER_CHEF_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  [Network.TESTNET]: {
    PACKAGE_ID:
      '0xa183e0bb0f2d938be732ccc16709e415ea932f08b8d722d36fe529da2bbd61ea',
    AIPX_STORAGE:
      '0x1d8c1627e3a4261aca36f6e4f2715be063fd5eb3ee39900a29cf2033947530fe',
    AMASTER_CHEF_ACCOUNT_STORAGE:
      '0x60c555c9058278ad90444d38f9283bdcd169b8e779c5fea33f39652f2a2e261f',
    AMASTER_CHEF_STORAGE:
      '0x72d4ab7f8f2a62e2724a48e7dc3aa9909113c5aef2ea47c2e25737639ef5397d',
  },
  [Network.MAINNET]: {
    PACKAGE_ID:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AIPX_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AMASTER_CHEF_ACCOUNT_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AMASTER_CHEF_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
};

export const COIN_PRICES = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    COINS[Network.TESTNET].ETH.type,
    COINS[Network.TESTNET].BNB.type,
    COINS[Network.TESTNET].SUI.type,
  ],
  [Network.MAINNET]: [],
};

// The order has to remain the same

export const POOL_IDS_RECORD = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    COIN_POOL[Network.TESTNET].V_LP_SUI_ETH,
    COIN_POOL[Network.TESTNET].V_LP_BNB_ETH,
  ],
  [Network.MAINNET]: [],
};

export const FARM_IDS_RECORD_FIRST_CALL = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    {
      number: 2,
      data: [
        COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
        COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
        COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
      ],
    },
  ],
  [Network.MAINNET]: [],
};

export const COIN_TYPE_ARRAY_UI = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
  ],
  [Network.MAINNET]: [],
};

export const FARMS_RECORD: Record<Network, Record<string, FarmMetadataType>> = {
  [Network.DEVNET]: {},
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: {
      farmType: COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
      farmObjectId: COIN_FARM[Network.TESTNET].V_LP_SUI_ETH,
      poolObjectId: COIN_POOL[Network.TESTNET].V_LP_SUI_ETH,
      lpCoin: COINS[Network.TESTNET].V_LP_SUI_ETH,
      coin0: COINS[Network.TESTNET].SUI,
      coin1: COINS[Network.TESTNET].ETH,
      isSingleCoin: false,
      id: 0,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: {
      farmType: COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
      farmObjectId: COIN_FARM[Network.TESTNET].V_LP_BNB_ETH,
      poolObjectId: COIN_POOL[Network.TESTNET].V_LP_BNB_ETH,
      lpCoin: COINS[Network.TESTNET].V_LP_BNB_ETH,
      coin0: COINS[Network.TESTNET].BNB,
      coin1: COINS[Network.TESTNET].ETH,
      isSingleCoin: false,
      id: 1,
      isLive: true,
      stable: false,
    },
  },
  // TODO deploy mainnet Farms
  [Network.MAINNET]: {},
};
