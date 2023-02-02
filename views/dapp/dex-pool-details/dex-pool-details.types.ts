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
