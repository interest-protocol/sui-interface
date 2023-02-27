import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { Container, LoadingPage } from '@/components';
import { FARMS, RoutesEnum } from '@/constants';
import {
  useGetCoinsPrices,
  useGetIPXStorage,
  useLocalStorage,
  useWeb3,
} from '@/hooks';

import { GoBack } from '../components';
import ErrorView from '../components/error';
import { Details, FarmOptions } from './components';
import { useGetFarm, useGetPendingRewards } from './farm-details.hook';
import { FarmDetailsProps } from './farm-details.types';
import { parseFarmData } from './farm-details.utils';

const FarmDetails: FC<FarmDetailsProps> = ({ farmMetadata }) => {
  const hasAccountManager = useLocalStorage<boolean>(
    'sui-interest-farm-account',
    false
  );

  const coin0 = farmMetadata.coin0;
  const coin1 = farmMetadata.coin1;

  const {
    account,
    coinsMap,
    isFetchingCoinBalances,
    error: web3Error,
  } = useWeb3();

  const { data: ipxStorage, error: ipxStorageError } = useGetIPXStorage();

  const { data, mutate, isLoading, error } = useGetFarm({
    ...farmMetadata,
    account,
  });

  const {
    data: ipxData,
    isLoading: isLoadingIPXData,
    error: ipxDataError,
  } = useGetFarm({
    // ETH_IPX POOL
    ...FARMS[2],
    account,
  });

  const {
    error: pendingRewardsError,
    mutate: mutatePendingRewards,
    data: pendingRewards,
  } = useGetPendingRewards(account, farmMetadata);

  const coinsPrices = useGetCoinsPrices([coin0.type, coin1.type]);

  if (
    isLoading ||
    coinsPrices.isLoading ||
    isFetchingCoinBalances ||
    isLoadingIPXData
  )
    return <LoadingPage />;

  if (
    error ||
    coinsPrices.error ||
    ipxStorageError ||
    web3Error ||
    ipxDataError ||
    pendingRewardsError
  )
    return (
      <ErrorView
        message={
          error ||
          coinsPrices.error ||
          ipxStorageError ||
          web3Error ||
          ipxDataError ||
          pendingRewardsError
        }
      />
    );

  const parsedData = parseFarmData({
    data,
    farmMetadata,
    coinsMap,
    ipxPool: ipxData?.farmArray.length ? ipxData.farmArray[1] : undefined,
    prices: coinsPrices.data,
    ipxStorage,
    pendingRewards: new BigNumber(pendingRewards),
  });

  return <div>hello world</div>;

  return (
    <Container dapp width="100%" mt="XL">
      <GoBack route={RoutesEnum.Farms} />
      <Details farm={parsedData} />
      <FarmOptions
        farm={parsedData}
        hasAccountManager={hasAccountManager}
        intUSDPrice={BigNumber(34)}
        refetch={async () => {
          await Promise.all([mutatePendingRewards, mutate]);
        }}
        loading={false}
      />
    </Container>
  );
};

export default FarmDetails;
