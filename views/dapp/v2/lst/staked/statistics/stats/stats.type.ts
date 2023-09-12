import { DERIVATED_SUI_SYMBOL } from '../../../lst.types';

export interface StatsWrapperProps {
  description: string;
  value: string;
  isCoin?: boolean;
}

export interface StatsDerivatedWrapperProps {
  name: DERIVATED_SUI_SYMBOL;
  value: string;
}

export interface StatsProps {
  apy: string;
  totalStaked: string;
  totalRewards: string;
  derivatedSui: ReadonlyArray<StatsDerivatedWrapperProps>;
}

export interface GetISuiSVGProps {
  symbol: DERIVATED_SUI_SYMBOL;
}
