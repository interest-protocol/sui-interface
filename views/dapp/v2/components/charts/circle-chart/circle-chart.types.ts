import { BaseChartProps } from '../base-chart.types';

interface Props {
  label?: string;
}

export type CircleChartProps = Omit<BaseChartProps, 'xAxis'> & Props;
