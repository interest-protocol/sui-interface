import { DERIVATED_SUI_SYMBOL } from '../../../lst.type';

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
  totalStaked: string;
  apy: string;
  totalRewards: string;
  derivatedSui: ReadonlyArray<StatsDerivatedWrapperProps>;
}

export interface GetISuiSVGProps {
  symbol: DERIVATED_SUI_SYMBOL;
}
