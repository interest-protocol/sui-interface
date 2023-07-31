import {
  BorrowSVG,
  BTCSVG,
  LiquiditySVG,
  SUISVG,
  TVLSVG,
  VolumeSVG,
} from '@/components/svg/v2';

export interface DataPoint {
  date: string;
  description: string;
  day: number;
  amount: number;
}

export const TOP_INFO_CARDS_DATA = [
  {
    Icon: TVLSVG,
    description: 'metrics.infoCards.tvl',
  },
  {
    Icon: LiquiditySVG,
    description: 'metrics.infoCards.liquidityAdd',
  },
  {
    Icon: BorrowSVG,
    description: 'metrics.infoCards.liquidityRemove',
  },
  {
    Icon: VolumeSVG,
    description: 'metrics.infoCards.dailyTradingVolume',
  },
];

export const TOTAL_LIQUIDITY_DATA: DataPoint[] = [
  {
    date: '02 Jul, 2023',
    description: '02 Jul, 10:00 UTC',
    day: 2,
    amount: 1800,
  },
  {
    date: '05 Jul, 2023',
    description: '05 Jul, 12:00 UTC',
    day: 5,
    amount: 2100,
  },
  {
    date: '07 Jul, 2023',
    description: '07 Jul, 15:00 UTC',
    day: 7,
    amount: 2500,
  },
  {
    date: '09 Jul, 2023',
    description: '09 Jul, 18:00 UTC',
    day: 9,
    amount: 3200,
  },
  {
    date: '11 Jul, 2023',
    description: '11 Jul, 20:00 UTC',
    day: 11,
    amount: 2700,
  },
  {
    date: '13 Jul, 2023',
    description: '13 Jul, 22:00 UTC',
    day: 13,
    amount: 3100,
  },
  {
    date: '15 Jul, 2023',
    description: '15 Jul, 10:00 UTC',
    day: 15,
    amount: 3400,
  },
  {
    date: '16 Jul, 2023',
    description: '16 Jul, 12:00 UTC',
    day: 16,
    amount: 2900,
  },
  {
    date: '17 Jul, 2023',
    description: '17 Jul, 14:00 UTC',
    day: 17,
    amount: 3800,
  },
  {
    date: '18 Jul, 2023',
    description: '18 Jul, 16:00 UTC',
    day: 18,
    amount: 4200,
  },
  {
    date: '19 Jul, 2023',
    description: '19 Jul, 18:00 UTC',
    day: 19,
    amount: 3900,
  },
  {
    date: '20 Jul, 2023',
    description: '20 Jul, 20:00 UTC',
    day: 20,
    amount: 4000,
  },
  {
    date: '21 Jul, 2023',
    description: '21 Jul, 22:00 UTC',
    day: 21,
    amount: 3700,
  },
  {
    date: '22 Jul, 2023',
    description: '22 Jul, 10:00 UTC',
    day: 22,
    amount: 3200,
  },
  {
    date: '24 Jul, 2023',
    description: '24 Jul, 12:00 UTC',
    day: 24,
    amount: 2800,
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
