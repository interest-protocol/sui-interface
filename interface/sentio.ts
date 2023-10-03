import { Network } from '@interest-protocol/sui-amm-sdk';
import { SUI_TYPE_ARG } from '@mysten/sui.js';

import { COINS } from '@/constants';

export enum Bridge {
  Celer = 'Celer',
  Wormhole = 'Wormhole',
}

export enum Chain {
  ETH = 'ETH',
  BSC = 'BSC',
  FTM = 'FTM',
  AVAX = 'AVAX',
  CELO = 'CELO',
  SOLANA = 'SOLANA',
  POLYGON = 'POLYGON',
}

export interface CoinInfo {
  symbol: string;
  name: string;
  decimals: number;
  type: string;
  bridge: null | Bridge;
  sourceChain: Chain | null;
}

const SENTIO_COINS = {
  SUI: SUI_TYPE_ARG,
  ETH_WORMHOLE_USDC: COINS[Network.MAINNET].ETH_WORMHOLE_USDC.type,
  NATIVE_WORMHOLE_ETH: COINS[Network.MAINNET].NATIVE_WORMHOLE_ETH.type,
  ETH_WORMHOLE_USDT: COINS[Network.MAINNET].ETH_WORMHOLE_USDT.type,
  NATIVE_WORMHOLE_WBNB: COINS[Network.MAINNET].NATIVE_WORMHOLE_WBNB.type,
  NATIVE_WORMHOLE_WAVAX: COINS[Network.MAINNET].NATIVE_WORMHOLE_WAVAX.type,
  NATIVE_WORMHOLE_WFTM: COINS[Network.MAINNET].NATIVE_WORMHOLE_WFTM.type,
  NATIVE_WORMHOLE_CELO: COINS[Network.MAINNET].NATIVE_WORMHOLE_CELO.type,
  NATIVE_WORMHOLE_WMATIC: COINS[Network.MAINNET].NATIVE_WORMHOLE_WMATIC.type,
  NATIVE_WORMHOLE_SOL: COINS[Network.MAINNET].NATIVE_WORMHOLE_SOL.type,
  BSC_WORMHOLE_ADA: COINS[Network.MAINNET].BSC_WORMHOLE_ADA.type,
  BSC_WORMHOLE_BTCB: COINS[Network.MAINNET].BSC_WORMHOLE_BTCB.type,
  BSC_WORMHOLE_USDT: COINS[Network.MAINNET].BSC_WORMHOLE_USDT.type,
  BSC_WORMHOLE_USDC: COINS[Network.MAINNET].BSC_WORMHOLE_USDC.type,
  BSC_WORMHOLE_ETH: COINS[Network.MAINNET].BSC_WORMHOLE_ETH.type,
  BSC_WORMHOLE_FLOKI: COINS[Network.MAINNET].BSC_WORMHOLE_FLOKI.type,
  BSC_WORMHOLE_DOGE: COINS[Network.MAINNET].BSC_WORMHOLE_DOGE.type,
  ETH_CELER_WETH: COINS[Network.MAINNET].ETH_CELER_WETH.type,
  ETH_CELER_WBTC: COINS[Network.MAINNET].ETH_CELER_WBTC.type,
  ETH_CELER_USDC: COINS[Network.MAINNET].ETH_CELER_USDC.type,
};

