import { SupplyRow } from '../../lend-table.types';

export interface MarketTableBodyProps {
  isEngaged: boolean;
  description: string;
  supplyMarketTableData: ReadonlyArray<SupplyRow>;
}

export interface MarketTableCollapsibleProps {
  isOpen: boolean;
  description: string;
  handleButton: () => void;
}
