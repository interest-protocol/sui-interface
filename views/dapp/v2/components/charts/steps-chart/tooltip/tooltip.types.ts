import { LineProps } from 'recharts';

export interface CustomTooltipProps {
  active?: boolean;
  payload?: LineProps[];
  label?: string;
  description?: string;
}
