import { Network } from '@mysten/sui.js';

import { COIN_POOL, COINS } from './coins';

export const IPX_STORAGE = '0x06327d0e5a3c36e1bbcd0cfb8cd66c1e5df50278';

export const IPX_ACCOUNT_STORAGE = '0x2e09ba6668983bc5389487176ec0b72428c54262';

export const FARMS = [
  {
    objectId: '0xb3327c95acfbb3c6729c87668b9959b211f40f14',
    poolObjectId: '0xb3327c95acfbb3c6729c87668b9959b211f40f14',
    lpCoin: COINS[Network.DEVNET].IPX,
    coin0: COINS[Network.DEVNET].IPX,
    coin1: COINS[Network.DEVNET].IPX,
    isSingleCoin: true,
    id: 0,
    isLive: true,
    stable: false,
  },
  {
    objectId: '0x7497d674e45b296d515a4a6d094f719e54c697b7',
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
    objectId: '0x8c41c1f85a877ca1d02f48d974df8418342dbcc9',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BTC_ETH,
    lpCoin: COINS[Network.DEVNET].V_LP_BTC_ETH,
    coin0: COINS[Network.DEVNET].BTC,
    coin1: COINS[Network.DEVNET].ETH,
    isSingleCoin: false,
    id: 2,
    isLive: true,
    stable: false,
  },
  {
    objectId: '0xeb21a43da501c2accec8e6669c4797785b603092',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_BNB_ETH,
    lpCoin: COINS[Network.DEVNET].V_LP_BNB_ETH,
    coin0: COINS[Network.DEVNET].BNB,
    coin1: COINS[Network.DEVNET].ETH,
    isSingleCoin: false,
    id: 3,
    isLive: true,
    stable: false,
  },
  {
    objectId: '0xec01710017bd9a90375690e33189378cc1a31013',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDT,
    lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDT,
    coin0: COINS[Network.DEVNET].ETH,
    coin1: COINS[Network.DEVNET].USDT,
    isSingleCoin: false,
    id: 4,
    isLive: true,
    stable: false,
  },
  {
    objectId: '0x7ef2a678ce80e85ad8d88fa560b18a0e0dd7fde5',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_ETH_USDC,
    lpCoin: COINS[Network.DEVNET].V_LP_ETH_USDC,
    coin0: COINS[Network.DEVNET].ETH,
    coin1: COINS[Network.DEVNET].USDC,
    isSingleCoin: false,
    id: 5,
    isLive: true,
    stable: false,
  },
  {
    objectId: '0x63e42397f121473a1f167c3ac513d6e0dbc91963',
    poolObjectId: COIN_POOL[Network.DEVNET].V_LP_DAI_ETH,
    lpCoin: COINS[Network.DEVNET].V_LP_DAI_ETH,
    coin0: COINS[Network.DEVNET].DAI,
    coin1: COINS[Network.DEVNET].ETH,
    isSingleCoin: false,
    id: 6,
    isLive: true,
    stable: false,
  },
];

export type FarmType = typeof FARMS[number];
