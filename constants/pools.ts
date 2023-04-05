import { COIN_POOL, COINS } from './coins';
import { Network } from './network';

const networkDevNetCoins = COINS[Network.DEVNET];
const networkTestNetCoins = COINS[Network.TESTNET];

const networkDevNetCoinPool = COIN_POOL[Network.DEVNET];
const networkTestNetCoinPool = COIN_POOL[Network.TESTNET];

export const RECOMMENDED_POOLS = {
  [Network.DEVNET]: [
    {
      token0: networkDevNetCoins.BNB,
      token1: networkDevNetCoins.ETH,
      poolObjectId: networkDevNetCoinPool.V_LP_BNB_ETH,
      lpCoin: networkDevNetCoins.V_LP_BNB_ETH,
      stable: false,
    },
    {
      token0: networkDevNetCoins.BTC,
      token1: networkDevNetCoins.ETH,
      poolObjectId: networkDevNetCoinPool.V_LP_BTC_ETH,
      lpCoin: networkDevNetCoins.V_LP_BTC_ETH,
      stable: false,
    },
    {
      token0: networkDevNetCoins.DAI,
      token1: networkDevNetCoins.ETH,
      poolObjectId: networkDevNetCoinPool.V_LP_DAI_ETH,
      lpCoin: networkDevNetCoins.V_LP_DAI_ETH,
      stable: false,
    },
    {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDT,
      poolObjectId: networkDevNetCoinPool.V_LP_ETH_USDT,
      lpCoin: networkDevNetCoins.V_LP_ETH_USDT,
      stable: false,
    },
    {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.USDC,
      poolObjectId: networkDevNetCoinPool.V_LP_ETH_USDC,
      lpCoin: networkDevNetCoins.V_LP_ETH_USDC,
      stable: false,
    },
    {
      token0: networkDevNetCoins.SUI,
      token1: networkDevNetCoins.ETH,
      poolObjectId: networkDevNetCoinPool.V_LP_SUI_ETH,
      lpCoin: networkDevNetCoins.V_LP_SUI_ETH,
      stable: false,
    },
    {
      token0: networkDevNetCoins.ETH,
      token1: networkDevNetCoins.IPX,
      poolObjectId: networkDevNetCoinPool.V_LP_ETH_IPX,
      lpCoin: networkDevNetCoins.V_LP_ETH_IPX,
      stable: false,
    },
    {
      token0: networkDevNetCoins.USDC,
      token1: networkDevNetCoins.USDT,
      poolObjectId: networkDevNetCoinPool.S_LP_USDC_USDT,
      lpCoin: networkDevNetCoins.S_LP_USDC_USDT,
      stable: true,
    },
  ],
  [Network.TESTNET]: [
    {
      token0: networkTestNetCoins.BNB,
      token1: networkTestNetCoins.ETH,
      poolObjectId: networkTestNetCoinPool.V_LP_BNB_ETH,
      lpCoin: networkTestNetCoins.V_LP_BNB_ETH,
      stable: false,
    },
    {
      token0: networkTestNetCoins.BTC,
      token1: networkTestNetCoins.ETH,
      poolObjectId: networkTestNetCoinPool.V_LP_BTC_ETH,
      lpCoin: networkTestNetCoins.V_LP_BTC_ETH,
      stable: false,
    },
    {
      token0: networkTestNetCoins.DAI,
      token1: networkTestNetCoins.ETH,
      poolObjectId: networkTestNetCoinPool.V_LP_DAI_ETH,
      lpCoin: networkTestNetCoins.V_LP_DAI_ETH,
      stable: false,
    },
    {
      token0: networkTestNetCoins.ETH,
      token1: networkTestNetCoins.USDT,
      poolObjectId: networkTestNetCoinPool.V_LP_ETH_USDT,
      lpCoin: networkTestNetCoins.V_LP_ETH_USDT,
      stable: false,
    },
    {
      token0: networkTestNetCoins.ETH,
      token1: networkTestNetCoins.USDC,
      poolObjectId: networkTestNetCoinPool.V_LP_ETH_USDC,
      lpCoin: networkTestNetCoins.V_LP_ETH_USDC,
      stable: false,
    },
    {
      token0: networkTestNetCoins.SUI,
      token1: networkTestNetCoins.ETH,
      poolObjectId: networkTestNetCoinPool.V_LP_SUI_ETH,
      lpCoin: networkTestNetCoins.V_LP_SUI_ETH,
      stable: false,
    },
    {
      token0: networkTestNetCoins.ETH,
      token1: networkTestNetCoins.IPX,
      poolObjectId: networkTestNetCoinPool.V_LP_ETH_IPX,
      lpCoin: networkTestNetCoins.V_LP_ETH_IPX,
      stable: false,
    },
    {
      token0: networkTestNetCoins.USDC,
      token1: networkTestNetCoins.USDT,
      poolObjectId: networkTestNetCoinPool.S_LP_USDC_USDT,
      lpCoin: networkTestNetCoins.S_LP_USDC_USDT,
      stable: true,
    },
  ],
};

export const COIN_POOL_ID_TO_STABLE = {
  [Network.DEVNET]: {
    [COIN_POOL[Network.DEVNET].V_LP_SUI_ETH]: false,
    [COIN_POOL[Network.DEVNET].V_LP_BTC_ETH]: false,
    [COIN_POOL[Network.DEVNET].V_LP_BNB_ETH]: false,
    [COIN_POOL[Network.DEVNET].V_LP_ETH_USDT]: false,
    [COIN_POOL[Network.DEVNET].V_LP_ETH_USDC]: false,
    [COIN_POOL[Network.DEVNET].V_LP_DAI_ETH]: false,
    [COIN_POOL[Network.DEVNET].V_LP_ETH_IPX]: false,
    [COIN_POOL[Network.DEVNET].S_LP_USDC_USDT]: true,
  },
  [Network.TESTNET]: {
    [COIN_POOL[Network.TESTNET].V_LP_SUI_ETH]: false,
    [COIN_POOL[Network.TESTNET].V_LP_BTC_ETH]: false,
    [COIN_POOL[Network.TESTNET].V_LP_BNB_ETH]: false,
    [COIN_POOL[Network.TESTNET].V_LP_ETH_USDT]: false,
    [COIN_POOL[Network.TESTNET].V_LP_ETH_USDC]: false,
    [COIN_POOL[Network.TESTNET].V_LP_DAI_ETH]: false,
    [COIN_POOL[Network.TESTNET].V_LP_ETH_IPX]: false,
    [COIN_POOL[Network.TESTNET].S_LP_USDC_USDT]: true,
  },
};
