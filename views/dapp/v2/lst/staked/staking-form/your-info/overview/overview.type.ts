import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { StakeForm } from '../../../../lst.types';

export interface LineProps {
  description: string;
  value: ReactNode | string;
}

export interface IconValueProps {
  symbol: string;
  value: ReactNode | string;
}

export interface TransactionOverviewProps {
  form: UseFormReturn<StakeForm>;
  isStake: boolean;
}
