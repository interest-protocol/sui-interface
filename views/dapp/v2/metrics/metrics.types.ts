import { ChartsProps } from '../components/charts/charts.types';

export interface DataPoint {
  date: Date;
  day: string;
  amount: number;
  description: string;
}

export interface DataPie {
  label: string;
  amount: number;
}

export interface ChartContainerProps {
  header: HeaderChartContainerProps;
  isLoading: boolean;
  inDollars?: boolean;
  data: ReadonlyArray<DataPoint>;
  dataKey: string;
  xAxis: string;
  type: ChartsProps['type'];
}

export interface HeaderChartContainerProps {
  amount: string;
  description: string;
}
