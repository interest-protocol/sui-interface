import { pathOr } from 'ramda';

export const getAllocationPoints = pathOr('0', [
  'details',
  'data',
  'fields',
  'value',
  'fields',
  'allocation_points',
]);

export const getFarmBalance = pathOr('0', [
  'details',
  'data',
  'fields',
  'value',
  'balance_value',
]);

export const getPoolLPCoinSupply = pathOr('0', [
  'details',
  'data',
  'fields',
  'value',
  'lp_coin_supply',
  'fields',
  'value',
]);

const getPoolBalance = (pairPosition: 0 | 1) =>
  pathOr('0', [
    'details',
    'data',
    'fields',
    'value',
    'fields',
    `balance_${pairPosition ? 'x' : 'y'}`,
  ]);

export const getPoolCoin0Balance = getPoolBalance(0);

export const getPoolCoin1Balance = getPoolBalance(1);
