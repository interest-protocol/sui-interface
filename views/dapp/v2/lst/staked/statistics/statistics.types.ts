export interface TrendInfoProps {
  isTrendUp?: boolean;
  percentage: number;
  daysPast: number;
}

export interface SuiPriceInfoProps {
  amount: number;
}

export interface ChartProps {
  data: any;
}

export interface StatisticsProps {
  suiPrice: number;
  totalSuiStaked: string;
  totalISuiMinted: string;
  iSuiExchangeRate: string;
  totalActiveValidators: number;
}
