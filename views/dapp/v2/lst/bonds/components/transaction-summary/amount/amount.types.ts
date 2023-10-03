import { DERIVATED_SUI_SYMBOL } from '../../../../lst.types';

export interface FieldElement {
  title: string;
  description?: string;
  symbol: DERIVATED_SUI_SYMBOL;
}

export interface AmountProps {
  value: string;
  isRedeem?: boolean;
  fieldList: ReadonlyArray<FieldElement>;
}
