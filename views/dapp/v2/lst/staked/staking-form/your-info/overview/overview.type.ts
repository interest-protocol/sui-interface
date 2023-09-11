import { ReactNode } from 'react';

import { LSTProps } from '@/views/dapp/v2/lst/lst.types';

export interface LineProps {
  description: string;
  value: ReactNode | string;
}

export interface IconValueProps {
  symbol: string;
  value: ReactNode | string;
}

export interface TransactionOverviewProps {
  form: LSTProps['form'];
  isStake: boolean;
}
