import BigNumber from 'bignumber.js';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { FixedPointMath, TOKEN_SYMBOL } from '@/sdk';
import { ZERO_BIG_NUMBER } from '@/utils';
import {
  calculateAPR,
  calculateIPXUSDPrice,
  calculateTVL,
} from '@/utils/farms';

import {
  CalculateLPCoinPriceArgs,
  ParseErrorArgs,
  ParseFarmData,
} from './farm-details.types';

const DEFAULT_COIN_DATA = {
  decimals: 0,
  symbol: TOKEN_SYMBOL.SUI,
  type: '',
};

const DEFAULT_FARM_DATA = {
  farmType: '',
  lpCoin: DEFAULT_COIN_DATA,
  coin0: DEFAULT_COIN_DATA,
  coin1: DEFAULT_COIN_DATA,
  isSingleCoin: false,
  id: 0,
  isLive: true,
  stable: false,
  apr: ZERO_BIG_NUMBER,
  pendingRewards: ZERO_BIG_NUMBER,
  tvl: 0,
  allocationPoints: ZERO_BIG_NUMBER,
  balance: ZERO_BIG_NUMBER,
  totalStakedAmount: ZERO_BIG_NUMBER,
  lpCoinData: {
    type: '',
    totalBalance: ZERO_BIG_NUMBER,
    symbol: '',
    objects: [],
    decimals: 0,
  } as Web3ManagerSuiObject,
  lpCoinPrice: 0,
  totalAllocation: '0',
  accountBalance: ZERO_BIG_NUMBER,
  poolObjectId: '',
};

const calculateLPCoinPrice = ({
  prices,
  pool,
  farmMetadata,
}: CalculateLPCoinPriceArgs) => {
  const coin0Price = prices[farmMetadata.coin0.type];
  const lpCoinSupply = pool.lpCoinSupply;

  if (lpCoinSupply.isZero()) return 0;

  if (coin0Price?.price) {
    const coin0Balance = pool.balanceX;
    const balanceInUSD = BigNumber(coin0Balance)
      .multipliedBy(coin0Price.price)
      .multipliedBy(2);

    return FixedPointMath.toNumber(
      balanceInUSD.div(lpCoinSupply),
      farmMetadata.coin0.decimals
    );
  }

  const coin1Price = prices[farmMetadata.coin1.type];

  if (coin1Price?.price) {
    const coin1Balance = pool.balanceY;
    const balanceInUSD = BigNumber(coin1Balance)
      .multipliedBy(coin1Price.price)
      .multipliedBy(2);
    return FixedPointMath.toNumber(
      balanceInUSD.div(lpCoinSupply),
      farmMetadata.coin1.decimals
    );
  }

  return 0;
};

export const parseFarmData: ParseFarmData = ({
  farms,
  farmMetadata,
  ipxStorage,
  prices,
  coinsMap,
  pools,
  pendingRewards,
}) => {
  if (!pools || !farms) return DEFAULT_FARM_DATA;

  const farm = farms[0];
  const pool = pools[0];
  const ipxEthPool = pools[1];

  const ipxUSDPrice = calculateIPXUSDPrice({
    pool: ipxEthPool,
    prices,
  });

  const tvl = calculateTVL({
    prices,
    ipxUSDPrice,
    farm,
    pool,
    farmMetadata,
  });

  const allocationPoints = new BigNumber(ipxStorage.totalAllocation);
  // need the account logic
  const totalStakedAmount = farm.totalStakedAmount;
  const lpCoinData =
    coinsMap[farmMetadata.lpCoin.type] || DEFAULT_FARM_DATA.lpCoinData;

  const lpCoinPrice = farmMetadata.isSingleCoin
    ? ipxUSDPrice
    : calculateLPCoinPrice({ prices, pool, farmMetadata });

  return {
    ...farmMetadata,
    pendingRewards,
    tvl,
    apr: calculateAPR({
      ipxUSDPrice,
      ipxStorage,
      tvl,
      allocationPoints,
    }),
    allocationPoints,
    totalStakedAmount,
    lpCoinData,
    lpCoinPrice,
    totalAllocation: ipxStorage.totalAllocation,
    accountBalance: farm.accountBalance,
  };
};

// need to translate
export const parseError = ({
  farmsError,
  coinsPricesError,
  ipxStorageError,
  web3Error,
  poolsError,
  pendingRewardsError,
}: ParseErrorArgs) => {
  if (farmsError) return 'farmsDetails.errors.farm';
  if (coinsPricesError) return 'farmsDetails.errors.prices';
  if (ipxStorageError) return 'farmsDetails.errors.ipxStorage';
  if (web3Error) return 'farmsDetails.errors.balances';
  if (poolsError) return 'farmsDetails.errors.pool';
  if (pendingRewardsError) return 'farmsDetails.errors.rewards';

  return 'common.error';
};
