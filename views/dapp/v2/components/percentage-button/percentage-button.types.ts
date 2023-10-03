export interface PercentageButtonProps {
  total: number;
  value: 25 | 50 | 75 | 100;
  onSelect: (value: string) => void;
  isFilled?: boolean;
}
