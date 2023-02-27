import { MoveCallTransaction, Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';

import {
  COIN_TYPE,
  COINS_PACKAGE_ID,
  EPOCHS_PER_YEAR,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { FixedPointMath } from '@/sdk';
import { provider } from '@/utils';

import {
  CalculateAPRArgs,
  CalculateIPXUSDPriceArgs,
  CalculateTVLArgs,
  GetFarm,
} from './farms.types';

export const getAllocationPoints = pathOr('0', [
  'details',
  'data',
  'fields',
  'value',
  'fields',
  'allocation_points',
]);

export const getFarmBalance = pathOr('0', [
  'details',
  'data',
  'fields',
  'value',
  'balance_value',
]);

export const getPoolLPCoinSupply = pathOr('0', [
  'details',
  'data',
  'fields',
  'value',
  'lp_coin_supply',
  'fields',
  'value',
]);

const getPoolBalance = (pairPosition: 0 | 1) =>
  pathOr('0', [
    'details',
    'data',
    'fields',
    'value',
    'fields',
    `balance_${pairPosition ? 'y' : 'x'}`,
  ]);

export const getPoolCoin0Balance = getPoolBalance(0);

export const getPoolCoin1Balance = getPoolBalance(1);

export const calculateAPR = ({
  allocationPoints,
  ipxStorage,
  ipxUSDPrice,
  tvl,
}: CalculateAPRArgs) => {
  const percentageOfAllocation = allocationPoints.div(
    ipxStorage.totalAllocation
  );
  // IPX has 9 decimals
  const profitInUSD = FixedPointMath.toNumber(
    percentageOfAllocation
      .multipliedBy(ipxStorage.ipxPerEpoch)
      .multipliedBy(EPOCHS_PER_YEAR)
      .multipliedBy(ipxUSDPrice)
  );

  return new BigNumber(profitInUSD).div(tvl || 1);
};

export const calculateIPXUSDPrice = ({
  pool,
  prices,
}: CalculateIPXUSDPriceArgs) => {
  // V-ETH-IPX is hardcoded on index 2

  const ethBalance = new BigNumber(getPoolCoin0Balance(pool));
  const ipxBalance = new BigNumber(getPoolCoin1Balance(pool));
  const ipxInEth = ethBalance.div(ipxBalance).multipliedBy(1e9);
  const ethType = COIN_TYPE[Network.DEVNET].ETH;

  return ipxInEth.multipliedBy(prices[ethType].price).toNumber();
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
    const farmBalance = new BigNumber(getFarmBalance(farm));
    return FixedPointMath.toNumber(
      farmBalance.multipliedBy(ipxUSDPrice),
      farmMetadata.coin0.decimals
    );
  } else {
    // if coin zero has a price
    const coin0Price = prices[farmMetadata.coin0.type];

    const lpCoinSupply = getPoolLPCoinSupply(pool);

    if (!+lpCoinSupply) return 0;

    if (coin0Price) {
      const coin0Reserve = new BigNumber(getPoolCoin0Balance(pool));
      const lpCoinPrice = coin0Reserve
        .multipliedBy(2)
        .multipliedBy(new BigNumber(coin0Price.price))
        .dividedBy(new BigNumber(lpCoinSupply));

      return FixedPointMath.toNumber(
        lpCoinPrice.multipliedBy(getFarmBalance(farm)),
        farmMetadata.coin0.decimals
      );
    }

    // if coin one has a price
    const coin1Price = prices[farmMetadata.coin1.type];

    if (coin1Price) {
      const coin1Reserve = new BigNumber(getPoolCoin1Balance(pool));
      const lpCoinPrice = coin1Reserve
        .multipliedBy(2)
        .multipliedBy(new BigNumber(coin1Price.price))
        .dividedBy(new BigNumber(lpCoinSupply));

      return FixedPointMath.toNumber(
        lpCoinPrice.multipliedBy(getFarmBalance(farm)),
        farmMetadata.coin1.decimals
      );
    }
  }

  return 0;
};

export const getFarm: GetFarm = async ({
  objectId,
  poolObjectId,
  isSingleCoin,
  account,
  lpCoin,
}) => {
  const array = isSingleCoin
    ? [provider.getObject(objectId)]
    : [provider.getObject(objectId), provider.getObject(poolObjectId)];

  const farmArray = await Promise.all(array);

  if (account)
    return (
      provider
        .devInspectTransaction(account, {
          kind: 'moveCall',
          data: {
            function: 'borrow_account',
            gasBudget: 5000,
            module: 'ipx',
            packageObjectId: COINS_PACKAGE_ID,
            typeArguments: [lpCoin.type],
            arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE, account],
          } as MoveCallTransaction,
        })
        .then((x) => ({
          objectId,
          farmArray,
          accountData: x,
        }))
        // User never deposited - so it will throw an error
        .catch(() => ({
          objectId,
          farmArray,
          accountData: null,
        }))
    );

  return {
    objectId,
    farmArray,
    accountData: null,
  };
};
