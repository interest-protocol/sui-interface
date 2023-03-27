import { COIN_TYPE, COINS, Network } from '@/constants';

export const COIN_PRICES = {
  [Network.DEVNET]: [
    COINS[Network.DEVNET].ETH.type,
    COINS[Network.DEVNET].BTC.type,
    COINS[Network.DEVNET].DAI.type,
    COINS[Network.DEVNET].BNB.type,
    COINS[Network.DEVNET].USDT.type,
    COINS[Network.DEVNET].USDC.type,
  ],
  [Network.TESTNET]: [
    COINS[Network.TESTNET].ETH.type,
    COINS[Network.TESTNET].BTC.type,
    COINS[Network.TESTNET].DAI.type,
    COINS[Network.TESTNET].BNB.type,
    COINS[Network.TESTNET].USDT.type,
    COINS[Network.TESTNET].USDC.type,
  ],
};

export const FARM_TYPE_ARGS = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].IPX,
    COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX,
    COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT,
    COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC,
    COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH,
  ],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].IPX,
    COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX,
    COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT,
    COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC,
    COIN_TYPE[Network.TESTNET].V_LP_DAI_ETH,
  ],
};

export const FILLED_FARM_TYPE_ARGS = {
  [Network.DEVNET]: FARM_TYPE_ARGS[Network.DEVNET].concat([
    COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH,
  ]),
  [Network.TESTNET]: FARM_TYPE_ARGS[Network.TESTNET].concat([
    COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH,
    COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH,
  ]),
};

export const POOL_TYPE_ARGS = {
  [Network.DEVNET]: [
    COIN_TYPE[Network.DEVNET].SUI,
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].IPX,
    COIN_TYPE[Network.DEVNET].BTC,
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].BNB,
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].USDT,
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].USDC,
    COIN_TYPE[Network.DEVNET].DAI,
    COIN_TYPE[Network.DEVNET].ETH,
  ],
  [Network.TESTNET]: [
    COIN_TYPE[Network.TESTNET].SUI,
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].IPX,
    COIN_TYPE[Network.TESTNET].BTC,
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].BNB,
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].USDT,
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].USDC,
    COIN_TYPE[Network.TESTNET].DAI,
    COIN_TYPE[Network.TESTNET].ETH,
  ],
};

export const FILLED_POOL_TYPE_ARGS = {
  [Network.DEVNET]: POOL_TYPE_ARGS[Network.DEVNET].concat([
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].USDT,
    COIN_TYPE[Network.DEVNET].ETH,
    COIN_TYPE[Network.DEVNET].USDC,
    COIN_TYPE[Network.DEVNET].DAI,
    COIN_TYPE[Network.DEVNET].ETH,
  ]),
  [Network.TESTNET]: POOL_TYPE_ARGS[Network.TESTNET].concat([
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].USDT,
    COIN_TYPE[Network.TESTNET].ETH,
    COIN_TYPE[Network.TESTNET].USDC,
    COIN_TYPE[Network.TESTNET].DAI,
    COIN_TYPE[Network.TESTNET].ETH,
  ]),
};
