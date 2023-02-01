export interface DEXPoolDetailsViewProps {
  pairType: string;
}

export interface LiquidityDetailsCardLineProps {
  value: string;
  symbol: string;
  address: string;
  isFetchingInitialData: boolean;
}

export interface LiquidityDetailsCardProps {
  isStable: boolean;
  lines: ReadonlyArray<LiquidityDetailsCardLineProps>;
}

export type TPoolDetailsKeys =
  | 'token0Metadata'
  | 'token1Metadata'
  | 'token0'
  | 'token1'
  | 'isStable'
  | 'reserve0'
  | 'reserve1';

export type TProcessPairData = (
  chainId: number,
  data: any,
  nativeBalance: string
) => {
  token0Metadata: {
    name: string;
    symbol: string;
    decimals: number;
  };
  token1Metadata: {
    name: string;
    symbol: string;
    decimals: number;
  };
  loading: boolean;
  pairExists: boolean;
  token0: string;
  token1: string;
  isStable: boolean;
  reserve0: string;
  reserve1: string;
  lpAllowance: string;
  lpBalance: string;
  token0Balance: string;
  token0Allowance: string;
  token1Balance: string;
  token1Allowance: string;
};
