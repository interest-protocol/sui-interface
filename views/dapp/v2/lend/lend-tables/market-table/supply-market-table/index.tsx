import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork, useWeb3 } from '@/hooks';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';
import { SupplyRow } from '@/views/dapp/v2/lend/lend-tables/lend-table.types';

import { makeSupplyData } from '../../lend-table.utils';
import MarketTableRowLoading from '../rows-loading';
import SupplyMarketTableGroupRow from './group-rows';
import SupplyMarketTableHeader from './header-table';

const SupplyMarketTable: FC = () => {
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();

  const { loading, priceMap, marketRecord } = useLendProviderValue();

  return (
    <>
      <SupplyMarketTableHeader />
      {loading
        ? [1, 2].map(() => <MarketTableRowLoading key={v4()} />)
        : makeSupplyData({ marketRecord, coinsMap, priceMap, network }).map(
            (SupplyMarketTable) => (
              <SupplyMarketTableGroupRow
                key={v4()}
                isEngaged={SupplyMarketTable.isEngaged}
                description={SupplyMarketTable.description}
                SupplyMarketTableData={
                  SupplyMarketTable.data as ReadonlyArray<SupplyRow>
                }
              />
            )
          )}
    </>
  );
};

export default SupplyMarketTable;
