import { Rebase } from '@interest-protocol/sui-money-market-sdk';

export type DERIVATED_SUI_SYMBOL = 'SUI' | 'iSui' | 'iSUIP' | 'iSUIY';

import BigNumber from 'bignumber.js';

export interface StakeForm {
  amount: string;
  amountUSD: string;
  coinType: string;
  validator: string;
  maturity: { date: string; id: string };
}

export interface ValidatorStakePosition {
  validator: string;
  total_principal: string;
  stakes: ReadonlyArray<{ amount: string; epoch: string }>;
}

export interface LSTProps {
  loading?: boolean;
}

export interface LstFee {
  base: BigNumber;
  kink: BigNumber;
  jump: BigNumber;
}

export interface ValidatorTable {
  head: string | null;
  tail: string | null;
  size: BigNumber;
}

export interface LstStorage {
  pool: Rebase;
  fee: LstFee;
  lastEpoch: BigNumber;
  totalPrincipal: BigNumber;
  validatorCount: number;
  whiteListedValidators: ReadonlyArray<string>;
  validatorTable: ValidatorTable;
  averageAPY: BigNumber;
  totalActivateStakedSui: BigNumber;
}

export interface ValidatorPosition {
  principal: string;
  stakes: ReadonlyArray<{ amount: string; epoch: string }>;
}

export type ValidatorStakePositionRecord = Record<string, ValidatorPosition>;