export const SENTIO_COINS_MAP = {
  [SENTIO_COINS.SUI]: {
    decimals: 9,
    symbol: 'SUI',
    type: SENTIO_COINS.SUI,
    name: 'SUI',
    bridge: null,
  },
  [SENTIO_COINS.NATIVE_WORMHOLE_ETH]: {
    decimals: 8,
    symbol: 'ETH',
    type: SENTIO_COINS.NATIVE_WORMHOLE_ETH,
    name: 'Ether',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.ETH,
  },
  [SENTIO_COINS.ETH_WORMHOLE_USDC]: {
    decimals: 6,
    symbol: 'USDCeth',
    type: SENTIO_COINS.ETH_WORMHOLE_USDC,
    name: 'USD Coin',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.ETH,
  },
  [SENTIO_COINS.ETH_WORMHOLE_USDT]: {
    decimals: 6,
    symbol: 'USDTeth',
    type: SENTIO_COINS.ETH_WORMHOLE_USDT,
    name: 'USD Tether',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.ETH,
  },
  [SENTIO_COINS.NATIVE_WORMHOLE_WBNB]: {
    decimals: 8,
    symbol: 'WBNB',
    type: SENTIO_COINS.NATIVE_WORMHOLE_WBNB,
    name: 'Wrapped BNB',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.NATIVE_WORMHOLE_SOL]: {
    decimals: 8,
    symbol: 'SOL',
    type: SENTIO_COINS.NATIVE_WORMHOLE_SOL,
    name: 'Solana',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.SOLANA,
  },
  [SENTIO_COINS.NATIVE_WORMHOLE_WAVAX]: {
    decimals: 8,
    symbol: 'WAVAX',
    type: SENTIO_COINS.NATIVE_WORMHOLE_WAVAX,
    name: 'Wrapped AVAX',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.AVAX,
  },
  [SENTIO_COINS.NATIVE_WORMHOLE_WFTM]: {
    decimals: 8,
    symbol: 'WFTM',
    type: SENTIO_COINS.NATIVE_WORMHOLE_WFTM,
    name: 'Wrapped FTW',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.FTM,
  },
  [SENTIO_COINS.NATIVE_WORMHOLE_CELO]: {
    decimals: 8,
    symbol: 'CELO',
    type: SENTIO_COINS.NATIVE_WORMHOLE_CELO,
    name: 'CELO',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.CELO,
  },
  [SENTIO_COINS.NATIVE_WORMHOLE_WMATIC]: {
    decimals: 8,
    symbol: 'WMATIC',
    type: SENTIO_COINS.NATIVE_WORMHOLE_WMATIC,
    name: 'Wrapped Matic',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.POLYGON,
  },
  [SENTIO_COINS.BSC_WORMHOLE_ADA]: {
    decimals: 8,
    symbol: 'ADAbnb',
    type: SENTIO_COINS.BSC_WORMHOLE_ADA,
    name: 'Cardano',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.BSC_WORMHOLE_BTCB]: {
    decimals: 8,
    symbol: 'WBTCBbnb',
    type: SENTIO_COINS.BSC_WORMHOLE_BTCB,
    name: 'Wrapped Bitcoin Binance',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.BSC_WORMHOLE_USDC]: {
    decimals: 8,
    symbol: 'USDCbnb',
    type: SENTIO_COINS.BSC_WORMHOLE_USDC,
    name: 'USD Coin',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.BSC_WORMHOLE_USDT]: {
    decimals: 8,
    symbol: 'USDTbnb',
    type: SENTIO_COINS.BSC_WORMHOLE_USDT,
    name: 'USD Tether',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.BSC_WORMHOLE_ETH]: {
    decimals: 8,
    symbol: 'WETHbnb',
    type: SENTIO_COINS.BSC_WORMHOLE_ETH,
    name: 'Wrapped Ether',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.BSC_WORMHOLE_FLOKI]: {
    decimals: 8,
    symbol: 'FLOKIbnb',
    type: SENTIO_COINS.BSC_WORMHOLE_FLOKI,
    name: 'FLOKI',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.BSC_WORMHOLE_DOGE]: {
    decimals: 8,
    symbol: 'DOGEbnb',
    type: SENTIO_COINS.BSC_WORMHOLE_DOGE,
    name: 'DOGE',
    bridge: Bridge.Wormhole,
    sourceChain: Chain.BSC,
  },
  [SENTIO_COINS.ETH_CELER_WETH]: {
    decimals: 9,
    symbol: 'cWETHeth',
    type: SENTIO_COINS.ETH_CELER_WETH,
    name: 'Celer Wrapped Ether',
    bridge: Bridge.Celer,
    sourceChain: Chain.ETH,
  },
  [SENTIO_COINS.ETH_CELER_WBTC]: {
    decimals: 8,
    symbol: 'cWBTCeth',
    type: SENTIO_COINS.ETH_CELER_WBTC,
    name: 'Celer Wrapped Bitcoin',
    bridge: Bridge.Celer,
    sourceChain: Chain.ETH,
  },
  [SENTIO_COINS.ETH_CELER_USDC]: {
    decimals: 6,
    symbol: 'cUSDCeth',
    type: SENTIO_COINS.ETH_CELER_USDC,
    name: 'Celer USDC',
    bridge: Bridge.Celer,
    sourceChain: Chain.ETH,
  },
} as Record<string, CoinInfo>;

export const PRICE_MAP = {
  [SENTIO_COINS.SUI]: SENTIO_COINS.SUI,
  [SENTIO_COINS.NATIVE_WORMHOLE_ETH]: SENTIO_COINS.NATIVE_WORMHOLE_ETH,
  [SENTIO_COINS.ETH_WORMHOLE_USDC]: SENTIO_COINS.ETH_WORMHOLE_USDC,
  [SENTIO_COINS.ETH_WORMHOLE_USDT]: SENTIO_COINS.ETH_WORMHOLE_USDT,
  [SENTIO_COINS.NATIVE_WORMHOLE_WBNB]: SENTIO_COINS.NATIVE_WORMHOLE_WBNB,
  [SENTIO_COINS.NATIVE_WORMHOLE_SOL]: SENTIO_COINS.NATIVE_WORMHOLE_SOL,
  [SENTIO_COINS.NATIVE_WORMHOLE_WAVAX]: SENTIO_COINS.NATIVE_WORMHOLE_WAVAX,
  [SENTIO_COINS.NATIVE_WORMHOLE_WFTM]: SENTIO_COINS.NATIVE_WORMHOLE_WFTM,
  [SENTIO_COINS.NATIVE_WORMHOLE_CELO]: SENTIO_COINS.NATIVE_WORMHOLE_CELO,
  [SENTIO_COINS.NATIVE_WORMHOLE_WMATIC]: SENTIO_COINS.NATIVE_WORMHOLE_WMATIC,
  [SENTIO_COINS.BSC_WORMHOLE_ADA]: SENTIO_COINS.BSC_WORMHOLE_ADA,
  [SENTIO_COINS.BSC_WORMHOLE_BTCB]: SENTIO_COINS.BSC_WORMHOLE_BTCB,
  [SENTIO_COINS.BSC_WORMHOLE_USDC]: SENTIO_COINS.ETH_WORMHOLE_USDC,
  [SENTIO_COINS.BSC_WORMHOLE_USDT]: SENTIO_COINS.ETH_WORMHOLE_USDT,
  [SENTIO_COINS.BSC_WORMHOLE_ETH]: SENTIO_COINS.NATIVE_WORMHOLE_ETH,
  [SENTIO_COINS.BSC_WORMHOLE_FLOKI]: SENTIO_COINS.BSC_WORMHOLE_FLOKI,
  [SENTIO_COINS.BSC_WORMHOLE_DOGE]: SENTIO_COINS.BSC_WORMHOLE_DOGE,
  [SENTIO_COINS.ETH_CELER_WETH]: SENTIO_COINS.NATIVE_WORMHOLE_ETH,
  [SENTIO_COINS.ETH_CELER_WBTC]: SENTIO_COINS.ETH_CELER_WBTC,
  [SENTIO_COINS.ETH_CELER_USDC]: SENTIO_COINS.ETH_WORMHOLE_USDC,
};
