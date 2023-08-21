import BigNumber from 'bignumber.js';

import { calculateIPXUSDPrice, ZERO_BIG_NUMBER } from '@/utils';

import { parseFarmData } from '../../farm-details/farm-details.utils';
import { COIN_TYPE_ARRAY_UI } from '../../farms/farms.constants';
import { ParseDataArgs } from './earn.types';

export const parseData = ({
  prices,
  farms,
  ipxStorage,
  pools,
  network,
}: ParseDataArgs) => {
  if (
    !farms ||
    !pools ||
    !ipxStorage ||
    !prices ||
    !farms.length ||
    !pools.length
  )
    return {
      farms: [],
      totalAllocationPoints: ZERO_BIG_NUMBER,
    };

  const ipxUSDPrice = calculateIPXUSDPrice({
    pool: pools[0],
    prices,
    network,
  });

  return {
    farms: COIN_TYPE_ARRAY_UI[network].map((x, index) =>
      parseFarmData({
        ipxStorage,
        farms,
        pools,
        prices,
        ipxUSDPrice,
        type: x,
        index,
        network,
      })
    ),
    totalAllocationPoints: new BigNumber(ipxStorage.totalAllocation),
  };
};
