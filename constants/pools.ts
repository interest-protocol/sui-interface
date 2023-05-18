import { Network } from '@interest-protocol/sui-sdk';

import { COIN_POOL, COINS } from './coins';

const networkDevNetCoins = COINS[Network.DEVNET];
const networkTestNetCoins = COINS[Network.TESTNET];
const networkMainNetCoins = COINS[Network.MAINNET];

const networkDevNetCoinPool = COIN_POOL[Network.DEVNET];
const networkTestNetCoinPool = COIN_POOL[Network.TESTNET];
const networkMainNetCoinPool = COIN_POOL[Network.MAINNET];

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
  [Network.MAINNET]: [
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.BSC_WORMHOLE_BTCB,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_BSC_WORMHOLE_BTCB,
      lpCoin: networkMainNetCoins.V_LP_SUI_BSC_WORMHOLE_BTCB,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.NATIVE_WORMHOLE_ETH,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_NATIVE_WORMHOLE_ETH,
      lpCoin: networkMainNetCoins.V_LP_SUI_NATIVE_WORMHOLE_ETH,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.BSC_WORMHOLE_ETH,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_BSC_WORMHOLE_ETH,
      lpCoin: networkMainNetCoins.V_LP_SUI_BSC_WORMHOLE_ETH,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.NATIVE_WORMHOLE_WBNB,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_NATIVE_WORMHOLE_WBNB,
      lpCoin: networkMainNetCoins.V_LP_SUI_NATIVE_WORMHOLE_WBNB,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.ETH_WORMHOLE_USDC,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_ETH_WORMHOLE_USDC,
      lpCoin: networkMainNetCoins.V_LP_SUI_ETH_WORMHOLE_USDC,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.ETH_WORMHOLE_USDT,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_ETH_WORMHOLE_USDT,
      lpCoin: networkMainNetCoins.V_LP_SUI_ETH_WORMHOLE_USDT,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.BSC_WORMHOLE_USDC,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_BSC_WORMHOLE_USDC,
      lpCoin: networkMainNetCoins.V_LP_SUI_BSC_WORMHOLE_USDC,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.BSC_WORMHOLE_USDT,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_BSC_WORMHOLE_USDT,
      lpCoin: networkMainNetCoins.V_LP_SUI_BSC_WORMHOLE_USDT,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.NATIVE_WORMHOLE_SOL,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_NATIVE_WORMHOLE_SOL,
      lpCoin: networkMainNetCoins.V_LP_SUI_NATIVE_WORMHOLE_SOL,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.BSC_WORMHOLE_ADA,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_BSC_WORMHOLE_ADA,
      lpCoin: networkMainNetCoins.V_LP_SUI_BSC_WORMHOLE_ADA,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.NATIVE_WORMHOLE_WMATIC,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_NATIVE_WORMHOLE_WMATIC,
      lpCoin: networkMainNetCoins.V_LP_SUI_NATIVE_WORMHOLE_WMATIC,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.NATIVE_WORMHOLE_WAVAX,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_NATIVE_WORMHOLE_WAVAX,
      lpCoin: networkMainNetCoins.V_LP_SUI_NATIVE_WORMHOLE_WAVAX,
      stable: false,
    },
    {
      token0: networkMainNetCoins.ETH_WORMHOLE_USDC,
      token1: networkMainNetCoins.BSC_WORMHOLE_USDC,
      poolObjectId:
        networkMainNetCoinPool.S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
      lpCoin: networkMainNetCoins.S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
      stable: true,
    },
    {
      token0: networkMainNetCoins.ETH_WORMHOLE_USDC,
      token1: networkMainNetCoins.ETH_WORMHOLE_USDT,
      poolObjectId:
        networkMainNetCoinPool.S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
      lpCoin: networkMainNetCoins.S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
      stable: true,
    },
    {
      token0: networkMainNetCoins.BSC_WORMHOLE_USDT,
      token1: networkMainNetCoins.BSC_WORMHOLE_USDC,
      poolObjectId:
        networkMainNetCoinPool.S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
      lpCoin: networkMainNetCoins.S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC,
      stable: true,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.NATIVE_WORMHOLE_WFTM,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_NATIVE_WORMHOLE_WFTM,
      lpCoin: networkMainNetCoins.V_LP_SUI_NATIVE_WORMHOLE_WFTM,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.NATIVE_WORMHOLE_CELO,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_NATIVE_WORMHOLE_CELO,
      lpCoin: networkMainNetCoins.V_LP_SUI_NATIVE_WORMHOLE_CELO,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.BSC_WORMHOLE_DOGE,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_BSC_WORMHOLE_DOGE,
      lpCoin: networkMainNetCoins.V_LP_SUI_BSC_WORMHOLE_DOGE,
      stable: false,
    },
    {
      token0: networkMainNetCoins.SUI,
      token1: networkMainNetCoins.BSC_WORMHOLE_FLOKI,
      poolObjectId: networkMainNetCoinPool.V_LP_SUI_BSC_WORMHOLE_FLOKI,
      lpCoin: networkMainNetCoins.V_LP_SUI_BSC_WORMHOLE_FLOKI,
      stable: false,
    },
  ],
};

export const COIN_POOL_ID_TO_STABLE = {
  [Network.DEVNET]: {
    [COIN_POOL[Network.DEVNET].S_LP_USDC_USDT]: true,
  },
  [Network.TESTNET]: {
    [COIN_POOL[Network.TESTNET].S_LP_USDC_USDT]: true,
  },
  [Network.MAINNET]: {
    [COIN_POOL[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC]: true,
    [COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT]: true,
    [COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC]: true,
  },
};
