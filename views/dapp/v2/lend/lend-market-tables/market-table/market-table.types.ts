import { BorrowRow, SupplyRow } from '../lend-table.types';

export interface MarketTableProps {
  title: string;
  isSupply?: boolean;
}

export interface GroupRowHeaderProps {
  description: string;
}

export interface GroupBorrowRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  borrowMarketTableData: ReadonlyArray<BorrowRow>;
}

export interface GroupSupplyRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  supplyMarketTableData: ReadonlyArray<SupplyRow>;
}

export interface MarketTableTokenIconProps {
  type: string;
}

export interface MarketTableCollapsibleProps {
  isOpen: boolean;
  description: string;
  handleButton: () => void;
}
