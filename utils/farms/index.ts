import { bcsForVersion, MoveCallTransaction, Network } from '@mysten/sui.js';
import { LocalTxnDataSerializer } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';

import {
  COIN_TYPE,
  COINS_PACKAGE_ID,
  EPOCHS_PER_YEAR,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { AddressZero, FixedPointMath } from '@/sdk';
import {
  getDevInspectData,
  getDevInspectType,
  provider,
  ZERO_BIG_NUMBER,
} from '@/utils';

import { calculateLPCoinPrice } from '../pools';
import {
  CalculateAPRArgs,
  CalculateIPXUSDPriceArgs,
  CalculateTVLArgs,
  Farm,
} from './farms.types';

export const calculateAPR = ({
  allocationPoints,
  ipxStorage,
  ipxUSDPrice,
  tvl,
}: CalculateAPRArgs) => {
  if (allocationPoints.isZero()) return ZERO_BIG_NUMBER;

  // IPX has 9 decimals
  const profitInUSD = allocationPoints
    .multipliedBy(BigNumber(ipxStorage.ipxPerEpoch).div(BigNumber(10).pow(9)))
    .multipliedBy(EPOCHS_PER_YEAR)
    .multipliedBy(ipxUSDPrice);

  return profitInUSD.div(tvl || 1);
};

export const calculateIPXUSDPrice = ({
  pool,
  prices,
}: CalculateIPXUSDPriceArgs) => {
  // V-ETH-IPX is hardcoded on index 2

  const ethBalance = pool.balanceX;
  const ipxBalance = pool.balanceY;

  const ipxInEth = ethBalance.div(ipxBalance).multipliedBy(1e9);
  const ethType = COIN_TYPE[Network.DEVNET].ETH;

  // TODO take into account eth decimals upon deployment
  return ipxInEth.multipliedBy(prices[ethType]?.price ?? 0).toNumber();
};

export const calculateTVL = ({
  pool,
  farm,
  prices,
  ipxUSDPrice,
  farmMetadata,
}: CalculateTVLArgs) => {
  // IPX only logic
  if (farmMetadata.isSingleCoin) {
    const farmBalance = farm.totalStakedAmount;

    return FixedPointMath.toNumber(
      farmBalance.multipliedBy(ipxUSDPrice),
      farmMetadata.lpCoin.decimals
    );
  } else {
    const lpCoinSupply = pool.lpCoinSupply;

    if (lpCoinSupply.isZero()) return 0;

    const lpCoinPrice = calculateLPCoinPrice(
      prices,
      farmMetadata.coin0,
      farmMetadata.coin1,
      pool
    );

    return farm.totalStakedAmount.multipliedBy(lpCoinPrice).toNumber();
  }
};

export const getFarms = async (
  account: string | null,
  typeArgs: ReadonlyArray<string>,
  numOfFarms: number
): Promise<ReadonlyArray<Farm>> => {
  const safeAccount = account || AddressZero;
  const tx = await new LocalTxnDataSerializer(
    provider
  ).serializeToBytesWithoutGasInfo(safeAccount, {
    kind: 'moveCall',
    data: {
      function: 'get_farms',
      gasBudget: 5000,
      module: 'interface',
      packageObjectId: COINS_PACKAGE_ID,
      arguments: [
        IPX_STORAGE,
        IPX_ACCOUNT_STORAGE,
        safeAccount,
        numOfFarms.toString(),
      ],
      typeArguments: typeArgs,
    } as MoveCallTransaction,
  });
  const data = await provider.devInspectTransaction(safeAccount, tx);

  const farmsArray = bcsForVersion(await provider.getRpcApiVersion()).de(
    getDevInspectType(data),
    Uint8Array.from(getDevInspectData(data))
  );

  return farmsArray.map((elem: ReadonlyArray<BigInt>) => ({
    allocationPoints: BigNumber(elem[0].toString()),
    totalStakedAmount: BigNumber(elem[1].toString()),
    accountBalance: BigNumber(elem[2].toString()),
  }));
};
