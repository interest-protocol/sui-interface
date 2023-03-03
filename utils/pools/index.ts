import {
  bcsForVersion,
  LocalTxnDataSerializer,
  MoveCallTransaction,
} from '@mysten/sui.js';
import BigNumber from 'bignumber.js';

import { COINS_PACKAGE_ID, DEX_STORAGE_VOLATILE } from '@/constants';
import { CoinPriceRecord } from '@/hooks';
import { CoinData } from '@/interface';
import { AddressZero } from '@/sdk';
import {
  getDevInspectData,
  getDevInspectType,
  provider,
} from '@/utils/provider';

import { Pool } from './pools.types';

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

export const getVolatilePools = async (
  account: string | null,
  typeArgs: ReadonlyArray<string>,
  numOfPools: number
) => {
  const safeAccount = account || AddressZero;
  const tx = await new LocalTxnDataSerializer(
    provider
  ).serializeToBytesWithoutGasInfo(safeAccount, {
    kind: 'moveCall',
    data: {
      function: 'get_v_pools',
      gasBudget: 5000,
      module: 'interface',
      packageObjectId: COINS_PACKAGE_ID,
      arguments: [DEX_STORAGE_VOLATILE, numOfPools.toString()],
      typeArguments: typeArgs,
    } as MoveCallTransaction,
  });
  const data = await provider.devInspectTransaction(safeAccount, tx);
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
