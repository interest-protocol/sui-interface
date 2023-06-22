import { COIN_TYPE, Network } from '@interest-protocol/sui-amm-sdk';

import {
  BNBSVG,
  BTCSVG,
  ETHSVG,
  SUISVG,
  UnknownCoinSVG,
  USDTSVG,
  WormholeADABSCSVG,
  WormholeAVAXSVG,
  WormholeBNBSVG,
  WormholeBTCBSCSVG,
  WormholeCELOSVG,
  WormholeDOGEBSCSVG,
  WormholeETHBSCSVG,
  WormholeETHSVG,
  WormholeFLOKIBSCSVG,
  WormholeFTMSVG,
  WormholeMATICSVG,
  WormholeSOLSVG,
  WormholeUSDCBSCSVG,
  WormholeUSDCETHSVG,
  WormholeUSDTBSCSVG,
  WormholeUSDTETHSVG,
} from '@/components/svg/v2';
import {
  BinanceSVG,
  BitcoinSVG,
  EtherSVG,
  InterestTokenSVG,
  SuiSVG,
  UnknownCoinSVG as UnknownCoinV1SVG,
  USDCoinSVG,
  USDTSVG as USDTv1SVG,
  WormholeADABSVG,
  WormholeBTCBSVG,
  WormholeCELOSVG as WormholeCELOv1SVG,
  WormholeDOGEBSVG,
  WormholeETHBSVG,
  WormholeETHSVG as WormholeETHv1SVG,
  WormholeFLOKIBSVG,
  WormholeSOLSVG as WormholeSOLv1SVG,
  WormholeUSDCBSVG,
  WormholeUSDCESVG,
  WormholeUSDCSVG,
  WormholeUSDTBSVG,
  WormholeUSDTESVG,
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
export * from './social-media-alternatives';

export const MAX_NUMBER_INPUT_VALUE = 9000000000000000;

export const GAS_COST = {
  [Network.TESTNET]: 3_00_000_000,
  [Network.DEVNET]: 3_00_000_000,
  [Network.MAINNET]: 1_000_000_000,
};

export enum StakeState {
  Stake,
  Unstake,
}

export const SUI_EXPLORER_URL = 'https://explorer.sui.io';

export const SUI_VISION_EXPLORER_URL = 'https://suivision.xyz';

export const TOKENS_SVG_MAP = {
  default: UnknownCoinV1SVG,
  [COIN_TYPE[Network.DEVNET].BNB]: BinanceSVG,
  [COIN_TYPE[Network.DEVNET].BTC]: BitcoinSVG,
  [COIN_TYPE[Network.DEVNET].ETH]: EtherSVG,
  [COIN_TYPE[Network.DEVNET].SUI]: SuiSVG,
  [COIN_TYPE[Network.DEVNET].USDC]: USDCoinSVG,
  [COIN_TYPE[Network.DEVNET].USDT]: USDTv1SVG,
  [COIN_TYPE[Network.DEVNET].IPX]: InterestTokenSVG,
  [COIN_TYPE[Network.TESTNET].BNB]: BinanceSVG,
  [COIN_TYPE[Network.TESTNET].BTC]: BitcoinSVG,
  [COIN_TYPE[Network.TESTNET].ETH]: EtherSVG,
  [COIN_TYPE[Network.TESTNET].SUI]: SuiSVG,
  [COIN_TYPE[Network.TESTNET].USDC]: USDCoinSVG,
  [COIN_TYPE[Network.TESTNET].USDT]: USDTv1SVG,
  [COIN_TYPE[Network.TESTNET].IPX]: InterestTokenSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH]: WormholeETHv1SVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]: WormholeUSDCSVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]: WormholeUSDTSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO]: WormholeCELOv1SVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX]: WormholeWAVAXSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB]: WormholeWBNBSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM]: WormholeWFTMSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC]: WormholeWMATICSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA]: WormholeADABSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]: WormholeBTCBSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]: WormholeBTCBSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE]: WormholeDOGEBSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH]: WormholeETHBSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI]: WormholeFLOKIBSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC]: WormholeUSDCBSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT]: WormholeUSDTBSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT]: WormholeUSDTBSVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]: WormholeUSDCESVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]: WormholeUSDTESVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL]: WormholeSOLv1SVG,
};

// TODO WHAT IS THE NEW DEFAULT UNKNOWN COIN:??
export const TOKENS_SVG_MAP_V2 = {
  default: UnknownCoinSVG,
  [COIN_TYPE[Network.DEVNET].BNB]: BNBSVG,
  [COIN_TYPE[Network.DEVNET].BTC]: BTCSVG,
  [COIN_TYPE[Network.DEVNET].ETH]: ETHSVG,
  [COIN_TYPE[Network.DEVNET].SUI]: SUISVG,
  [COIN_TYPE[Network.DEVNET].USDC]: USDCoinSVG,
  [COIN_TYPE[Network.DEVNET].USDT]: USDTSVG,
  [COIN_TYPE[Network.DEVNET].IPX]: InterestTokenSVG,
  [COIN_TYPE[Network.TESTNET].BNB]: BNBSVG,
  [COIN_TYPE[Network.TESTNET].BTC]: BTCSVG,
  [COIN_TYPE[Network.TESTNET].ETH]: ETHSVG,
  [COIN_TYPE[Network.TESTNET].SUI]: SUISVG,
  [COIN_TYPE[Network.TESTNET].USDC]: USDCoinSVG,
  [COIN_TYPE[Network.TESTNET].USDT]: USDTSVG,
  [COIN_TYPE[Network.TESTNET].IPX]: InterestTokenSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA]: WormholeADABSCSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]: WormholeBTCBSCSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]: WormholeBTCBSCSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE]: WormholeDOGEBSCSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH]: WormholeETHBSCSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI]: WormholeFLOKIBSCSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC]: WormholeUSDCBSCSVG,
  [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT]: WormholeUSDTBSCSVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]: WormholeUSDCETHSVG,
  [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]: WormholeUSDTETHSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH]: WormholeETHSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO]: WormholeCELOSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX]: WormholeAVAXSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB]: WormholeBNBSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM]: WormholeFTMSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC]: WormholeMATICSVG,
  [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL]: WormholeSOLSVG,
};

export const MILLISECONDS_PER_YEAR = 31540000000;

export const TOAST_DURATION = 10000;

export const TREASURY =
  '0xdd224f2287f0b38693555c6077abe85fcb4aa13e355ad54bc167611896b007e6\n';

export const NETWORK_RECORD = {
  [Network.DEVNET]: 'devnet',
  [Network.TESTNET]: 'testnet',
  [Network.MAINNET]: 'mainnet',
};
