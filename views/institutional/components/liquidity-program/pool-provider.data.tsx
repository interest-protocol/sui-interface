import { Network } from '@interest-protocol/sui-sdk';

import { COIN_POOL } from '@/constants';

import {
  BNB,
  BTCB,
  DOGEB,
  ETH,
  ETHB,
  FLOKIB,
  SUI,
  USDC,
  USDCB,
  USDTB,
} from '../svg/liquidity-program';
import { PoolProviderProps } from './liquidity-program.types';
import { Illustration } from './pool-provider-illustrations';

export const POOL_PROVIDERS_LIST: ReadonlyArray<PoolProviderProps> = [
  {
    name: 'sui-btcb',
    points: 600,
    percentage: 8,
    Illustration: () => <Illustration CoinA={SUI} CoinB={BTCB} />,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB,
  },
  {
    name: 'sui-ethb',
    points: 1000,
    percentage: 14,
    Illustration: () => <Illustration CoinA={SUI} CoinB={ETHB} />,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH,
  },
  {
    name: 'sui-eth',
    points: 1000,
    percentage: 14,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH,
    Illustration: () => <Illustration CoinA={SUI} CoinB={ETH} />,
  },
  {
    name: 'sui-bnb',
    points: 800,
    percentage: 11,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB,
    Illustration: () => <Illustration CoinA={SUI} CoinB={BNB} />,
  },
  {
    name: 'sui-usdcb',
    points: 900,
    percentage: 13,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC,
    Illustration: () => <Illustration CoinA={SUI} CoinB={USDCB} />,
  },
  {
    name: 'sui-usdc',
    points: 900,
    percentage: 12,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC,
    Illustration: () => <Illustration CoinA={SUI} CoinB={USDC} />,
  },
  {
    name: 'usdcb-usdtb',
    points: 600,
    percentage: 8,
    objectId:
      COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT,
    Illustration: () => <Illustration CoinA={USDCB} CoinB={USDTB} />,
  },
  {
    name: 'usdc-usdcb',
    points: 600,
    percentage: 8,
    Illustration: () => <Illustration CoinA={USDC} CoinB={USDCB} />,
    objectId:
      COIN_POOL[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC,
  },
  {
    name: 'sui-dogeb',
    points: 300,
    percentage: 4,
    Illustration: () => <Illustration CoinA={SUI} CoinB={DOGEB} />,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE,
  },
  {
    name: 'sui-flokib',
    points: 500,
    percentage: 7,
    objectId: COIN_POOL[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI,
    Illustration: () => <Illustration CoinA={SUI} CoinB={FLOKIB} />,
  },
];
