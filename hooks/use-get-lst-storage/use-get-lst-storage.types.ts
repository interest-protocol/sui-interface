import BigNumber from 'bignumber.js';

export interface LstFee {
  base: BigNumber;
  kink: BigNumber;
  jump: BigNumber;
}

export interface LstPool {
  base: BigNumber;
  elastic: BigNumber;
}

export interface LstStorage {
  pool: LstPool;
  fee: LstFee;
  lastEpoch: BigNumber;
  totalPrincipal: BigNumber;
  validatorCount: number;
  whiteListedValidators: ReadonlyArray<string>;
}
