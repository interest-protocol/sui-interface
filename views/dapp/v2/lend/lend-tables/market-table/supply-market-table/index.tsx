import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork, useWeb3 } from '@/hooks';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';
import { SupplyRow } from '@/views/dapp/v2/lend/lend-tables/lend-table.types';

import { makeSupplyData } from '../../lend-table.utils';
import MarketTableRowLoading from '../rows-loading';
import SupplyMarketTableBody from './supply-market-table-body';
import SupplyMarketTableHeader from './suppy-market-table-header';

const SupplyMarketTable: FC = () => {
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();
  const { loading, priceMap, marketRecord } = useLendProviderValue();

  const supplyData = loading
    ? []
    : makeSupplyData({
        marketRecord,
        coinsMap,
        priceMap,
        network,
      });

  return (
    <>
      <SupplyMarketTableHeader />
      {loading
        ? [1, 2].map(() => <MarketTableRowLoading key={v4()} />)
        : supplyData.map((supplyMarketTable) => (
            <SupplyMarketTableBody
              key={v4()}
              isEngaged={supplyMarketTable.isEngaged}
              description={supplyMarketTable.description}
              supplyMarketTableData={
                supplyMarketTable.data as ReadonlyArray<SupplyRow>
              }
            />
          ))}
    </>
  );
};

export default SupplyMarketTable;
