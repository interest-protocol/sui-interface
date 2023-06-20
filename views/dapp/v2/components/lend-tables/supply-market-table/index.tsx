import { FC } from 'react';
import { v4 } from 'uuid';

import { SupplyMarketTableProps } from '../market-table/market-table.types';
import SupplyMarketTableGroupRow from './group-rows';
import SupplyMarketTableHeader from './header-table';

const SupplyMarketTable: FC<SupplyMarketTableProps> = ({
  SupplyMarketTableData,
}) => {
  return (
    <>
      <SupplyMarketTableHeader />
      {SupplyMarketTableData.map((SupplyMarketTable) => (
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
