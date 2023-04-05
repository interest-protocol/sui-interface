import { SuiObjectResponse } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';

import { CoinPriceRecord } from '@/hooks';
import { CoinData, Pool } from '@/interface';

export const getOptimalCoin0Value = (
  coinYAmount: BigNumber,
  coinXReserves: BigNumber,
  coinYReserves: BigNumber
) => coinYAmount.multipliedBy(coinXReserves).dividedBy(coinYReserves);

export const getOptimalCoin1Value = (
  coinXAmount: BigNumber,
  coinXReserves: BigNumber,
  coinYReserves: BigNumber
) => coinXAmount.multipliedBy(coinYReserves).dividedBy(coinXReserves);

export const calculateLPCoinPrice = (
  prices: CoinPriceRecord,
  coin0: CoinData,
  coin1: CoinData,
  pool: Pool
): number => {
  if (pool.lpCoinSupply.isZero()) return 0;

  const coin0Price = prices[coin0.type];

  if (coin0Price?.price)
    return (
      pool.balanceX
        // convert from fixed point to float
        .div(BigNumber(10).pow(coin0.decimals))
        .multipliedBy(coin0Price.price)
        .div(pool.lpCoinSupply)
        .toNumber()
    );

  const coin1Price = prices[coin1.type];

  if (coin1Price?.price)
    return (
      pool.balanceY
        // convert from fixed point to float
        .div(BigNumber(10).pow(coin1.decimals))
        .multipliedBy(coin1Price.price)
        .div(pool.lpCoinSupply)
        .toNumber()
    );

  return 0;
};

export const parseSuiObjectDataToPools = (x: SuiObjectResponse[]) =>
  x.map(({ data }) => {
    const balanceX = pathOr('0', ['content', 'fields', 'balance_x'], data);
    const balanceY = pathOr('0', ['content', 'fields', 'balance_y'], data);
    const lpCoinSupply = pathOr(
      '0',
      ['content', 'fields', 'lp_coin_supply', 'fields', 'value'],
      data
    );

    return {
      balanceX: BigNumber(balanceX),
      balanceY: BigNumber(balanceY),
      lpCoinSupply: BigNumber(lpCoinSupply),
    };
  });
