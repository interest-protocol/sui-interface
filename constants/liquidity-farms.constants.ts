import { COIN_TYPE, Network } from '@interest-protocol/sui-amm-sdk';

import { COIN_POOL, COINS, FarmMetadataType } from '@/constants/index';

export const COIN_FARM = {
  [Network.DEVNET]: {},
  [Network.TESTNET]: {},
  [Network.MAINNET]: {
    V_LP_SUI_NATIVE_WORMHOLE_ETH:
      '0x4b0483c97f7a5bf85e026ef55a2fd75859d81d74f27df4b2f8696a591e4718ba',
    V_LP_SUI_ETH_WORMHOLE_USDC:
      '0x95b6ab7a4f74db4d3aeebb589bab4f47e8b2b241a037cba2e84a9f9728f25f17',
    V_LP_SUI_NATIVE_WORMHOLE_WBNB:
      '0x4e6b80386545fc921ab46867ae6cc5cca75ef41e4ada688c37a732eb30ba1183',
    V_LP_SUI_BSC_WORMHOLE_BTCB:
      '0xde1b4be069cf366561b65f065da0bb83cb51f4bb338dafb73eaac069c80e27c7',
    S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC:
      '0x114e8b4aaac06357f61e12e36fa7c36e577d72f5dedeb97821903208afc62736',
    V_LP_SUI_BSC_WORMHOLE_USDC:
      '0xc612a75fad72933bfb92663e4529d28be9384704da41ca79fe327f9b1b72a426',
    S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC:
      '0x1406edfe0fae4ca8366d0a45d69afcf6d1351e79bc14b088cb1bc738f699d237',
    V_LP_SUI_BSC_WORMHOLE_FLOKI:
      '0xdda17d50c3de544f90d98a1f701bfed7e8253fc0ad3689a77f3501332ea72570',
    V_LP_SUI_BSC_WORMHOLE_DOGE:
      '0xadbbad101f598649937b0f18aced1bdf7e2cf544d277e838abd5e2a8c441807a',
    V_LP_SUI_BSC_WORMHOLE_ETH:
      '0x4e633d8f9a34f7789b9be2845a1a42410d2dbb0d8162bc4a1835367bf179ac5d',
    V_LP_SUI_NATIVE_WORMHOLE_SOL:
      '0xd4bf01215ea0822a0b894fba9487c2971d582da9e27b8618a6bb17384424335e',
    S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT:
      '0x374e60f1e8f9e8161ffdefcf805c08526f88260315e70c3cb80267e5b5c232cc',
  },
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
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AIPX_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AMASTER_CHEF_ACCOUNT_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    AMASTER_CHEF_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  [Network.MAINNET]: {
    PACKAGE_ID:
      '0xdd337a572de87a228cf4f7b5b7cb30313cad7506ac5cea396258e22e67c6179f',
    AIPX_STORAGE:
      '0x65bd5b9c8bc4184e04df62d61cec59c2064508370b1d702d80ff66d7fe3069e9',
    AMASTER_CHEF_ACCOUNT_STORAGE:
      '0x8235246cb60cabecdcf3f3f333c5cb178f3066ec9fd5b49c6090be5a481102c9',
    AMASTER_CHEF_STORAGE:
      '0xa20cd4b10b1b006e9a10e62b84cefb8f26ca58b44e7150271da4029a4e7530f5',
  },
};

export const COIN_PRICES = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    COINS[Network.MAINNET].ETH_WORMHOLE_USDT.type,
    COINS[Network.MAINNET].ETH_WORMHOLE_USDC.type,
    COINS[Network.MAINNET].BSC_WORMHOLE_USDT.type,
    COINS[Network.MAINNET].BSC_WORMHOLE_USDC.type,
    COINS[Network.MAINNET].SUI.type,
  ],
};

// The order has to remain the same

export const POOL_IDS_RECORD = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
    COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
    COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
    COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
    COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
    COIN_POOL[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
    COIN_POOL[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
    COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
    COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL,
    COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
    COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
    COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
  ],
};

export const FARM_IDS_RECORD_FIRST_CALL = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    {
      number: 3,
      data: [
        COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
        COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
        COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
      ],
    },
    {
      number: 3,
      data: [
        COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
        COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
        COIN_TYPE[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
      ],
    },
    {
      number: 3,
      data: [
        COIN_TYPE[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
        COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
        COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL,
      ],
    },
    {
      number: 3,
      data: [
        COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
        COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
        COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
      ],
    },
  ],
};

export const COIN_TYPE_ARRAY_UI = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
    COIN_TYPE[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
    COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
    COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
    COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
  ],
};

export const FARMS_RECORD: Record<Network, Record<string, FarmMetadataType>> = {
  [Network.DEVNET]: {},
  [Network.TESTNET]: {},
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].BSC_WORMHOLE_BTCB,
      isSingleCoin: false,
      id: 0,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].BSC_WORMHOLE_ETH,
      isSingleCoin: false,
      id: 1,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].NATIVE_WORMHOLE_ETH,
      isSingleCoin: false,
      id: 2,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].NATIVE_WORMHOLE_WBNB,
      isSingleCoin: false,
      id: 3,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].BSC_WORMHOLE_USDC,
      isSingleCoin: false,
      id: 4,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].ETH_WORMHOLE_USDC,
      isSingleCoin: false,
      id: 5,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC]: {
      farmType:
        COIN_TYPE[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
      farmObjectId:
        COIN_FARM[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
      poolObjectId:
        COIN_POOL[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
      lpCoin: COINS[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
      coin0: COINS[Network.MAINNET].BSC_WORMHOLE_USDT,
      coin1: COINS[Network.MAINNET].BSC_WORMHOLE_USDC,
      isSingleCoin: false,
      id: 6,
      isLive: true,
      stable: true,
    },
    [COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC]: {
      farmType:
        COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
      farmObjectId:
        COIN_FARM[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
      poolObjectId:
        COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
      lpCoin: COINS[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
      coin0: COINS[Network.MAINNET].ETH_WORMHOLE_USDC,
      coin1: COINS[Network.MAINNET].BSC_WORMHOLE_USDC,
      isSingleCoin: false,
      id: 7,
      isLive: true,
      stable: true,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].BSC_WORMHOLE_DOGE,
      isSingleCoin: false,
      id: 8,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].BSC_WORMHOLE_FLOKI,
      isSingleCoin: false,
      id: 9,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL]: {
      farmType: COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL,
      farmObjectId: COIN_FARM[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL,
      poolObjectId: COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL,
      lpCoin: COINS[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_SOL,
      coin0: COINS[Network.MAINNET].SUI,
      coin1: COINS[Network.MAINNET].NATIVE_WORMHOLE_SOL,
      isSingleCoin: false,
      id: 10,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT]: {
      farmType:
        COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
      farmObjectId:
        COIN_FARM[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
      poolObjectId:
        COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
      lpCoin: COINS[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
      coin0: COINS[Network.MAINNET].ETH_WORMHOLE_USDC,
      coin1: COINS[Network.MAINNET].ETH_WORMHOLE_USDT,
      isSingleCoin: false,
      id: 11,
      isLive: true,
      stable: true,
    },
  },
};
