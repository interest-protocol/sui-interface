import { Rebase } from '@interest-protocol/sui-money-market-sdk';

export type DERIVATED_SUI_SYMBOL = 'SUI' | 'iSui' | 'iSui-PC' | 'iSui-YN';

import BigNumber from 'bignumber.js';
import { Dispatch, SetStateAction } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface StakeForm {
  amount: string;
  amountUSD: string;
  coinType: string;
  validator: string;
}

export interface ValidatorStakePosition {
  validator: string;
  totalPrincipal: BigNumber;
}

export interface LSTProps {
  isStakeTabStake: boolean;
  stakeForm: UseFormReturn<StakeForm>;
  setStakeTabState: (value: boolean) => void;
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
