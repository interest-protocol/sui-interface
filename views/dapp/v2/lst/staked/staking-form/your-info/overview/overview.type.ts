import { ReactNode } from 'react';

import { DERIVATED_SUI_SYMBOL } from '../../../../lst.type';

export interface LineProps {
  description: string;
  value: ReactNode | string;
}

export interface IconValueProps {
  symbol: DERIVATED_SUI_SYMBOL;
  value: ReactNode | string;
}

export interface TransactionOverviewProps {
  stakeOrBurn: IconValueProps | string;
  receive: IconValueProps | string;
  depositFee: string;
  rewards: string;
  isStake: boolean;
}
