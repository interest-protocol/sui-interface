import { CoinMetadata } from '@mysten/sui.js/src/types';

import { CoinData } from '@/interface';
import { getSymbolByType } from '@/utils';

export const makeToken = (
  type: string,
  token: null | CoinData,
  coinMetadata: undefined | CoinMetadata
): CoinData => {
  if (token) return token;

  if (coinMetadata)
    return {
      decimals: coinMetadata.decimals,
      symbol: coinMetadata.symbol,
      type,
    };

  return {
    decimals: 0,
    type,
    symbol: getSymbolByType(type),
  };
};
