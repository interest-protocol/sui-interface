import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork, useWeb3 } from '@/hooks';
import { TTranslatedMessage } from '@/interface';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';

import { makeBorrowData, makeSupplyData } from '../lend-table.utils';
import MarketTableBody from './market-table-body';
import MarketTableHeader from './market-table-header';
import MarketTableLoadingRow from './market-table-loading-row';

const MarketTableContent: FC<{ isSupply?: boolean }> = ({ isSupply }) => {
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();
  const { loading, priceMap, marketRecord } = useLendProviderValue();

  const data = loading
    ? []
    : (isSupply ? makeSupplyData : makeBorrowData)({
        marketRecord,
        coinsMap,
        priceMap,
        network,
      });

  return (
    <>
      <MarketTableHeader
        headers={
          (isSupply
            ? [
                'lend.assetAPY',
                'lend.supplied',
                'common.v2.wallet.name',
                'lend.collateral',
              ]
            : [
                'lend.assetAPY',
                'lend.borrowed',
                'lend.cash',
              ]) as TTranslatedMessage
        }
      />
      {loading
        ? [1, 2].map(() => <MarketTableLoadingRow key={v4()} />)
        : data.map((item) => <MarketTableBody key={v4()} {...item} />)}
    </>
  );
};

export default MarketTableContent;
