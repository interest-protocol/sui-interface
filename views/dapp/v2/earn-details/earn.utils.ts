import { CoinData } from '@/interface';

export const getSymbolsByCoins = (coins: ReadonlyArray<CoinData>): string => {
  return coins.length === 1
    ? coins[0].symbol
    : coins.map((coin) => coin.symbol).join(' - ');
};
