import { TOKEN_SYMBOL } from '@/lib';

export interface TrendInfoProps {
  isTrendUp?: boolean;
  percentage: number;
  daysPast: number;
}

export interface SuiPriceInfoProps {
  coin: {
    decimals: number;
    symbol: TOKEN_SYMBOL;
    type: string;
  };
  amount: number;
}

export interface ChartProps {
  data: any;
}

export interface SuiPriceMarketProps {
  priceInfo: SuiPriceInfoProps;
  trendInfo: TrendInfoProps;
  chartData: any;
}
