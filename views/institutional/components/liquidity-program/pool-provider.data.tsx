import { PoolProviderProps } from './liquidity-program.types';
import { Illustration } from './pool-provider-illustrations';

export const POOL_PROVIDERS_LIST: ReadonlyArray<PoolProviderProps> = [
  {
    name: 'sui-btcb',
    Illustration: () => <Illustration CoinA={} CoinB={} />,
  },
  {
    name: 'sui-ethb',
    Illustration: SUIUSDCIllustration,
  },
  {
    name: 'sui-eth',
    Illustration: SUIBTCIllustration,
  },
  {
    name: 'sui-bnb',
    Illustration: USDCUSDTIllustration,
  },
  {
    name: 'sui-usdcb',
    Illustration: SUIEthereumIllustration,
  },
  {
    name: 'sui-usdc',
    Illustration: SUIEthereumIllustration,
  },
  {
    name: 'usdcb-usdtb',
    Illustration: SUIUSDCIllustration,
  },
  {
    name: 'usdc-usdcb',
    Illustration: SUIBTCIllustration,
  },
  {
    name: 'sui-dogeb',
    Illustration: USDCUSDTIllustration,
  },
  {
    name: 'sui-flokib',
    Illustration: SUIEthereumIllustration,
  },
];
