import BigNumber from 'bignumber.js';
import { propOr } from 'ramda';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { FixedPointMath } from '@/sdk';
import { getCoinTypeFromSupply, getSafeTotalBalance } from '@/utils';
import {
  getAllocationPoints,
  getBalance,
  getReserve,
  getToken,
} from '@/utils/farms';

import { Pool } from '../dex-pool-details/dex-pool-details.types';
import { SafeUserFarmData } from './farm-details.types';

export const parseFarmData = (
  data: any,
  prices: ReadonlyArray<{ type: string; price: number }>,
  volatilePool: Pool,
  coinsMap: Record<string, Web3ManagerSuiObject>
): SafeUserFarmData => {
  // TODO: unused price
  console.log(prices);
  console.log('>> data ::: ', data);

  const currentPool =
    coinsMap[getCoinTypeFromSupply(propOr('', 'lpCoin', volatilePool))];

  const balance = getSafeTotalBalance(currentPool);

  // TODO: update these calculation values
  const id = ~~(Math.random() * 999999);
  const tvl = ~~(Math.random() * 9999);
  const allocation = FixedPointMath.from(BigNumber(0));
  const allocationPoints = BigNumber(10e9 * +getAllocationPoints(0)(data));
  const reserve0 = BigNumber(10e9 * +getReserve(0)(data));
  const reserve1 = BigNumber(10e9 * +getReserve(1)(data));
  const balanceX = getBalance(1, 0)(data);
  const balanceY = getBalance(1, 1)(data);
  const token0 = getToken(0)(data);
  const token1 = getToken(1)(data);
  const stakingAmount = BigNumber(0);
  const totalStakedAmount = BigNumber(10e9 * +data.account ? 0 : 1);
  const stakingTokenPrice = BigNumber((+balanceX / +balanceY) * 10 ** 9);
  const apr = FixedPointMath.from(
    BigNumber(
      (10e9 * +getAllocationPoints(0)(data)) /
        (+getAllocationPoints(1)(data) || 1)
    )
  );

  const stakingTokenObjectId = data.objectId;

  const pendingRewards = BigNumber(0);

  return {
    id,
    tvl,
    apr,
    token0,
    token1,
    balance,
    reserve0,
    reserve1,
    allocation,
    stakingAmount,
    pendingRewards,
    allocationPoints,
    stakingTokenPrice,
    totalStakedAmount,
    stakingTokenObjectId,
    // TODO: update these hardcoded value
    isLive: true,
    stable: false,
  };
};
