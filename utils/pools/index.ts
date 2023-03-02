import {
  bcsForVersion,
  LocalTxnDataSerializer,
  MoveCallTransaction,
} from '@mysten/sui.js';
import BigNumber from 'bignumber.js';

import { COINS_PACKAGE_ID, DEX_STORAGE_VOLATILE } from '@/constants';
import { AddressZero } from '@/sdk';
import {
  getDevInspectData,
  getDevInspectType,
  provider,
} from '@/utils/provider';

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
    lpCoinSupply: BigNumber(x[1].toString()),
  }));
};
