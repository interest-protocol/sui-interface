import { DERIVATED_SUI_SYMBOL } from '../../lsd.type';

export interface TrendInfoProps {
  isTrendUp?: boolean;
  percentage: number;
  daysPast: number;
}

export interface SuiPriceInfoProps {
  coin: DERIVATED_SUI_SYMBOL;
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
