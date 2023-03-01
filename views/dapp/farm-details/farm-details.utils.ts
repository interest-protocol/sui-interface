import BigNumber from 'bignumber.js';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { FARMS } from '@/constants';
import { FixedPointMath } from '@/sdk';
import { ZERO_BIG_NUMBER } from '@/utils';
import {
  calculateAPR,
  calculateIPXUSDPrice,
  calculateTVL,
  getAllocationPoints,
  getPoolCoin0Balance,
  getPoolCoin1Balance,
  getPoolLPCoinSupply,
} from '@/utils/farms';

import {
  CalculateLPCoinPriceArgs,
  ParseErrorArgs,
  ParseFarmData,
} from './farm-details.types';

const DEFAULT_FARM_DATA = {
  ...FARMS[0],
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
};

const calculateLPCoinPrice = ({
  prices,
  pool,
  farmMetadata,
}: CalculateLPCoinPriceArgs) => {
  const coin0Price = prices[farmMetadata.coin0.type];
  const lpCoinSupply = getPoolLPCoinSupply(pool);

  if (!lpCoinSupply) return 0;

  if (coin0Price) {
    const coin0Balance = getPoolCoin0Balance(pool);
    const balanceInUSD = BigNumber(coin0Balance)
      .multipliedBy(coin0Price.price)
      .multipliedBy(2);

    return FixedPointMath.toNumber(
      balanceInUSD.div(lpCoinSupply),
      farmMetadata.coin0.decimals
    );
  }

  const coin1Price = prices[farmMetadata.coin1.type];

  if (coin1Price) {
    const coin1Balance = getPoolCoin1Balance(pool);
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
  data,
  farmMetadata,
  ipxStorage,
  prices,
  coinsMap,
  ipxPool,
  pendingRewards,
}) => {
  if (!data || !ipxPool) return DEFAULT_FARM_DATA;

  const farm = data.farmArray[0];
  const pool = data.farmArray[farmMetadata.isSingleCoin ? 0 : 1];

  const ipxUSDPrice = calculateIPXUSDPrice({
    pool: ipxPool,
    prices,
  });

  const tvl = calculateTVL({
    prices,
    ipxUSDPrice,
    farm,
    pool,
    farmMetadata,
  });

  const allocationPoints = new BigNumber(getAllocationPoints(farm));
  // need the account logic
  const totalStakedAmount = new BigNumber(0);
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
  };
};

// need to translate
export const parseError = ({
  error,
  coinsPricesError,
  ipxStorageError,
  web3Error,
  ipxDataError,
  pendingRewardsError,
}: ParseErrorArgs) => {
  if (error) return 'Failed to fetch the farm data';
  if (coinsPricesError) return 'Failed to fetch the coin prices';
  if (ipxStorageError) return 'Failed to fetch the IPXStorage object';
  if (web3Error) return 'Failed to fetch coin balances';
  if (ipxDataError) return 'Failed to fetch Sui-ETH pool data';
  if (pendingRewardsError) return 'Failed to fetch the pending rewards';

  return 'error';
};
