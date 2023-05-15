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
  },
  {
    name: 'sui-ethb',
    points: 1000,
    percentage: 14,
    Illustration: () => <Illustration CoinA={SUI} CoinB={ETHB} />,
  },
  {
    name: 'sui-eth',
    points: 1000,
    percentage: 14,
    Illustration: () => <Illustration CoinA={SUI} CoinB={ETH} />,
  },
  {
    name: 'sui-bnb',
    points: 800,
    percentage: 11,
    Illustration: () => <Illustration CoinA={SUI} CoinB={BNB} />,
  },
  {
    name: 'sui-usdcb',
    points: 900,
    percentage: 13,
    Illustration: () => <Illustration CoinA={SUI} CoinB={USDCB} />,
  },
  {
    name: 'sui-usdc',
    points: 900,
    percentage: 12,
    Illustration: () => <Illustration CoinA={SUI} CoinB={USDC} />,
  },
  {
    name: 'usdcb-usdtb',
    points: 600,
    percentage: 8,
    Illustration: () => <Illustration CoinA={USDCB} CoinB={USDTB} />,
  },
  {
    name: 'usdc-usdcb',
    points: 600,
    percentage: 8,
    Illustration: () => <Illustration CoinA={USDC} CoinB={USDCB} />,
  },
  {
    name: 'sui-dogeb',
    points: 300,
    percentage: 4,
    Illustration: () => <Illustration CoinA={SUI} CoinB={DOGEB} />,
  },
  {
    name: 'sui-flokib',
    points: 500,
    percentage: 7,
    Illustration: () => <Illustration CoinA={SUI} CoinB={FLOKIB} />,
  },
];
