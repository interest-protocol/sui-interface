import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork, useWeb3 } from '@/hooks';
import { SupplyRow } from '@/views/dapp/v2/lend/lend-tables/lend-table.types';

import { makeSupplyData } from '../lend-table.utils';
import { SupplyMarketTableProps } from '../market-table/market-table.types';
import MarketTableRowLoading from '../market-table/rows-loading';
import SupplyMarketTableGroupRow from './group-rows';
import SupplyMarketTableHeader from './header-table';

const SupplyMarketTable: FC<SupplyMarketTableProps> = ({
  isLoading,
  userBalancesInUSD,
  moneyMarketStorage,
  marketRecord,
  priceMap,
}) => {
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();

  const supplyData = isLoading
    ? []
    : makeSupplyData({
        marketRecord,
        coinsMap,
        priceMap,
        network,
      });

  console.log('UNUSED PROPS', { userBalancesInUSD, moneyMarketStorage });

  return (
    <>
      <SupplyMarketTableHeader />
      {isLoading
        ? [1, 2].map(() => <MarketTableRowLoading key={v4()} />)
        : supplyData.map((SupplyMarketTable, index) => (
            <>
              <SupplyMarketTableGroupRow
                key={v4()}
                isEngaged={SupplyMarketTable.isEngaged}
                description={SupplyMarketTable.description}
                SupplyMarketTableData={
                  SupplyMarketTable.data as ReadonlyArray<SupplyRow>
                }
              />

              {supplyData.length != index + 1 && (
                <Box
                  as="hr"
                  width="60%"
                  mx="auto"
                  border="1px dashed"
                  borderColor="outline.outlineVariant"
                />
              )}
            </>
          ))}
    </>
  );
};

export default SupplyMarketTable;
