import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface InputStakeProps
  extends Pick<UseFormReturn<{ value: string }>, 'register' | 'setValue'> {
  label: string;
  amount: number;
  currencyPrefix: ReactNode;
}
