import { COIN_TYPE } from '@interest-protocol/sui-amm-sdk';
import BigNumber from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { pathOr } from 'ramda';

import { MILLISECONDS_PER_YEAR } from '@/constants';
import { ZERO_BIG_NUMBER } from '@/utils';

import { calculateLPCoinPrice } from '../pools';
import {
  CalculateAPRArgs,
  CalculateIPXUSDPriceArgs,
  CalculateTVLArgs,
} from './farms.types';

export const calculateAPR = ({
  allocationPoints,
  ipxStorage,
  ipxUSDPrice,
  tvl,
}: CalculateAPRArgs) => {
  if (allocationPoints.isZero()) return ZERO_BIG_NUMBER;

  // IPX has 9 decimals
  const profitInUSD = allocationPoints.multipliedBy(
    BigNumber(ipxStorage.ipxPerMS)
      .multipliedBy(MILLISECONDS_PER_YEAR)
      .multipliedBy(ipxUSDPrice)
      .div(BigNumber(10).pow(9))
  );

  return profitInUSD.div(tvl || 1);
};

export const calculateIPXUSDPrice = ({
  pool,
  prices,
  network,
}: CalculateIPXUSDPriceArgs) => {
  // V-ETH-IPX is hardcoded on index 2

  const ipxBalance = pool.balanceX;
  const ethBalance = pool.balanceY;

  const ipxInEth = ethBalance.div(ipxBalance);

  const ethType = pathOr('', [network, 'ETH'], COIN_TYPE);

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

export const parseSuiRawDataToFarms = (
  x: ReadonlyArray<ReadonlyArray<BigInt>>
) =>
  x.map((elem: ReadonlyArray<BigInt>) => ({
    allocationPoints: BigNumber(elem[0].toString()),
    totalStakedAmount: BigNumber(elem[1].toString()),
    accountBalance: BigNumber(elem[2].toString()),
  }));
