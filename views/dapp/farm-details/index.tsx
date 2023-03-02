import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { Container, LoadingPage } from '@/components';
import { COINS, RoutesEnum } from '@/constants';
import {
  useGetCoinsPrices,
  useGetFarms,
  useGetIPXStorage,
  useGetVolatilePools,
  useWeb3,
} from '@/hooks';

import { GoBack } from '../components';
import ErrorView from '../components/error';
import { Details, FarmOptions } from './components';
import {
  FARM_TYPE_ARGS_EXTRA,
  POOL_TYPE_ARGS_EXTRA,
} from './farm-details.constants';
import { useGetPendingRewards } from './farm-details.hook';
import { FarmDetailsProps } from './farm-details.types';
import { parseError, parseFarmData } from './farm-details.utils';

const FarmDetails: FC<FarmDetailsProps> = ({
  farmMetadata,
  setModalState,
  modalState,
  form,
}) => {
  const coin0 = farmMetadata.coin0;
  const coin1 = farmMetadata.coin1;

  const {
    account,
    coinsMap,
    isFetchingCoinBalances,
    error: web3Error,
  } = useWeb3();

  const { data: ipxStorage, error: ipxStorageError } = useGetIPXStorage();

  const {
    error: pendingRewardsError,
    mutate: mutatePendingRewards,
    data: pendingRewards,
  } = useGetPendingRewards(account, farmMetadata, { refreshInterval: 0 });

  const {
    data: farms,
    mutate: mutateFarms,
    error: farmsError,
    isLoading: farmsLoading,
  } = useGetFarms(
    account,
    [farmMetadata.farmType].concat(FARM_TYPE_ARGS_EXTRA),
    1
  );

  const {
    data: pools,
    mutate: mutatePools,
    error: poolsError,
    isLoading: poolsLoading,
  } = useGetVolatilePools(
    account,
    [farmMetadata.coin0.type, farmMetadata.coin1.type].concat(
      POOL_TYPE_ARGS_EXTRA
    ),
    2
  );

  const coinsPrices = useGetCoinsPrices([
    coin0.type,
    coin1.type,
    COINS[Network.DEVNET].ETH.type,
  ]);

  if (farmsLoading) return <LoadingPage />;

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
        message={parseError({
          farmsError,
          coinsPricesError: coinsPrices.error,
          poolsError,
          web3Error,
          ipxStorageError,
          pendingRewardsError,
        })}
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
  });

  return (
    <Container dapp width="100%" mt="XL">
      <GoBack route={RoutesEnum.Farms} />
      <Details farm={parsedData} />
      <FarmOptions
        farm={parsedData}
        refetch={async () => {
          await Promise.all([
            mutatePendingRewards(),
            mutateFarms(),
            mutatePools(),
          ]);
        }}
        modalState={modalState}
        setModalState={setModalState}
        form={form}
      />
    </Container>
  );
};

export default FarmDetails;
