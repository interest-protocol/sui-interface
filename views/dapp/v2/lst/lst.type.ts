import { Rebase } from '@interest-protocol/sui-money-market-sdk';

export type DERIVATED_SUI_SYMBOL = 'SUI' | 'iSui' | 'iSui-PC' | 'iSui-YN';

export interface AmountFieldsProps {
  balance: number;
}

import BigNumber from 'bignumber.js';

export interface LstFee {
  base: BigNumber;
  kink: BigNumber;
  jump: BigNumber;
}

export interface LstStorage {
  pool: Rebase;
  fee: LstFee;
  lastEpoch: BigNumber;
  totalPrincipal: BigNumber;
  validatorCount: number;
  whiteListedValidators: ReadonlyArray<string>;
}
