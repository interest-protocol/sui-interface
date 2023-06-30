import { BorrowRow, SupplyRow } from '../lend-table.types';

export interface MarketTableProps {
  title: string;
  isSupply?: boolean;
}

export interface MarketTableBorrowedProps {
  assetApy: BorrowRow['asset'];
  borrowed: BorrowRow['borrowed'];
  wallet: BorrowRow['wallet'];
  cash: BorrowRow['cash'];
}

export interface GroupRowHeaderProps {
  description: string;
}

export interface GroupBorrowRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  BorrowMarketTableData: ReadonlyArray<BorrowRow>;
}

export interface GroupSupplyRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  SupplyMarketTableData: ReadonlyArray<SupplyRow>;
}
