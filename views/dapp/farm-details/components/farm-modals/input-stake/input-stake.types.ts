import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface InputStakeProps
  extends Pick<UseFormReturn<{ amount: string }>, 'register' | 'setValue'> {
  label: string;
  balance: number;
  currencyPrefix: ReactNode;
}
