import { FC } from 'react';
import { v4 } from 'uuid';

import { BorrowMarketTableProps } from '../market-table/market-table.types';
import MarketTableRowLoading from '../market-table/rows-loading';
import BorrowMarketTableGroupRow from './group-rows';
import BorrowMarketTableHeader from './header-table';

const BorrowMarketTable: FC<BorrowMarketTableProps> = ({
  BorrowMarketTableData,
  isLoading,
}) => {
  return (
    <>
      <BorrowMarketTableHeader />
      {isLoading
        ? [1, 2].map(() => <MarketTableRowLoading key={v4()} />)
        : BorrowMarketTableData.map((BorrowMarketTable) => (
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
