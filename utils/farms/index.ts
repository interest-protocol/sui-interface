import { MoveCallTransaction } from '@mysten/sui.js';
import { pathOr } from 'ramda';

import {
  COINS_PACKAGE_ID,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { UseGetFarmDataArgs } from '@/views/dapp/farms/farms.types';

import { provider } from '../provider';

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
          objectId,
          farmArray,
          accountData: x,
        }))
        // User never deposited - so it will throw an error
        .catch(() => ({
          objectId,
          farmArray,
          accountData: null,
        }))
    );

  return {
    objectId,
    farmArray,
    accountData: null,
  };
};

export const getAllocationPoints = (index: number) =>
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

export const getReserve = (index: number) =>
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

export const getBalance = (index: number, pairPosition: 0 | 1) =>
  pathOr('0', [
    'farmArray',
    index,
    'details',
    'data',
    'fields',
    'value',
    'fields',
    `balance_${pairPosition ? 'x' : 'y'}`,
  ]);

export const getToken = (index: number) =>
  pathOr('', [
    'farmArray',
    index,
    'details',
    'data',
    'fields',
    'value',
    'type',
  ]);
