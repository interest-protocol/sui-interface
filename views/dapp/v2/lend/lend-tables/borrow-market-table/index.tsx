import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork, useWeb3 } from '@/hooks';
import { BorrowRow } from '@/views/dapp/v2/lend/lend-tables/lend-table.types';
import { makeBorrowData } from '@/views/dapp/v2/lend/lend-tables/lend-table.utils';

import { BorrowMarketTableProps } from '../market-table/market-table.types';
import MarketTableRowLoading from '../market-table/rows-loading';
import BorrowMarketTableGroupRow from './group-rows';
import BorrowMarketTableHeader from './header-table';

const BorrowMarketTable: FC<BorrowMarketTableProps> = ({
  isLoading,
  marketRecord,
  moneyMarketStorage,
  userBalancesInUSD,
  priceMap,
}) => {
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();

  console.log('UNUSED PROPS', { userBalancesInUSD, moneyMarketStorage });
  return (
    <>
      <BorrowMarketTableHeader />
      {isLoading
        ? [1, 2].map(() => <MarketTableRowLoading key={v4()} />)
        : makeBorrowData({ marketRecord, priceMap, network, coinsMap }).map(
            (BorrowMarketTable) => (
              <BorrowMarketTableGroupRow
                key={v4()}
                isEngaged={BorrowMarketTable.isEngaged}
                description={BorrowMarketTable.description}
                BorrowMarketTableData={
                  BorrowMarketTable.data as ReadonlyArray<BorrowRow>
                }
              />
            )
          )}
    </>
  );
};

export default BorrowMarketTable;
