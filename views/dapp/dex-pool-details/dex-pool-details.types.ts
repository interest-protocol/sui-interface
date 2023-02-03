export interface DEXPoolDetailsViewProps {
  objectId: string;
}

export interface LiquidityDetailsCardLineProps {
  value: string;
  symbol: string;
  type: string;
  isFetchingInitialData: boolean;
}

export interface LiquidityDetailsCardProps {
  isStable: boolean;
  lines: ReadonlyArray<LiquidityDetailsCardLineProps>;
}

export interface Pool {
  token0Balance: string;
  token1Balance: string;
  lpCoinSupply: string;
  lpCoinType: string;
  poolType: string;
}
