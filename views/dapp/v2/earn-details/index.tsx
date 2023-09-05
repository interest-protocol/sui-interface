import { Box, Tabs } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { FarmMetadataType } from '@/constants';
import { capitalize } from '@/utils';

import { Layout } from '../components';
import DetailedHeader from './earn-detailed-header';
import EarnFarmSection from './farm';
import EarnPoolSection from './pool/earn-details-pool';

const EarnDetails: FC<FarmMetadataType> = (props) => {
  const { coin0, coin1, stable } = props;

  const t = useTranslations();
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => {
    setIsPool(not);
  };

  return (
    <Layout
      dashboard
      titlePage={
        <DetailedHeader
          coins={[coin0, coin1]}
          headerOption={{
            isFarm: true,
            isStable: stable,
          }}
        />
      }
    >
      <Box display="flex" variant="container">
        <Box display="grid" gridColumn="1/-1" width="100%">
          <Box display="flex" width="100%">
            <Tabs
              onChangeTab={handleTab}
              defaultTabIndex={+!isPool}
              items={[
                capitalize(t('common.pool')),
                capitalize(t('common.farm')),
              ]}
            />
          </Box>
        </Box>
      </Box>
      {isPool ? <EarnPoolSection {...props} /> : <EarnFarmSection />}
    </Layout>
  );
};

export default EarnDetails;
