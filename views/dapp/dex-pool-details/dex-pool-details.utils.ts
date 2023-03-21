import { CoinMetadata } from '@mysten/sui.js/src/types';

import { CoinData } from '@/interface';

import { safeSymbol } from './../../../utils/coin/index';

export const makeToken = (
  type: string,
  token: null | CoinData,
  coinMetadata: undefined | CoinMetadata
): CoinData => {
  if (token) return token;

  if (coinMetadata)
    return {
      symbol: coinMetadata.symbol,
      decimals: coinMetadata.decimals,
      type,
    };

  return {
    decimals: 0,
    type,
    symbol: safeSymbol(type, type),
  };
};
