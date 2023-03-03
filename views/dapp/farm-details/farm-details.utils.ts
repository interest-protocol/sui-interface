import BigNumber from 'bignumber.js';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { TOKEN_SYMBOL } from '@/sdk';
import {
  calculateAPR,
  calculateIPXUSDPrice,
  calculateLPCoinPrice,
  calculateTVL,
  ZERO_BIG_NUMBER,
} from '@/utils';

import { ParseErrorArgs, ParseFarmData } from './farm-details.types';

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

  const allocationPoints = new BigNumber(
    farm.allocationPoints.div(ipxStorage.totalAllocation)
  );

  // need the account logic
  const totalStakedAmount = farm.totalStakedAmount;
  const lpCoinData =
    coinsMap[farmMetadata.lpCoin.type] || DEFAULT_FARM_DATA.lpCoinData;

  const lpCoinPrice = farmMetadata.isSingleCoin
    ? ipxUSDPrice
    : calculateLPCoinPrice(
        prices,
        farmMetadata.coin0,
        farmMetadata.coin1,
        pool
      );

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
