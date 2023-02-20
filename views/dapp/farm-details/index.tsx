import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { Container } from '@/components';
import { RoutesEnum } from '@/constants';

import { GoBack } from '../components';
import { Details, FarmOptions } from './components';
import { FARM_DATA } from './farm-details.mock';
import { FarmDetailsProps } from './farm-details.types';

const FarmDetails: FC<FarmDetailsProps> = ({ objectId }) => {
  console.log('>> ObjectId :: ', objectId);

  return (
    <Container dapp width="100%" mt="XL">
      <GoBack route={RoutesEnum.Farms} />
      <Details farm={FARM_DATA} />
      <FarmOptions
        farm={FARM_DATA}
        intUSDPrice={new BigNumber(Math.random() * 999999999999)}
        refetch={async () => {
          console.log('>> refetch');
        }}
        loading={false}
      />
    </Container>
  );
};

export default FarmDetails;
