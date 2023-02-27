import { Network } from '@mysten/sui.js';

import { COIN_FARM, COIN_POOL, COINS } from './coins';

export const IPX_STORAGE = '0xb47460464e458be62aeeab27d2d132b295d46ffe';

export const IPX_ACCOUNT_STORAGE = '0x35a08d9275134b7d57e8ee205ef17ca2a926ec2f';

export const FARMS_RECORD = {
  [Network.DEVNET]: {
    [COIN_FARM[Network.DEVNET].IPX]: {
      objectId: COIN_FARM[Network.DEVNET].IPX,
      poolObjectId: COIN_FARM[Network.DEVNET].IPX,
      lpCoin: COINS[Network.DEVNET].IPX,
      coin0: COINS[Network.DEVNET].IPX,
      coin1: COINS[Network.DEVNET].IPX,
      isSingleCoin: true,
      id: 0,
      isLive: true,
      stable: false,
    },
    [COIN_FARM[Network.DEVNET].V_LP_SUI_ETH]: {
      objectId: COIN_FARM[Network.DEVNET].V_LP_SUI_ETH,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_SUI_ETH,
      lpCoin: COINS[Network.DEVNET].V_LP_SUI_ETH,
      coin0: COINS[Network.DEVNET].SUI,
      coin1: COINS[Network.DEVNET].ETH,
      isSingleCoin: false,
      id: 1,
      isLive: true,
      stable: false,
    },
    [COIN_FARM[Network.DEVNET].V_LP_ETH_IPX]: {
      objectId: COIN_FARM[Network.DEVNET].V_LP_ETH_IPX,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_IPX,
      lpCoin: COINS[Network.DEVNET].V_LP_ETH_IPX,
      coin0: COINS[Network.DEVNET].ETH,
      coin1: COINS[Network.DEVNET].IPX,
      isSingleCoin: false,
      id: 2,
      isLive: true,
      stable: false,
    },
    [COIN_FARM[Network.DEVNET].V_LP_BTC_ETH]: {
      objectId: COIN_FARM[Network.DEVNET].V_LP_BTC_ETH,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BTC_ETH,
      lpCoin: COINS[Network.DEVNET].V_LP_BTC_ETH,
      coin0: COINS[Network.DEVNET].BTC,
      coin1: COINS[Network.DEVNET].ETH,
      isSingleCoin: false,
      id: 3,
      isLive: true,
      stable: false,
    },
    [COIN_FARM[Network.DEVNET].V_LP_BNB_ETH]: {
      objectId: COIN_FARM[Network.DEVNET].V_LP_BNB_ETH,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BNB_ETH,
      lpCoin: COINS[Network.DEVNET].V_LP_BNB_ETH,
      coin0: COINS[Network.DEVNET].BNB,
      coin1: COINS[Network.DEVNET].ETH,
      isSingleCoin: false,
      id: 4,
      isLive: true,
      stable: false,
    },
    [COIN_FARM[Network.DEVNET].V_LP_ETH_USDT]: {
      objectId: COIN_FARM[Network.DEVNET].V_LP_ETH_USDT,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDT,
      lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDT,
      coin0: COINS[Network.DEVNET].ETH,
      coin1: COINS[Network.DEVNET].USDT,
      isSingleCoin: false,
      id: 5,
      isLive: true,
      stable: false,
    },
    [COIN_FARM[Network.DEVNET].V_LP_ETH_USDC]: {
      objectId: COIN_FARM[Network.DEVNET].V_LP_ETH_USDC,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDC,
      lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDC,
      coin0: COINS[Network.DEVNET].ETH,
      coin1: COINS[Network.DEVNET].USDC,
      isSingleCoin: false,
      id: 6,
      isLive: true,
      stable: false,
    },
    [COIN_FARM[Network.DEVNET].V_LP_DAI_ETH]: {
      objectId: COIN_FARM[Network.DEVNET].V_LP_DAI_ETH,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_DAI_ETH,
      lpCoin: COINS[Network.DEVNET].V_LP_DAI_ETH,
      coin0: COINS[Network.DEVNET].DAI,
      coin1: COINS[Network.DEVNET].ETH,
      isSingleCoin: false,
      id: 7,
      isLive: true,
      stable: false,
    },
  },
};

export const FARMS = [
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].IPX],
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].V_LP_SUI_ETH],
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].V_LP_ETH_IPX],
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].V_LP_BTC_ETH],
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].V_LP_BNB_ETH],
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].V_LP_ETH_USDT],
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].V_LP_ETH_USDC],
  FARMS_RECORD[Network.DEVNET][COIN_FARM[Network.DEVNET].V_LP_DAI_ETH],
];

export type FarmMetadataType = typeof FARMS[number];
