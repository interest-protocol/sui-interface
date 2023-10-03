import { SuiSystemStateSummary } from '@mysten/sui.js/src/types';
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
  totalBalance: string;
}

export interface IBondsContext {
  form: UseFormReturn<BondsForm>;
  principalType: string;
  couponType: string;
  isLoading: boolean;
  suiSystem: SuiSystemStateSummary;
}
