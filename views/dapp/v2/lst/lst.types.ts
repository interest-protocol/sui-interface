import { Rebase } from '@interest-protocol/sui-money-market-sdk';

export type DERIVATED_SUI_SYMBOL = 'SUI' | 'iSui' | 'iSui-PC' | 'iSui-YN';

import BigNumber from 'bignumber.js';
import { UseFormReturn } from 'react-hook-form';

export interface StakeForm {
  amount: string;
  amountUSD: string;
  coinType: string;
  validator: string;
  maturity: string;
}

export interface ValidatorStakePosition {
  validator: string;
  total_principal: string;
  stakes: ReadonlyArray<{ amount: string; epoch: string }>;
}

export interface LSTProps {
  stakeForm: UseFormReturn<StakeForm>;
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
}

export interface ValidatorPosition {
  principal: string;
  stakes: ReadonlyArray<{ amount: string; epoch: string }>;
}

export type ValidatorStakePositionRecord = Record<string, ValidatorPosition>;
