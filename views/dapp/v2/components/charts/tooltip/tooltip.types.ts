export interface CustomTooltipProps {
  active?: boolean;
  inDollars?: boolean;
  description?: string;
  payload?: Array<{
    value: number;
    dataKey: string;
    payload: { description?: string; label?: string };
  }>;
}
