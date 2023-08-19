import { BaseChartProps } from './base-chart.types';

export interface ChartsProps extends BaseChartProps {
  label?: string;
  type: 'bar' | 'steps' | 'area' | 'pie';
}
