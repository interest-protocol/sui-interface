import {
  GroupBorrowRow,
  GroupSupplyRow,
} from './market-table/market-table.types';

export interface LendTableProps {
  supplyMarketData: ReadonlyArray<GroupSupplyRow>;
  borrowMarketData: ReadonlyArray<GroupBorrowRow>;
  isLoading: boolean;
}
