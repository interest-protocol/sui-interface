import { Rebase } from '@interest-protocol/sui-money-market-sdk';

export type DERIVATED_SUI_SYMBOL = 'SUI' | 'iSui' | 'iSui-PC' | 'iSui-YN';

import BigNumber from 'bignumber.js';
import { UseFormReturn } from 'react-hook-form';

export interface LSTForm {
  amount: string;
  coinType: string;
}

export interface LSTProps {
  form: UseFormReturn<LSTForm>;
}

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
