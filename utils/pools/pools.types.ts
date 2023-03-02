import BigNumber from 'bignumber.js';

export interface Pool {
  balanceX: BigNumber;
  balanceY: BigNumber;
  lpCoinSupply: BigNumber;
}
