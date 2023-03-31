import BigNumber from 'bignumber.js';
import { isEmpty, propOr } from 'ramda';

import {
  Web3ManagerState,
  Web3ManagerSuiObject,
} from '@/components/web3-manager/web3-manager.types';
import { COIN_TYPE, GAS_COST, Network } from '@/constants';

export const addCoinTypeToTokenType = (x: string): string =>
  `0x2::coin::Coin<${x}>`;

export const isSymbol = (text: string): boolean =>
  new RegExp(/^[A-Z-]+$/g).test(text);

export const isType = (text: string): boolean =>
  new RegExp(/0x[a-z0-9]+::[a-z0-9_]+::[a-zA-Z0-9]+/i).test(text);

export const getSymbolByType = (type: string): string => {
  const poolTokens = type
    .match(/::[a-z0-9_]+::+([^>,]+).+?::[a-z0-9_]+::([^>,]+)/i)
    ?.filter(isSymbol)
    .map((text) => text.match(/[A-Z0-9]+/g)?.[0]);

  if (!poolTokens)
    return (
      type
        .match(/::[a-z0-9_]+::+([^,]+)/i)
        ?.filter(isSymbol)
        .join('-') ?? ''
    );

  return poolTokens.join('-');
};

export const safeSymbol = (symbol: string, type: string): string => {
  if (isSymbol(symbol)) return symbol;

  const newSymbol =
    getSymbolByType(type) ||
    type.match(/[a-zA-Z0-9]+/g)?.pop() ||
    type.slice(-4);

  return newSymbol;
};

export const getSafeTotalBalance = propOr(new BigNumber(0), 'totalBalance') as (
  x: Web3ManagerSuiObject
) => BigNumber;

export const getCoinTypeFromSupply = (x: string) => {
  if (!x) return '';
  const r = x.split('Supply')[1];
  return r.substring(1, r.length - 1);
};

export const getCoinIds = (
  network: Network,
  coinsMap: Web3ManagerState['coinsMap'],
  type: string,
  gasCost?: number
) => {
  const cost = gasCost ? gasCost : GAS_COST[network];
  if (isEmpty(coinsMap)) return [];
  const object = coinsMap[type];
  if (!object) return [];
  if (type === COIN_TYPE[network].SUI) {
    const suiObjects = [...object.objects];
    const gasObjectIndex = suiObjects
      .sort((a, b) => (a.balance > b.balance ? 1 : -1))
      .findIndex((elem) => elem.balance >= cost);

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
