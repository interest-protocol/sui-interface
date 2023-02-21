import { Network } from '@mysten/sui.js';

import { COIN_POOL, COINS } from './coins';

export const IPX_STORAGE = '0x71d03fa7ed72156d5564dcf6930884ce77612353';

export const IPX_ACCOUNT_STORAGE = '0x9fb75f57ce415461cb23be173e67fd89ea32d5aa';

export const FARMS = [
  {
    objectId: '0xd418be2fc6577da5fcb64b40a12a3e65c44018e1',
    poolObjectId: '0xd418be2fc6577da5fcb64b40a12a3e65c44018e1',
    lpCoin: COINS[Network.DEVNET].IPX,
    coin0: COINS[Network.DEVNET].IPX,
    coin1: COINS[Network.DEVNET].IPX,
    isSingleCoin: true,
  },
  {
    objectId: '0x29e5e0892f0dab8bcb5fafd93140a61be3308ef6',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_SUI_ETH,
    lpCoin: COINS[Network.DEVNET].V_LP_SUI_ETH,
    coin0: COINS[Network.DEVNET].SUI,
    coin1: COINS[Network.DEVNET].ETH,
    isSingleCoin: false,
  },
  {
    objectId: '0x4aa088a5964484a54e6e164593c2cee81bef52fc',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BTC_ETH,
    lpCoin: COINS[Network.DEVNET].V_LP_BTC_ETH,
    coin0: COINS[Network.DEVNET].BTC,
    coin1: COINS[Network.DEVNET].ETH,
    isSingleCoin: false,
  },
  {
    objectId: '0x0babb3f8bb6cd96d1a053b65df80e6ed4e7fa04a',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BNB_ETH,
    lpCoin: COINS[Network.DEVNET].V_LP_BNB_ETH,
    coin0: COINS[Network.DEVNET].BNB,
    coin1: COINS[Network.DEVNET].ETH,
    isSingleCoin: false,
  },
  {
    objectId: '0x66c86402ada4c6e0e47a78b5a0c3cb5698769768',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDT,
    lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDT,
    coin0: COINS[Network.DEVNET].ETH,
    coin1: COINS[Network.DEVNET].USDT,
    isSingleCoin: false,
  },
  {
    objectId: '0x1f8b94fce8321408988cd692cfd704260bd60150',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDC,
    lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDC,
    coin0: COINS[Network.DEVNET].ETH,
    coin1: COINS[Network.DEVNET].USDC,
    isSingleCoin: false,
  },
  {
    objectId: '0x95e9f1dd3d8ada19a75c2571b5bfee07a973f820',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_DAI_ETH,
    lpCoin: COINS[Network.DEVNET].V_LP_DAI_ETH,
    coin0: COINS[Network.DEVNET].DAI,
    coin1: COINS[Network.DEVNET].ETH,
    isSingleCoin: false,
  },
];
