import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Layout } from '../components';
import LSDHeader from './lsd-header';
import Overview from './overview';
import StakingForm from './staking-form';

const LSD: FC = () => {
  const t = useTranslations();

  return (
    <Layout dashboard titlePage={<LSDHeader />}>
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
          <Overview />
          <StakingForm />
        </Box>
      </Box>
    </Layout>
  );
};

export default LSD;
