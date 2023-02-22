import { MoveCallTransaction } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';

import {
  COINS_PACKAGE_ID,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { FixedPointMath } from '@/sdk';
import {
  SafeFarmData,
  UseGetFarmDataArgs,
} from '@/views/dapp/farms/farms.types';

import { provider } from '../provider';
const getAllocationPoints = (index: number) =>
  pathOr('0', [
    'farmArray',
    index,
    'details',
    'data',
    'fields',
    'value',
    'fields',
    'allocation_points',
  ]);

const getReserve = (index: number) =>
  pathOr('0', [
    'farmArray',
    index,
    'details',
    'data',
    'fields',
    'value',
    'fields',
    'balance',
  ]);

const getBalance = (index: number) =>
  pathOr('0', [
    'farmArray',
    index,
    'details',
    'data',
    'fields',
    'value',
    'fields',
    'balance',
  ]);

const getToken = (index: number) =>
  pathOr('', [
    'farmArray',
    index,
    'details',
    'data',
    'fields',
    'value',
    'type',
  ]);

export const parseFarmData = (data: any): SafeFarmData => {
  const id = ~~(Math.random() * 999999);
  const tvl = ~~(Math.random() * 9999);
  const allocation = FixedPointMath.from(BigNumber(0));
  const allocationPoints = BigNumber(10e9 * +getAllocationPoints(0)(data));
  const reserve0 = BigNumber(10e9 * +getReserve(0)(data));
  const reserve1 = BigNumber(10e9 * +getReserve(1)(data));
  const balance0 = BigNumber(10e9 * +getBalance(0)(data));
  const balance1 = BigNumber(10e9 * +getBalance(1)(data));
  const token0 = getToken(0)(data);
  const token1 = getToken(1)(data);
  const stakingAmount = BigNumber(0);
  const totalStakedAmount = BigNumber(10e9 * +data.account ? 0 : 1);
  const stakingTokenPrice = BigNumber(
    (10e9 * (+balance0 ?? 0)) / (+balance1 || 1)
  );
  const apr = FixedPointMath.from(
    BigNumber(
      (10e9 * +getAllocationPoints(0)(data)) /
        (+getAllocationPoints(1)(data) || 1)
    )
  );

  return {
    id,
    tvl,
    apr,
    token0,
    token1,
    reserve0,
    reserve1,
    allocation,
    isLive: true,
    stable: false,
    stakingAmount,
    allocationPoints,
    stakingTokenPrice,
    totalStakedAmount,
    stakingTokenAddress: '',
  };
};

export const getFarm = async ({
  objectId,
  poolObjectId,
  isSingleCoin,
  account,
  lpCoin,
}: UseGetFarmDataArgs) => {
  const array = isSingleCoin
    ? [provider.getObject(objectId)]
    : [provider.getObject(objectId), provider.getObject(poolObjectId)];

  const farmArray = await Promise.all(array);

  if (account)
    return (
      provider
        .devInspectTransaction(account, {
          kind: 'moveCall',
          data: {
            function: 'borrow_account',
            gasBudget: 5000,
            module: 'ipx',
            packageObjectId: COINS_PACKAGE_ID,
            typeArguments: [lpCoin.type],
            arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE, account],
          } as MoveCallTransaction,
        })
        .then((x) => ({
          farmArray,
          accountData: x,
        }))
        // User never deposited - so it will throw an error
        .catch(() => ({
          farmArray,
          accountData: null,
        }))
    );

  return {
    farmArray,
    accountData: null,
  };
};
