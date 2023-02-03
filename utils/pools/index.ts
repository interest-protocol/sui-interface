import BigNumber from 'bignumber.js';

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
