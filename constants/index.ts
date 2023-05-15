import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';

import {
  BinanceSVG,
  BitcoinSVG,
  EtherSVG,
  InterestTokenSVG,
  SuiSVG,
  UnknownCoinSVG,
  USDCoinSVG,
  USDTSVG,
  WormholeCELOSVG,
  WormholeETHSVG,
  WormholeUSDCSVG,
  WormholeUSDTSVG,
  WormholeWAVAXSVG,
  WormholeWBNBSVG,
  WormholeWFTMSVG,
  WormholeWMATICSVG,
} from '@/svg';

export * from './coin-market-cap';
export * from './coins';
export * from './dex';
export * from './farms';
export * from './faucet';
export * from './pools';
export * from './routes';
export * from './social-media';

export const MAX_NUMBER_INPUT_VALUE = 9000000000000000;

export const GAS_COST = {
  [Network.TESTNET]: 3_00_000_000,
  [Network.DEVNET]: 3_00_000_000,
  [Network.MAINNET]: 3_00_000_000,
};

export enum StakeState {
  Stake,
  Unstake,
}

export const SUI_EXPLORER_URL = 'https://explorer.sui.io';
export const TOKENS_SVG_MAP = {
  default: UnknownCoinSVG,
  [COIN_TYPE[Network.DEVNET].BNB]: BinanceSVG,
  [COIN_TYPE[Network.DEVNET].BTC]: BitcoinSVG,
  [COIN_TYPE[Network.DEVNET].ETH]: EtherSVG,
  [COIN_TYPE[Network.DEVNET].SUI]: SuiSVG,
  [COIN_TYPE[Network.DEVNET].USDC]: USDCoinSVG,
  [COIN_TYPE[Network.DEVNET].USDT]: USDTSVG,
  [COIN_TYPE[Network.DEVNET].IPX]: InterestTokenSVG,
  [COIN_TYPE[Network.TESTNET].BNB]: BinanceSVG,
  [COIN_TYPE[Network.TESTNET].BTC]: BitcoinSVG,
  [COIN_TYPE[Network.TESTNET].ETH]: EtherSVG,
  [COIN_TYPE[Network.TESTNET].SUI]: SuiSVG,
  [COIN_TYPE[Network.TESTNET].USDC]: USDCoinSVG,
  [COIN_TYPE[Network.TESTNET].USDT]: USDTSVG,
  [COIN_TYPE[Network.TESTNET].IPX]: InterestTokenSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH]: WormholeETHSVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]: WormholeUSDCSVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]: WormholeUSDTSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO]: WormholeCELOSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX]: WormholeWAVAXSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB]: WormholeWBNBSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM]: WormholeWFTMSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC]: WormholeWMATICSVG,
};

export const MILLISECONDS_PER_YEAR = 31540000000;

export const TOAST_DURATION = 10000;
