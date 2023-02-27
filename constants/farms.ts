import { Network } from '@mysten/sui.js';

import { COIN_FARM, COIN_POOL, COINS } from './coins';

export const IPX_STORAGE = '0xf20065bbecea0dc2fe86682972192c5333bb2f1c';

export const IPX_ACCOUNT_STORAGE = '0xe9dbfb8d57f04b39de26b1fe3fa3edfa98df7ce1';

export const FARMS = [
  {
    objectId: '0x6eec86d420895e2c5abfa90346b91f7dbd3fb083',
    poolObjectId: '0x6eec86d420895e2c5abfa90346b91f7dbd3fb083',
    lpCoin: COINS[Network.DEVNET].IPX,
    coin0: COINS[Network.DEVNET].IPX,
    coin1: COINS[Network.DEVNET].IPX,
    isSingleCoin: true,
    id: 0,
    isLive: true,
    stable: false,
  },
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

export type FarmType = typeof FARMS[number];
