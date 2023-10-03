import { DERIVATED_SUI_SYMBOL } from '../../lst.types';

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
  totalISui: string;
  totalStaked: number;
}

export interface GetISuiSVGProps {
  symbol: DERIVATED_SUI_SYMBOL;
}
