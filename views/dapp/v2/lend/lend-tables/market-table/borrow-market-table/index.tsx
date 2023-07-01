import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork, useWeb3 } from '@/hooks';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';
import { BorrowRow } from '@/views/dapp/v2/lend/lend-tables/lend-table.types';
import { makeBorrowData } from '@/views/dapp/v2/lend/lend-tables/lend-table.utils';

import MarketTableRowLoading from '../rows-loading';
import BorrowMarketTableHeader from './borrow-market-table-header';
import BorrowMarketTableGroupRow from './borrow-table-body';

const BorrowMarketTable: FC = () => {
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();

  const { marketRecord, priceMap, loading } = useLendProviderValue();

  const borrowData = loading
    ? []
    : makeBorrowData({
        marketRecord,
        priceMap,
        network,
        coinsMap,
      });

  return (
    <>
      <BorrowMarketTableHeader />
      {loading
        ? [1, 2].map(() => <MarketTableRowLoading key={v4()} />)
        : borrowData.map((BorrowMarketTable, index) => (
            <Box key={v4()}>
              <BorrowMarketTableGroupRow
                isEngaged={BorrowMarketTable.isEngaged}
                description={BorrowMarketTable.description}
                BorrowMarketTableData={
                  BorrowMarketTable.data as ReadonlyArray<BorrowRow>
                }
              />
              {borrowData.length != index + 1 && (
                <Box
                  as="hr"
                  width="60%"
                  mx="auto"
                  border="1px dashed"
                  borderColor="outline.outlineVariant"
                />
              )}
            </Box>
          ))}
    </>
  );
};

export default BorrowMarketTable;
