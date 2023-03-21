import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { pathOr } from 'ramda';

import { COIN_DECIMALS, COIN_TYPE_TO_SYMBOL, Network } from '@/constants';
import { CoinData } from '@/interface';
import { getSymbolByType, parseBigNumberish } from '@/utils';

import { Web3ManagerSuiObject } from './web3-manager.types';

export const parseCoins = (
  data: PaginatedCoins | undefined | never[],
  localTokens: Record<string, CoinData>
) => {
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
          pathOr(null, [Network.DEVNET, type], COIN_TYPE_TO_SYMBOL) ??
          pathOr(null, [type, 'symbol'], localTokens) ??
          getSymbolByType(type) ??
          type;

        const decimals =
          pathOr(null, [Network.DEVNET, type], COIN_DECIMALS) ??
          pathOr(-1, [type, 'decimals'], localTokens);

        const updatedMap = {
          ...map,
          [type]: {
            type,
            symbol,
            decimals,
            totalBalance: currentCoinBalance,
            objects: [object],
          },
        };

        const updatedList = [
          ...list,
          {
            type,
            symbol,
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
