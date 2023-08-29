import { SwapSVG, TVLSVG, VolumeLastSVG } from '@/components/svg/v2';
import Pools from '@/components/svg/v2/pools';

export const TOP_INFO_CARDS_DATA = [
  {
    money: true,
    Icon: TVLSVG,
    description: 'metrics.infoCards.tvl',
  },
  {
    money: false,
    Icon: Pools,
    description: 'metrics.infoCards.pools',
  },
  {
    money: false,
    Icon: SwapSVG,
    description: 'metrics.infoCards.swaps',
  },
  {
    money: true,
    Icon: VolumeLastSVG,
    description: 'metrics.infoCards.dailyTradingVolume',
  },
];
