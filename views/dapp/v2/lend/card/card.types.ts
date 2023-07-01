export interface APRCardProps {
  icon: 'percentage' | 'box-up' | 'box-down' | 'special';
  description: string;
  isTrendUp: boolean;
  trendAmount: string;
  symbol: '%' | '$' | 'USD';
  amount: string;
  isLoading?: boolean;
  disabled?: boolean;
}
