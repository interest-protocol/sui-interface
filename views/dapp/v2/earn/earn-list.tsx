import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box } from '@interest-protocol/ui-kit';
import { not, toPairs } from 'ramda';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { getMetric } from '@/api/metrics';
import { useGetCoinsPrices, useNetwork, useWeb3 } from '@/hooks';

import { getPoolFromMetricLabel } from '../metrics/metrics.utils';
import { TopPoolsTableItem } from '../metrics/tables/table.types';
import { COIN_PRICES } from './earn.data';
import { useGetFarms, useGetIPXStorageAndPools } from './earn.hooks';
import { parseMainnetData, parseTestnetData } from './earn.utils';
import PoolCard from './earn-card/pool-card';
import EarnContainer from './earn-container';
import EarnHeader from './earn-header';

const EarnList: FC = () => {
  const { account } = useWeb3();
  const { network } = useNetwork();
  const [mainnetPools, setMainnetPools] = useState<
    ReadonlyArray<TopPoolsTableItem>
  >([]);
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => setIsPool(not);

  const { data: prices, error: pricesError } = useGetCoinsPrices(
    COIN_PRICES[network]
  );

  const { error: errorFarms, data: farms } = useGetFarms(account);

  const { ipxStorage, pools, error: errorPools } = useGetIPXStorageAndPools();

  console.log({ pricesError, errorFarms, errorPools });

  useEffect(() => {
    getMetric('get-top-pools').then((data) => {
      setMainnetPools(
        toPairs(data).map(([pair, info]) => ({
          ...info,
          pool: getPoolFromMetricLabel(pair),
        }))
      );
    });
  }, []);

  const parsedData =
    network === Network.MAINNET
      ? parseMainnetData(mainnetPools)
      : parseTestnetData({
          pools,
          farms,
          prices,
          network,
          ipxStorage,
        });

  return (
    <Box display="flex" variant="container" flexDirection="column">
      <EarnHeader isPool={isPool} handleTab={handleTab} />
      <EarnContainer columns={3}>
        {parsedData.map((earnItem) => (
          <PoolCard {...earnItem} key={v4()} isPool={isPool} />
        ))}
      </EarnContainer>
    </Box>
  );
};

export default EarnList;
