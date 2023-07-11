import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { useNetwork, useWeb3 } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
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

  const { breakpoints } = useTheme() as Theme;

  const [isDesktop, setIsDesktop] = useState(false);

  const checkIfIsDesktop = () =>
    setIsDesktop(window.matchMedia(`(min-width: ${breakpoints[0]})`).matches);

  useEventListener('resize', checkIfIsDesktop, true);

  return (
    <>
      <MarketTableHeader
        headers={
          (isSupply
            ? isDesktop
              ? [
                  'lend.assetAPY',
                  'lend.supplied',
                  'common.v2.wallet.name',
                  'lend.collateral',
                ]
              : ['lend.assetAPY', 'lend.supplied', 'lend.collateral']
            : [
                'lend.assetAPY',
                'lend.borrowed',
                'lend.cash',
              ]) as unknown as ReadonlyArray<TTranslatedMessage>
        }
      />
      {loading
        ? [1, 2].map(() => <MarketTableLoadingRow key={v4()} />)
        : data.map((item) => <MarketTableBody key={v4()} {...item} />)}
    </>
  );
};

export default MarketTableContent;
