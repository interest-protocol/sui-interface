import { UseFormReturn } from 'react-hook-form';

export interface Maturity {
  date: string;
  epoch: string;
}

export interface BondsForm {
  amount: string;
  amountUSD: string;
  validator: string;
  tokens: ReadonlyArray<string>;
  type: 'stake' | 'unstake' | 'claim';
  maturity: Maturity;
}

export interface IBondsContext {
  form: UseFormReturn<BondsForm>;
}
