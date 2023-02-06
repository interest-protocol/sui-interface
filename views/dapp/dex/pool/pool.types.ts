import { BigNumber } from 'bignumber.js';
export interface PoolRowProps {
  type0: string;
  type1: string;
  symbol0: string;
  symbol1: string;
  objectId: string;
  decimals: number;
  balance: BigNumber;
}
