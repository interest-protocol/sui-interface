import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Tabs } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { COINS } from '@/constants';

import { Layout } from '../components';
import DetailedHeader from './earn-detailed-header';
import EarnFarmSection from './farm';
import EarnPoolSection from './pool/pool-section';

const HEADER_OPTION = {
  isVolatile: true,
  isFarm: true,
};

const EarnDetails: FC<{ objectId: string }> = ({ objectId }) => {
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => {
    setIsPool(not);
  };

  console.log('>>>>>ObjectId', objectId);

  return (
    <Layout
      dashboard
      titlePage={
        <DetailedHeader
          coins={[COINS[Network.TESTNET].ETH, COINS[Network.TESTNET].BNB]}
          headerOption={HEADER_OPTION}
        />
      }
    >
      <Box display="flex" variant="container">
        <Box display="grid" gridColumn="1/-1" width="100%">
          <Box display="flex" width="100%">
            <Tabs
              items={['Pools', 'Farm']}
              defaultTabIndex={+!isPool}
              onChangeTab={handleTab}
            />
          </Box>
        </Box>
      </Box>
      {isPool ? <EarnPoolSection /> : <EarnFarmSection />}
    </Layout>
  );
};

export default EarnDetails;
