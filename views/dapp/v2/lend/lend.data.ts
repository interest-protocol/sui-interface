import { CardLendProps } from './lend.types';

export const CARD_HEADERS: ReadonlyArray<CardLendProps> = [
  {
    icon: 'percentage',
    description: 'common.v2.lend.firstSection.netAPY',
    isTrendUp: true,
    trendAmount: '4.45',
    symbol: '%',
    amount: '0',
  },
  {
    icon: 'box-down',
    description: 'common.v2.lend.firstSection.supplyBalance',
    isTrendUp: false,
    trendAmount: '7.68',
    symbol: '$',
    amount: '000',
  },
  {
    icon: 'box-up',
    description: 'common.v2.lend.firstSection.borrowBalance',
    isTrendUp: false,
    trendAmount: '4.68',
    symbol: 'USD',
    amount: '0.12',
  },
  {
    icon: 'special',
    description: '',
    isTrendUp: false,
    trendAmount: '',
    symbol: 'USD',
    amount: '',
  },
];
