import BigNumber from 'bignumber.js';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import { FARMS } from '@/constants';
import { ZERO_BIG_NUMBER } from '@/utils';
import {
  calculateAPR,
  calculateIPXUSDPrice,
  calculateTVL,
  getAllocationPoints,
  getFarmBalance,
} from '@/utils/farms';

import { ParseFarmData } from './farm-details.types';

const DEFAULT_FARM_DATA = {
  ...FARMS[0],
  apr: ZERO_BIG_NUMBER,
  pendingRewards: ZERO_BIG_NUMBER,
  tvl: 0,
  allocationPoints: ZERO_BIG_NUMBER,
  stakingAmount: ZERO_BIG_NUMBER,
  totalStakedAmount: ZERO_BIG_NUMBER,
  lpCoinData: {
    type: '',
    totalBalance: ZERO_BIG_NUMBER,
    symbol: '',
    objects: [],
    decimals: 0,
  } as Web3ManagerSuiObject,
  ipxUSDPrice: 0,
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
  const stakingAmount = BigNumber(0);
  const totalStakedAmount = new BigNumber(getFarmBalance(farm));
  const lpCoinData = coinsMap[farmMetadata.lpCoin.type];

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
    stakingAmount,
    totalStakedAmount,
    lpCoinData,
    ipxUSDPrice,
  };
};
