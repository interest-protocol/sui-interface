export interface StatsWrapperProps {
  description: string;
  value: string;
  isCoin?: boolean;
}

export interface StatsDerivatedWrapperProps {
  name: 'iSUI' | 'iSUI-PC' | 'iSUI-YC';
  value: string;
}

export interface StatsProps {
  totalStaked: string;
  apy: string;
  totalRewards: string;
  derivatedSui: ReadonlyArray<StatsDerivatedWrapperProps>;
}
