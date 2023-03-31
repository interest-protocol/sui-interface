import { JsonRpcProvider } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';

import { Network } from '@/constants';

export interface Pool {
  balanceX: BigNumber;
  balanceY: BigNumber;
  lpCoinSupply: BigNumber;
}

export interface GetVolatilePoolsArgs {
  account: string | null;
  typeArgs: Array<string>;
  numOfPools: number;
  provider: JsonRpcProvider;
  network: Network;
}
