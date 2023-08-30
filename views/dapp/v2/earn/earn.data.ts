import { Network } from '@interest-protocol/sui-amm-sdk';

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
