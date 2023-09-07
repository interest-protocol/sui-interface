import { DERIVATED_SUI_SYMBOL } from '../../lsd.type';

export interface CoinInfoProps {
  coin: DERIVATED_SUI_SYMBOL | 'Sui';
  amount: number;
}

export interface ExchangeRateProps {
  exchangeRateData: Array<[CoinInfoProps, CoinInfoProps]>;
}
