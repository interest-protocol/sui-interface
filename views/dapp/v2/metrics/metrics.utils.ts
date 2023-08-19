import { Network } from '@interest-protocol/sui-amm-sdk';
import { CoinInfo, COINS_MAP } from 'interface/sentio';

import { RECOMMENDED_POOLS } from '@/constants';

import { IPool } from '../../dex-pool/pool.types';

export const getPoolFromMetricLabel = (value: string): IPool | undefined => {
  const [type, symbols] = value.split('-');

  const isStable = type === 'stable';

  const [symbolA, symbolB] = symbols.split('/');

  const COINS_LIST: ReadonlyArray<CoinInfo> = Object.values(COINS_MAP);

  const COIN_TYPES_BY_SYMBOL: Record<string, string> = COINS_LIST.reduce(
    (acc, { symbol, type }) => ({ ...acc, [symbol]: type }),
    {}
  );

  const [typeA, typeB] = [
    COIN_TYPES_BY_SYMBOL[symbolA],
    COIN_TYPES_BY_SYMBOL[symbolB],
  ];

  const pool = RECOMMENDED_POOLS[Network.MAINNET].find(
    ({ stable, token0: { type: type0 }, token1: { type: type1 } }) =>
      stable === isStable && type0 === typeA && typeB === type1
  ) as IPool | undefined;

  return pool;
};

export const getCoinFromMetricLabel = (value: string): CoinInfo => {
  const COINS_LIST: ReadonlyArray<CoinInfo> = Object.values(COINS_MAP);

  const COIN_BY_SYMBOL: Record<string, CoinInfo> = COINS_LIST.reduce(
    (acc, coin) => ({ ...acc, [coin.symbol]: coin }),
    {}
  );

  return COIN_BY_SYMBOL[value];
};
