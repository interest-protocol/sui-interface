import { CoinUSDInfo } from '@/hooks/use-get-coins-usd-info';

export interface ILSTContext {
  suiCoinInfo: CoinUSDInfo | null;
  last30daysPrice: ReadonlyArray<Pick<CoinUSDInfo, 'timestamp' | 'price'>>;
}
