import BigNumber from 'bignumber.js';
import { find, propEq } from 'ramda';
import { FC } from 'react';

import { Container, LoadingPage } from '@/components';
import { FARMS, RoutesEnum } from '@/constants';
import { useWeb3 } from '@/hooks';
import { parseFarmData } from '@/utils/farms';

import { GoBack } from '../components';
import ErrorView from '../components/error';
import { Details, FarmOptions } from './components';
import { useFarmData } from './farm-details.hook';
import { FarmDetailsProps } from './farm-details.types';

const FarmDetails: FC<FarmDetailsProps> = ({ objectId }) => {
  const { account } = useWeb3();
  const farmData = find(propEq('objectId', objectId))(FARMS) as typeof FARMS[0];

  const { data, mutate, isLoading, error } = useFarmData({
    ...farmData,
    account,
  });

  if (isLoading) return <LoadingPage />;

  if (error) return <ErrorView message={error} />;

  const parsedData = parseFarmData(data);

  return (
    <Container dapp width="100%" mt="XL">
      <GoBack route={RoutesEnum.Farms} />
      <Details farm={parsedData} />
      <FarmOptions
        farm={parsedData}
        intUSDPrice={new BigNumber(Math.random() * 999999999999)}
        refetch={async () => {
          await mutate();
        }}
        loading={false}
      />
    </Container>
  );
};

export default FarmDetails;
