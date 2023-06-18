import { CardLendProps } from './lend.types';

export const CARD_HEADERS: ReadonlyArray<CardLendProps> = [
  {
    icon: 'percentage',
    description: 'NET APY',
    isTrendUp: true,
    trendAmount: '4.45',
    symbol: '%',
    amount: '0',
  },
  {
    icon: 'box-down',
    description: 'Supply Balance',
    isTrendUp: false,
    trendAmount: '7.68',
    symbol: '$',
    amount: '000',
  },
  {
    icon: 'box-up',
    description: 'Borrow Balance',
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
