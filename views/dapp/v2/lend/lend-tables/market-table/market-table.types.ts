import { BorrowRow, SupplyRow } from '../lend-table.types';

export interface MarketTableProps {
  title: string;
  isSupply?: boolean;
}

export interface GroupRowHeaderProps {
  description: string;
}

export interface MarketTableGroupRowHeaderProps {
  description: string;
  handleButton: () => void;
  isOpen: boolean;
}

export interface GroupBorrowRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  BorrowMarketTableData: ReadonlyArray<BorrowRow>;
}

export interface GroupSupplyRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  SupplyMarketTableData: ReadonlyArray<SupplyRow>;
}
