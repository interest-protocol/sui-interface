import { BigNumber } from 'bignumber.js';

import { TOKEN_SYMBOL } from '@/sdk';
export interface PoolRowProps {
  type0: string;
  type1: string;
  symbol0: string;
  symbol1: string;
  objectId: string;
  decimals: number;
  balance: BigNumber;
}

interface IToken {
  decimals: number;
  symbol: TOKEN_SYMBOL;
  type: string;
}

interface IPool {
  token0: IToken;
  token1: IToken;
  stable: boolean;
  decimals: number;
  balance: BigNumber;
  poolObjectId: string;
}

export interface IPools {
  active: ReadonlyArray<IPool>;
  inactive: ReadonlyArray<IPool>;
}
