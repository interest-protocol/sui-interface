export interface DEXPoolDetailsViewProps {
  objectId: string;
}

export interface LiquidityDetailsCardLineProps {
  value: string;
  symbol: string;
  type: string;
}

export interface LiquidityDetailsCardProps {
  isStable: boolean;
  lines: ReadonlyArray<LiquidityDetailsCardLineProps>;
}

export interface Pool {
  token0Balance: string;
  token1Balance: string;
  lpCoinSupply: string;
  lpCoin: string;
  poolType: string;
}
