import { BorrowRow, SupplyRow } from '../lend-table.types';

export const isSupplyRow = (data: SupplyRow | BorrowRow): data is SupplyRow =>
  !!(data as SupplyRow).supplied;
