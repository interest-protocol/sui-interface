import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { Container, LoadingPage } from '@/components';
import { COINS, FARMS, RoutesEnum } from '@/constants';
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
import { parseError, parseFarmData } from './farm-details.utils';

const FarmDetails: FC<FarmDetailsProps> = ({
  farmMetadata,
  setModalState,
  modalState,
  form,
}) => {
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
    config: { refreshInterval: 0 },
  });

  const {
    data: ipxData,
    isLoading: isLoadingIPXData,
    error: ipxDataError,
  } = useGetFarm({
    // ETH_IPX POOL
    ...FARMS[2],
    account,
    config: { refreshInterval: 0 },
  });

  const {
    error: pendingRewardsError,
    mutate: mutatePendingRewards,
    data: pendingRewards,
  } = useGetPendingRewards(account, farmMetadata, { refreshInterval: 0 });

  const coinsPrices = useGetCoinsPrices([
    coin0.type,
    coin1.type,
    COINS[Network.DEVNET].ETH.type,
  ]);

  if (isLoading) return <LoadingPage />;

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
        message={parseError({
          error,
          coinsPricesError: coinsPrices.error,
          ipxDataError,
          web3Error,
          ipxStorageError,
          pendingRewardsError,
        })}
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

  return (
    <Container dapp width="100%" mt="XL">
      <GoBack route={RoutesEnum.Farms} />
      <Details farm={parsedData} />
      <FarmOptions
        farm={parsedData}
        hasAccountManager={hasAccountManager}
        refetch={async () => {
          await Promise.all([mutatePendingRewards(), mutate()]);
        }}
        modalState={modalState}
        setModalState={setModalState}
        form={form}
      />
    </Container>
  );
};

export default FarmDetails;
