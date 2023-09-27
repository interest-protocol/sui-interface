import { UseFormReturn } from 'react-hook-form';

export interface BondsForm {
  amount: string;
  amountUSD: string;
  validator: string;
  tokens: ReadonlyArray<string>;
  type: 'stake' | 'unstake' | 'claim';
  maturity: { id: string; date: string };
}

export interface IBondsContext {
  form: UseFormReturn<BondsForm>;
}
