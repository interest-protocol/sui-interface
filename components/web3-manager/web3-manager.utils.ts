import { pathOr } from 'ramda';

import { COIN_DECIMALS, COIN_TYPE_TO_SYMBOL } from '@/constants';
import { parseBigNumberish, safeSymbol } from '@/utils';

import { ParseCoinsArg, Web3ManagerSuiObject } from './web3-manager.types';

export const parseCoins = ({ data, localTokens, network }: ParseCoinsArg) => {
  if (!data)
    return [[], {}] as [
      ReadonlyArray<Web3ManagerSuiObject>,
      Record<string, Web3ManagerSuiObject>
    ];

  if (!('data' in data))
    return [[], {}] as [
      ReadonlyArray<Web3ManagerSuiObject>,
      Record<string, Web3ManagerSuiObject>
    ];

  return data.data.reduce(
    (acc, object) => {
      const type = object.coinType;
      const list = acc[0];
      const map = acc[1];
      const currentCoinBalance = parseBigNumberish(object.balance);
      if (type) {
        const currentCoin = map[type];

        if (currentCoin) {
          const updatedMap = {
            ...map,
            [type]: {
              ...currentCoin,
              totalBalance: currentCoin.totalBalance.plus(currentCoinBalance),
              objects: [...currentCoin.objects, object],
            },
          };

          const updatedList = list.map((elem) => {
            if (elem.type === type) {
              return {
                ...elem,
                totalBalance: elem.totalBalance.plus(currentCoinBalance),
                objects: [...elem.objects, object],
              };
            }
            return elem;
          });

          return [updatedList, updatedMap] as [
            ReadonlyArray<Web3ManagerSuiObject>,
            Record<string, Web3ManagerSuiObject>
          ];
        }

        const symbol =
          pathOr(null, [network, type], COIN_TYPE_TO_SYMBOL) ??
          pathOr(null, [type, 'symbol'], localTokens) ??
          safeSymbol(type, type);

        const decimals =
          pathOr(null, [network, type], COIN_DECIMALS) ??
          pathOr(-1, [type, 'decimals'], localTokens);

        const symbolArray = symbol.trim().split(' ');

        const updatedMap = {
          ...map,
          [type]: {
            type,
            symbol: symbolArray[symbolArray.length - 1],
            decimals,
            totalBalance: currentCoinBalance,
            objects: [object],
          },
        };

        const updatedList = [
          ...list,
          {
            type,
            symbol: symbolArray[symbolArray.length - 1],
            decimals,
            totalBalance: currentCoinBalance,
            objects: [object],
          },
        ];

        return [updatedList, updatedMap] as [
          ReadonlyArray<Web3ManagerSuiObject>,
          Record<string, Web3ManagerSuiObject>
        ];
      }

      return acc;
    },
    [[], {}] as [
      ReadonlyArray<Web3ManagerSuiObject>,
      Record<string, Web3ManagerSuiObject>
    ]
  );
};
