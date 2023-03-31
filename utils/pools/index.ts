import { bcsForVersion, TransactionBlock } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';

import { OBJECT_RECORD } from '@/constants';
import { CoinPriceRecord } from '@/hooks';
import { CoinData } from '@/interface';
import { AddressZero } from '@/sdk';
import { getDevInspectData, getDevInspectType } from '@/utils/provider';

import { GetVolatilePoolsArgs, Pool } from './pools.types';

export const getOptimalCoin0Value = (
  coinYAmount: BigNumber,
  coinXReserves: BigNumber,
  coinYReserves: BigNumber
) => coinYAmount.multipliedBy(coinXReserves).dividedBy(coinYReserves);

export const getOptimalCoin1Value = (
  coinXAmount: BigNumber,
  coinXReserves: BigNumber,
  coinYReserves: BigNumber
) => coinXAmount.multipliedBy(coinYReserves).dividedBy(coinXReserves);

export const calculateLPCoinPrice = (
  prices: CoinPriceRecord,
  coin0: CoinData,
  coin1: CoinData,
  pool: Pool
): number => {
  if (pool.lpCoinSupply.isZero()) return 0;

  const coin0Price = prices[coin0.type];

  if (coin0Price?.price)
    return (
      pool.balanceX
        // convert from fixed point to float
        .div(BigNumber(10).pow(coin0.decimals))
        .multipliedBy(coin0Price.price)
        .div(pool.lpCoinSupply)
        .toNumber()
    );

  const coin1Price = prices[coin1.type];

  if (coin1Price?.price)
    return (
      pool.balanceY
        // convert from fixed point to float
        .div(BigNumber(10).pow(coin1.decimals))
        .multipliedBy(coin1Price.price)
        .div(pool.lpCoinSupply)
        .toNumber()
    );

  return 0;
};

export const getVolatilePools = async ({
  account,
  numOfPools,
  provider,
  typeArgs,
  network,
}: GetVolatilePoolsArgs) => {
  const safeAccount = account || AddressZero;

  const transactionBlock = new TransactionBlock();

  transactionBlock.moveCall({
    target: `${OBJECT_RECORD[network].PACKAGE_ID}::interface::get_v_pools`,
    typeArguments: typeArgs,
    arguments: [
      transactionBlock.object(OBJECT_RECORD[network].DEX_STORAGE_VOLATILE),
      transactionBlock.pure(numOfPools.toString()),
    ],
  });

  const data = await provider.devInspectTransactionBlock({
    sender: safeAccount,
    transactionBlock,
  });
  const poolsArray = bcsForVersion(await provider.getRpcApiVersion()).de(
    getDevInspectType(data),
    Uint8Array.from(getDevInspectData(data))
  );

  return poolsArray.map((x: ReadonlyArray<BigInt>) => ({
    balanceX: BigNumber(x[0].toString()),
    balanceY: BigNumber(x[1].toString()),
    lpCoinSupply: BigNumber(x[2].toString()),
  }));
};
