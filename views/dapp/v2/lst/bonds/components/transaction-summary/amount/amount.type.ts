import { DERIVATED_SUI_SYMBOL } from '../../../../lst.types';

export interface FieldElement {
  symbol: DERIVATED_SUI_SYMBOL;
  description?: string;
  title: string;
}
export interface AmountProps {
  label: string;
  fieldList: ReadonlyArray<FieldElement>;
  value: string;
}
