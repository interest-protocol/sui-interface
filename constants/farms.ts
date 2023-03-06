import { Network } from '@mysten/sui.js';

import { CoinData } from '@/interface';

import { COIN_POOL, COIN_TYPE, COINS } from './coins';

export const IPX_STORAGE = '0x289f1b6f796ece24d8ed04201e7e70be75085b39';

export const IPX_ACCOUNT_STORAGE = '0xaab033281398c2c82626422f7efa545f1a929550';

export const FARMS_PACKAGE_ID = '0x1fde943fefb14e1ff8ebe8047b978f5205008d1a';

export const FARMS_RECORD = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].IPX]: {
      farmType: COIN_TYPE[Network.DEVNET].IPX,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_IPX,
      lpCoin: COINS[Network.DEVNET].IPX,
      coin0: COINS[Network.DEVNET].ETH,
      coin1: COINS[Network.DEVNET].IPX,
      isSingleCoin: true,
      id: 0,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: {
      farmType: COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_SUI_ETH,
      lpCoin: COINS[Network.DEVNET].V_LP_SUI_ETH,
      coin0: COINS[Network.DEVNET].SUI,
      coin1: COINS[Network.DEVNET].ETH,
      isSingleCoin: false,
      id: 1,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: {
      farmType: COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_IPX,
      lpCoin: COINS[Network.DEVNET].V_LP_ETH_IPX,
      coin0: COINS[Network.DEVNET].ETH,
      coin1: COINS[Network.DEVNET].IPX,
      isSingleCoin: false,
      id: 2,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: {
      farmType: COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BTC_ETH,
      lpCoin: COINS[Network.DEVNET].V_LP_BTC_ETH,
      coin0: COINS[Network.DEVNET].BTC,
      coin1: COINS[Network.DEVNET].ETH,
      isSingleCoin: false,
      id: 3,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: {
      farmType: COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BNB_ETH,
      lpCoin: COINS[Network.DEVNET].V_LP_BNB_ETH,
      coin0: COINS[Network.DEVNET].BNB,
      coin1: COINS[Network.DEVNET].ETH,
      isSingleCoin: false,
      id: 4,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: {
      farmType: COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDT,
      lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDT,
      coin0: COINS[Network.DEVNET].ETH,
      coin1: COINS[Network.DEVNET].USDT,
      isSingleCoin: false,
      id: 5,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: {
      farmType: COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC,
      poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDC,
      lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDC,
      coin0: COINS[Network.DEVNET].ETH,
      coin1: COINS[Network.DEVNET].USDC,
      isSingleCoin: false,
      id: 6,
      isLive: true,
      stable: false,
    },
    [COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH]: {
      farmType: COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH,
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

export interface FarmMetadataType {
  farmType: string;
  lpCoin: CoinData;
  coin0: CoinData;
  coin1: CoinData;
  isSingleCoin: boolean;
  id: number;
  isLive: boolean;
  stable: boolean;
  poolObjectId: string;
}
