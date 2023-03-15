import { CoinData } from '@/interface';

import { COIN_POOL, COIN_TYPE, COINS } from './coins';
import { Network } from './network';

export const IPX_STORAGE = '0xedb55018461586c9414881d5d013fce2f344180a';

export const IPX_ACCOUNT_STORAGE = '0xa76791de9bff6678116c13d8eeb003165b2281fd';

export const FARMS_PACKAGE_ID = '0x7519197dd8e31b375b4550017e64dc640743fcdd';

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
