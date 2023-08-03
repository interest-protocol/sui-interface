export interface CustomTooltipProps {
  active?: boolean;
  description?: string;
  payload?: Array<{
    value: number;
    dataKey: string;
    payload: { description: string };
  }>;
}
