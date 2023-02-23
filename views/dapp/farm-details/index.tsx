import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { find, propEq } from 'ramda';
import { FC } from 'react';

import { Container, LoadingPage } from '@/components';
import { COINS, FARMS, RoutesEnum } from '@/constants';
import { useGetCoinsPrices, useLocalStorage, useWeb3 } from '@/hooks';

import { GoBack } from '../components';
import ErrorView from '../components/error';
import { useGetVolatilePool } from '../dex-pool-details/dex-pool-details.hooks';
import { Details, FarmOptions } from './components';
import { useFarmData } from './farm-details.hook';
import { FarmDetailsProps } from './farm-details.types';
import { parseFarmData } from './farm-details.utils';

const COIN_PRICES = [
  COINS[Network.DEVNET].ETH.type,
  COINS[Network.DEVNET].BTC.type,
  COINS[Network.DEVNET].DAI.type,
  COINS[Network.DEVNET].BNB.type,
  COINS[Network.DEVNET].USDT.type,
  COINS[Network.DEVNET].USDC.type,
];

const FarmDetails: FC<FarmDetailsProps> = ({ objectId }) => {
  const hasAccountManager = useLocalStorage<boolean>(
    'sui-interest-farm-account',
    false
  );

  const {
    account,
    coinsMap,
    isFetchingCoinBalances,
    error: web3Error,
  } = useWeb3();

  const farmData = find(propEq('objectId', objectId))(FARMS) as typeof FARMS[0];

  const {
    error: getPoolError,
    data: volatilePool,
    // mutate: updateVolatilePools,
  } = useGetVolatilePool(farmData.poolObjectId);

  const { data, mutate, isLoading, error } = useFarmData({
    ...farmData,
    account,
  });

  const prices = useGetCoinsPrices(COIN_PRICES);

  if (isLoading || prices.isLoading || isFetchingCoinBalances)
    return <LoadingPage />;

  if (error || prices.error || getPoolError || web3Error)
    return (
      <ErrorView message={error || prices.error || getPoolError || web3Error} />
    );

  const parsedData = parseFarmData(data, prices.data, volatilePool, coinsMap);

  return (
    <Container dapp width="100%" mt="XL">
      <GoBack route={RoutesEnum.Farms} />
      <Details farm={parsedData} />
      <FarmOptions
        farm={parsedData}
        hasAccountManager={hasAccountManager}
        intUSDPrice={BigNumber(34)}
        refetch={async () => {
          await mutate();
        }}
        loading={false}
      />
    </Container>
  );
};

export default FarmDetails;
