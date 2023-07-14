import { Box, Tabs } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { Layout } from '../components';
import DetailedHeader from './earn-detailed-header';
import EarnPoolSection from './pool-section';

const EarnDetails: FC<{ objectId: string }> = ({ objectId }) => {
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => {
    setIsPool(not);
  };

  console.log('>>>>>ObjectId', objectId);

  return (
    <Layout dashboard titlePage={<DetailedHeader />}>
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
      <EarnPoolSection />
    </Layout>
  );
};

export default EarnDetails;
