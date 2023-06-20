import { TOKEN_SYMBOL } from '@/lib';

export interface MarketTableProps {
  title: string;
  isSupply?: boolean;
  data: ReadonlyArray<GroupBorrowRow> | ReadonlyArray<GroupSupplyRow>;
}

export interface assetApyProps {
  coin: {
    token: { decimals: number; symbol: TOKEN_SYMBOL; type: string };
    color?: { dark: string; light: string };
  };
  percentage: number;
}

export interface MarketTableSupplyProps {
  assetApy: assetApyProps;
  supplied: {
    percentage: number;
    value: number;
  };
  wallet: number;
  collateral: boolean;
}

export interface MarketTableBorrowedProps {
  assetApy: assetApyProps;
  borrowed: {
    percentage: number;
    value: number;
  };
  wallet: number;
  liquidity: number;
}

export interface GroupRowHeaderProps {
  description: string;
}

export interface GroupBorrowRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  BorrowMarketTableData: ReadonlyArray<MarketTableBorrowedProps>;
}

export interface BorrowMarketTableProps {
  BorrowMarketTableData: ReadonlyArray<GroupBorrowRow>;
}

export interface BorrowMarketTableColletionProps {
  BorrowMarketTableColletion: ReadonlyArray<GroupBorrowRow>;
}

export interface GroupSupplyRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  SupplyMarketTableData: ReadonlyArray<MarketTableSupplyProps>;
}

export interface SupplyMarketTableProps {
  SupplyMarketTableData: ReadonlyArray<GroupSupplyRow>;
}

export interface SupplyMarketTableColletionProps {
  SupplyMarketTableColletion: ReadonlyArray<GroupSupplyRow>;
}
