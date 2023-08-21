import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useCallback, useMemo, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { v4 } from 'uuid';

import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';
import { useGetCoinsPrices, useNetwork, useWeb3 } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';

import {
  filterPools,
  formatLpCoinToPool,
  isIPXLPCoin,
} from '../../dex-pool/pool.utils';
import { COIN_PRICES } from '../../farms/farms.constants';
import { useGetFarms, useGetIPXStorageAndPools } from '../../farms/farms.hooks';
import { parseData } from '../../farms/farms.utils';
import { EARN_POOL_DATA } from './earn.data';
import PoolCard from './earn-card/pool-card';
// import { v4 } from 'uuid';
// import { EARN_POOL_DATA, EARN_POSITION_DATA } from './earn.data';
import EarnContainer from './earn-container';
// import PoolCard from './earn-card/pool-card';
// import PositionCard from './earn-card/position-card';
import EarnHeader from './earn-header';

const EarnListCard: FC = () => {
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => setIsPool(not);

  const { network } = useNetwork();
  const { coins, coinsMap } = useWeb3();

  const tokensMetadataRecord = useReadLocalStorage<LocalTokenMetadataRecord>(
    `${LOCAL_STORAGE_VERSION}-sui-interest-tokens-metadata`
  );

  const lpCoins = coins.filter((coin) => isIPXLPCoin(coin.type, network));

  const myPools = lpCoins.map((object) =>
    formatLpCoinToPool({ object, network, tokensMetadataRecord })
  );
  // .filter(({ stable }) => stable === isStable);

  const { active, inactive } = useMemo(
    () => filterPools(network, coinsMap, false),
    [coinsMap, network]
  );

  const { account } = useWeb3();

  const prices = useGetCoinsPrices(COIN_PRICES[network]);

  const { error: errorFarms, data: farms } = useGetFarms(account);

  const { ipxStorage, pools, error: errorPools } = useGetIPXStorageAndPools();

  const data = parseData({
    pools,
    farms,
    ipxStorage,
    prices: prices.data,
    network,
  });

  return (
    <Box display="flex" variant="container" flexDirection="column">
      <EarnHeader isPool={isPool} handleTab={handleTab} />
      <EarnContainer columns={3}>
        {data.farms.map((earnItem) => (
          <PoolCard key={v4()} {...earnItem} />
        ))}
        {/* : EARN_POSITION_DATA.map((earnItem) => <PositionCard key={v4()} {...earnItem} />)} */}
      </EarnContainer>
    </Box>
  );
};

export default EarnListCard;
