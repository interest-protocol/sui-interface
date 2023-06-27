import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import LendProvider from './lend.provider';
import LendTables from './lend-tables';
import LimitSection from './limit-section';
import OverviewSection from './overview-section';

const Lend: FC = () => {
  const t = useTranslations();

  return (
    <LendProvider>
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
          <OverviewSection />
          <LimitSection />
          <Box as="hr" borderColor="outline.outlineVariant" />
          <LendTables />
        </Box>
      </Box>
    </LendProvider>
  );
};

export default Lend;
