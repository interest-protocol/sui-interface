import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import LendTables from '../components/lend-tables';
import LimitSection from './limit-section';
import TopMoversSection from './top-movers-section';

const Lend: FC = () => {
  const t = useTranslations();
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box pb="1rem" width="100%" gridColumn="1/-1">
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
        >
          {t('common.v2.lend.title')}
        </Typography>
        <TopMoversSection />
        <LimitSection />
        <Box as="hr" borderColor="outline.outlineVariant" />
        <LendTables />
      </Box>
    </Box>
  );
};

export default Lend;
