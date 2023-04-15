import { SUI_TYPE_ARG } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { propOr } from 'ramda';

import {
  Web3ManagerState,
  Web3ManagerSuiObject,
} from '@/components/web3-manager/web3-manager.types';

import { CreateVectorParameterArgs } from './coin.types';

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

export const processSafeAmount = (
  amount: BigNumber,
  type: string,
  coinsMap: Web3ManagerState['coinsMap']
): BigNumber => {
  const object = coinsMap[type];

  if (!object) return amount;

  return amount.gt(object.totalBalance) ? object.totalBalance : amount;
};

export const getCoinsFromPoolType = (poolType: string): [string, string] => [
  poolType.split('<')[1].split(',')[0].trim(),
  poolType.split('<')[1].split(',')[1].split('>')[0].trim(),
];

export const createVectorParameter = ({
  txb,
  type,
  coinsMap,
  amount,
}: CreateVectorParameterArgs) => {
  if (type === SUI_TYPE_ARG) {
    const [coin] = txb.splitCoins(txb.gas, [txb.pure(amount.toString())]);
    return txb.makeMoveVec({
      objects: [coin],
    });
  }

  return txb.makeMoveVec({
    objects: coinsMap[type]
      ? coinsMap[type].objects.map((x) => txb.object(x.coinObjectId))
      : [],
  });
};

export const createObjectsParameter = ({
  txb,
  type,
  coinsMap,
  amount,
}: CreateVectorParameterArgs) => {
  if (type === SUI_TYPE_ARG) {
    const [coin] = txb.splitCoins(txb.gas, [txb.pure(amount.toString())]);
    return [coin];
  }

  return coinsMap[type]
    ? coinsMap[type].objects.map((x) => txb.object(x.coinObjectId))
    : [];
};
