import BigNumber from 'bignumber.js';
import { isEmpty, propOr } from 'ramda';

import {
  Web3ManagerState,
  Web3ManagerSuiObject,
} from '@/components/web3-manager/web3-manager.types';
import { COIN_TYPE, Network } from '@/constants';

export const addCoinTypeToTokenType = (x: string): string =>
  `0x2::coin::Coin<${x}>`;

export const getSafeTotalBalance = propOr(new BigNumber(0), 'totalBalance') as (
  x: Web3ManagerSuiObject
) => BigNumber;

export const getCoinTypeFromSupply = (x: string) => {
  if (!x) return '';
  const r = x.split('Supply')[1];
  return r.substring(1, r.length - 1);
};

export const getCoinIds = (
  coinsMap: Web3ManagerState['coinsMap'],
  type: string
) => {
  if (isEmpty(coinsMap)) return [];
  const object = coinsMap[type];
  if (!object) return [];
  if (type === COIN_TYPE[Network.DEVNET].SUI) {
    const suiObjects = [...object.objects];
    const gasObjectIndex = suiObjects
      .sort((a, b) => (a.balance > b.balance ? 1 : -1))
      .findIndex((elem) => elem.balance >= 9000);

    return suiObjects
      .filter((_, index) => index !== gasObjectIndex)
      .map((elem) => elem.coinObjectId);
  }

  return object.objects.map((elem) => elem.coinObjectId);
};

export const processSafeAmount = (
  amount: BigNumber,
  type: string,
  coinsMap: Web3ManagerState['coinsMap'],
  gas = 9000
): BigNumber => {
  const object = coinsMap[type];

  if (!object) return amount;

  const safeAmount = amount.gt(object.totalBalance)
    ? object.totalBalance
    : amount;

  if (
    type === COIN_TYPE[Network.DEVNET].SUI &&
    safeAmount.minus(gas).eq(object.totalBalance)
  ) {
    const suiObjects = [...object.objects];
    const sortedArray = suiObjects.sort((a, b) =>
      a.balance > b.balance ? 1 : -1
    );
    const elem = sortedArray.find((elem) => elem.balance >= gas);

    return elem
      ? safeAmount.minus(new BigNumber(elem.balance))
      : new BigNumber(0);
  }

  return safeAmount;
};
