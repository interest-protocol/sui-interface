import { TOKEN_SYMBOL } from '@/lib';

interface CoinProps {
  decimals: number;
  symbol: TOKEN_SYMBOL;
  type: string;
}

export interface CoinInfoProps {
  coin: CoinProps;
  amount: number;
}

export interface GetSVGProps {
  type: string;
}

export interface ExchangeRateProps {
  exchangeRateData: Array<[CoinInfoProps, CoinInfoProps]>;
}
