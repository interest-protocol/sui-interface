import { FC } from 'react';
import { v4 } from 'uuid';

import { SupplyMarketTableProps } from '../market-table/market-table.types';
import MarketTableRowLoading from '../market-table/rows-loading';
import SupplyMarketTableGroupRow from './group-rows';
import SupplyMarketTableHeader from './header-table';

const SupplyMarketTable: FC<SupplyMarketTableProps> = ({
  SupplyMarketTableData,
  isLoading,
}) => {
  return (
    <>
      <SupplyMarketTableHeader />
      {isLoading
        ? [1, 2].map(() => <MarketTableRowLoading key={v4()} />)
        : SupplyMarketTableData.map((SupplyMarketTable) => (
            <SupplyMarketTableGroupRow
              key={v4()}
              isEngaged={SupplyMarketTable.isEngaged}
              description={SupplyMarketTable.description}
              SupplyMarketTableData={SupplyMarketTable.SupplyMarketTableData}
            />
          ))}
    </>
  );
};

export default SupplyMarketTable;
