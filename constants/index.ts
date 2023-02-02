import { Network } from '@mysten/sui.js';

import {
  BinanceSVG,
  BitcoinSVG,
  DAISVG,
  EtherSVG,
  SuiSVG,
  UnknownCoinSVG,
  USDCoinSVG,
  USDTSVG,
} from '@/svg';

import { COIN_TYPE } from './coins';

export * from './coins';
export * from './dex';
export * from './faucet';
export * from './pools';
export * from './routes';
export * from './social-media';

export const MAX_NUMBER_INPUT_VALUE = 9000000000000000;

export const SUI_EXPLORER = {
  [Network.DEVNET]: 'https://explorer.sui.io',
};

export const TOKENS_SVG_MAP = {
  default: UnknownCoinSVG,
  [COIN_TYPE[Network.DEVNET].BNB]: BinanceSVG,
  [COIN_TYPE[Network.DEVNET].BTC]: BitcoinSVG,
  [COIN_TYPE[Network.DEVNET].DAI]: DAISVG,
  [COIN_TYPE[Network.DEVNET].ETH]: EtherSVG,
  [COIN_TYPE[Network.DEVNET].SUI]: SuiSVG,
  [COIN_TYPE[Network.DEVNET].USDC]: USDCoinSVG,
  [COIN_TYPE[Network.DEVNET].USDT]: USDTSVG,
};
