import { FC } from 'react';
import { v4 } from 'uuid';

import { BorrowMarketTableProps } from '../market-table/market-table.types';
import BorrowMarketTableGroupRow from './group-rows';
import BorrowMarketTableHeader from './header-table';

const BorrowMarketTable: FC<BorrowMarketTableProps> = ({
  BorrowMarketTableData,
}) => {
  return (
    <>
      <BorrowMarketTableHeader />
      {BorrowMarketTableData.map((BorrowMarketTable) => (
        <BorrowMarketTableGroupRow
          key={v4()}
          isEngaged={BorrowMarketTable.isEngaged}
          description={BorrowMarketTable.description}
          BorrowMarketTableData={BorrowMarketTable.BorrowMarketTableData}
        />
      ))}
    </>
  );
};

export default BorrowMarketTable;
