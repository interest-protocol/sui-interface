export interface PercentageButtonProps {
  total: number;
  isFilled?: boolean;
  disabled?: boolean;
  value: 25 | 50 | 75 | 100;
  onSelect: (value: string) => void;
}
