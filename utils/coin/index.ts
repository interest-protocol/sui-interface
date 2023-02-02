import BigNumber from 'bignumber.js';
import { propOr } from 'ramda';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';

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
