import { Box, Tabs, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Layout } from '../components';
import LSDHeader from './lsd-header';
import Overview from './overview';
import StakingForm from './staking-form';
import Statistics from './statistics';

const LSD: FC = () => {
  const t = useTranslations();
  const [changeTab, setChangeTab] = useState<number>(0);

  return (
    <Layout dashboard titlePage={<LSDHeader />}>
      <Tabs
        items={['Stake', 'Stats']}
        defaultTabIndex={changeTab}
        onChangeTab={(changeTab) => setChangeTab(changeTab)}
      />
      {changeTab === 0 ? (
        <Box variant="container" display="flex" flexDirection="column">
          <Box
            pb="1rem"
            width="100%"
            gridColumn="1/-1"
            display="flex"
            flexDirection={['column', 'column', 'column', 'row']}
            gap={['l', 'l', 'l', '3xl']}
          >
            <Typography
              display={['block', 'block', 'block', 'none']}
              variant="displayLarge"
              color="onSurface"
              textTransform="capitalize"
              textAlign="center"
            >
              {t('lsd.metadata.title')}
            </Typography>
            <Statistics />
            <StakingForm />
          </Box>
        </Box>
      ) : (
        <Overview />
      )}
    </Layout>
  );
};

export default LSD;
