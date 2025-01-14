import BigNumber from 'bignumber.js';
import { AddressZero } from 'lib';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';

import { Container } from '@/components';
import { RoutesEnum } from '@/constants';
import {
  useGetCoinsPrices,
  useGetMultiGetObjects,
  useNetwork,
  useWeb3,
} from '@/hooks';

import { GoBack } from '../components';
import ErrorView from '../components/error';
import { Details, FarmOptions } from './components';
import { useGetFarm, useGetPendingRewards } from './farm-details.hook';
import { FarmDetailsProps } from './farm-details.types';
import { parseError, parseFarmData } from './farm-details.utils';
import { useGetIPXStorage } from './liquidity-farms-details.hooks';

const FarmDetails: FC<FarmDetailsProps> = ({
  farmMetadata,
  setModalState,
  modalState,
  form,
}) => {
  const coin0 = farmMetadata.coin0;
  const coin1 = farmMetadata.coin1;

  const t = useTranslations();

  const {
    account,
    coinsMap,
    isFetchingCoinBalances,
    error: web3Error,
  } = useWeb3();

  const { network } = useNetwork();

  const { data: ipxStorage, error: ipxStorageError } = useGetIPXStorage();

  const {
    error: pendingRewardsError,
    mutate: mutatePendingRewards,
    data: pendingRewards,
  } = useGetPendingRewards(account, farmMetadata, { refreshInterval: 0 });

  const {
    error: farmsError,
    data: farms,
    mutate: mutateFarms,
    isLoading: farmsLoading,
  } = useGetFarm(farmMetadata.lpCoin.type, account || AddressZero);

  const {
    data: pools,
    mutate: mutatePools,
    error: poolsError,
    isLoading: poolsLoading,
  } = useGetMultiGetObjects([farmMetadata.poolObjectId]);

  const coinsPrices = useGetCoinsPrices([coin0.type, coin1.type]);

  const loading = useMemo(
    () => farmsLoading || isFetchingCoinBalances || poolsLoading,
    [farmsLoading, isFetchingCoinBalances, poolsLoading]
  );

  if (
    farmsError ||
    coinsPrices.error ||
    ipxStorageError ||
    web3Error ||
    pendingRewardsError ||
    poolsError
  )
    return (
      <ErrorView
        message={t(
          parseError({
            farmsError,
            coinsPricesError: coinsPrices.error,
            poolsError,
            web3Error,
            ipxStorageError,
            pendingRewardsError,
          })
        )}
      />
    );

  const parsedData = parseFarmData({
    farms,
    farmMetadata,
    coinsMap,
    pools,
    prices: coinsPrices.data,
    ipxStorage,
    pendingRewards: new BigNumber(pendingRewards),
    network,
  });

  return (
    <Container dapp width="100%" mt="XL">
      <GoBack route={RoutesEnum.LiquidityFarms} />
      <Details farm={parsedData} loading={loading} />
      <FarmOptions
        loading={loading || parsedData.loading}
        farm={parsedData}
        mutateFarms={mutateFarms}
        modalState={modalState}
        setModalState={setModalState}
        form={form}
        mutatePendingRewards={mutatePendingRewards}
        mutatePools={mutatePools}
      />
    </Container>
  );
};

export default FarmDetails;
