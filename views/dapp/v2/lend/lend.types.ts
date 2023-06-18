export interface CardLendProps {
  icon: 'percentage' | 'box-up' | 'box-down' | 'special';
  description: string;
  isTrendUp: boolean;
  trendAmount: string;
  symbol: '%' | '$' | 'USD';
  amount: string;
}
