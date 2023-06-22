import { COIN_TYPE, Network } from '@interest-protocol/sui-amm-sdk';

import { COIN_POOL, COINS } from '@/constants';

export const COIN_PRICES = {
  [Network.DEVNET]: [
    COINS[Network.DEVNET].ETH.type,
    COINS[Network.DEVNET].BTC.type,
    COINS[Network.DEVNET].BNB.type,
    COINS[Network.DEVNET].USDT.type,
    COINS[Network.DEVNET].USDC.type,
    COINS[Network.DEVNET].SUI.type,
  ],
  [Network.TESTNET]: [
    COINS[Network.TESTNET].ETH.type,
    COINS[Network.TESTNET].BTC.type,
    COINS[Network.TESTNET].BNB.type,
    COINS[Network.TESTNET].USDT.type,
    COINS[Network.TESTNET].USDC.type,
    COINS[Network.TESTNET].SUI.type,
  ],
  [Network.MAINNET]: [],
};

// The order has to remain the same

export const POOL_IDS_RECORD = {
  [Network.DEVNET]: [
    COIN_POOL[Network.DEVNET].V_LP_ETH_IPX,
    COIN_POOL[Network.DEVNET].V_LP_SUI_ETH,
    COIN_POOL[Network.DEVNET].V_LP_BTC_ETH,
    COIN_POOL[Network.DEVNET].V_LP_BNB_ETH,
    COIN_POOL[Network.DEVNET].V_LP_ETH_USDC,
    COIN_POOL[Network.DEVNET].V_LP_ETH_USDT,
    COIN_POOL[Network.DEVNET].S_LP_USDC_USDT,
  ],
  [Network.TESTNET]: [
    COIN_POOL[Network.TESTNET].V_LP_ETH_IPX,
    COIN_POOL[Network.TESTNET].V_LP_SUI_ETH,
    COIN_POOL[Network.TESTNET].V_LP_BTC_ETH,
    COIN_POOL[Network.TESTNET].V_LP_BNB_ETH,
    COIN_POOL[Network.TESTNET].V_LP_ETH_USDC,
    COIN_POOL[Network.TESTNET].V_LP_ETH_USDT,
    COIN_POOL[Network.TESTNET].S_LP_USDC_USDT,
  ],
  [Network.MAINNET]: [],
};

export const FARM_IDS_RECORD_FIRST_CALL = {
  [Network.DEVNET]: [
    {
      number: 3,
      data: [
        COIN_TYPE[Network.DEVNET].IPX,
        COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX,
        COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH,
      ],
    },
    {
      number: 3,
      data: [
        COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH,
        COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH,
        COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC,
      ],
    },
    {
      number: 2,
      data: [
        COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT,
        COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT,
        COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC,
      ],
    },
  ],
  [Network.TESTNET]: [
    {
      number: 3,
      data: [
        COIN_TYPE[Network.TESTNET].IPX,
        COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX,
        COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
      ],
    },
    {
      number: 3,
      data: [
        COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH,
        COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
        COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC,
      ],
    },
    {
      number: 2,
      data: [
        COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT,
        COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT,
        COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC,
      ],
    },
  ],
  [Network.MAINNET]: [],
};

export const COIN_TYPE_ARRAY_UI = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].IPX,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX,
    COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT,
    COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT,
  ],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].IPX,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX,
    COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT,
    COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT,
  ],
  [Network.MAINNET]: [],
};
