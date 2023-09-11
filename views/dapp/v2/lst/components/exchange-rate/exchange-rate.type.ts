import { DERIVATED_SUI_SYMBOL } from '../../lst.types';

export interface ExchangeRateItemProps {
  to: DERIVATED_SUI_SYMBOL;
  from: DERIVATED_SUI_SYMBOL;
  finalValue: number;
  initialValue: number;
}

export interface ExchangeRateProps {
  iSuiExchangeRate: number;
}
