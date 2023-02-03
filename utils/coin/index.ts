import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { isEmpty, propOr } from 'ramda';

import {
  Web3ManagerState,
  Web3ManagerSuiObject,
} from '@/components/web3-manager/web3-manager.types';
import { COIN_TYPE } from '@/constants';
import { FixedPointMath } from '@/sdk';

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
      .sort((a, b) => (+a! > +b! ? 1 : -1))
      .findIndex((elem) =>
        FixedPointMath.toBigNumber(elem.balance || '0').gte(
          FixedPointMath.toBigNumber(9000)
        )
      );
    return suiObjects
      .filter((_, index) => index !== gasObjectIndex)
      .map((elem) => elem.coinObjectId);
  }

  return object.objects.map((elem) => elem.coinObjectId);
};
