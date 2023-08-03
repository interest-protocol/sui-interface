import {
  BTCSVG,
  SUISVG,
  TVLSVG,
  VolumeLastSVG,
  VolumeSVG,
} from '@/components/svg/v2';

export interface DataPoint {
  date: Date;
  day: string;
  amount: number;
  description: string;
}

export const TOP_INFO_CARDS_DATA = [
  {
    Icon: TVLSVG,
    description: 'metrics.infoCards.tvl',
  },
  {
    Icon: VolumeLastSVG,
    description: 'metrics.infoCards.dailyTradingVolume',
  },
  {
    Icon: VolumeSVG,
    description: 'metrics.infoCards.accumulatedVolume',
  },
];

export const TOP_POOLS_DATA = [
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: false,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: false,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: false,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: true,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: true,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: false,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: true,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
  {
    firstPair: 'SUI',
    firstPairIcon: SUISVG,
    secondPair: 'BTCB',
    secondPairIcon: BTCSVG,
    stable: false,
    TVL: 100.0,
    dayVolume: 100.0,
    weekVolume: 100.0,
    monthVolume: 100.0,
  },
];
