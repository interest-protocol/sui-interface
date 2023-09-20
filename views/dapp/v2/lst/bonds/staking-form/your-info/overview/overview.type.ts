import { ReactNode } from 'react';

import { DERIVATED_SUI_SYMBOL, LSTProps } from '@/views/dapp/v2/lst/lst.types';

export interface LineProps {
  description: string;
  value: ReactNode | string;
}

export interface IconValueProps {
  symbol: DERIVATED_SUI_SYMBOL;
  value: ReactNode | string;
}

export interface TransactionOverviewProps {
  isStake: boolean;
  form: LSTProps['stakeForm'];
  unstakeAmountType: ReadonlyArray<DERIVATED_SUI_SYMBOL>;
}
