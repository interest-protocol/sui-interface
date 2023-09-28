import { UseFormReturn } from 'react-hook-form';

import { BondsMap } from '@/hooks/use-get-lst-bond-objects/use-get-lst-bond-objects.types';

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
  bondEpochs: ReadonlyArray<string>;
  bondsMap: Record<string, BondsMap>;
}
