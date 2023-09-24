import { DERIVATED_SUI_SYMBOL } from '../../../lst.types';

export interface AmountProps {
  symbol: DERIVATED_SUI_SYMBOL;
  label: string;
  title: string;
  value: string;
  description?: string;
}
