export interface MaturityCardProps {
  id: string;
  date: string;
  amount: string;
  selected: boolean;
  onSelected: (date: string, amount: string, id: string) => void;
}
