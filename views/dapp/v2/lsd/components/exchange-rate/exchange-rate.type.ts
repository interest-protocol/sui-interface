import { DERIVATED_SUI_SYMBOL } from '../../lsd.type';

export interface ExchangeRateItemProps {
  to: DERIVATED_SUI_SYMBOL;
  from: DERIVATED_SUI_SYMBOL;
  finalValue: number;
  initialValue: number;
}
