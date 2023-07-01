import { BorrowRow, SupplyRow } from '../lend-table.types';

export interface MarketTableProps {
  title: string;
  isSupply?: boolean;
}

export type MarketTableBorrowedProps = Pick<
  BorrowRow,
  'asset' | 'borrowed' | 'wallet' | 'cash'
>;

export interface GroupRowHeaderProps {
  description: string;
}

export interface GroupBorrowRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  BorrowMarketTableData: ReadonlyArray<BorrowRow>;
}

export interface GroupSupplyRow extends GroupRowHeaderProps {
  isEngaged: boolean;
  supplyMarketTableData: ReadonlyArray<SupplyRow>;
}
