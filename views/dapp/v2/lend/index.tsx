import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import BorrowLimitIndicator from './borrow-limit-indicator';
import LendProvider from './lend.provider';
import LendMarketTables from './lend-market-tables';
import Overview from './overview';

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
            {t('lend.metadata.title')}
          </Typography>
          <Overview />
          <BorrowLimitIndicator />
          <Box as="hr" borderColor="outline.outlineVariant" />
          <LendMarketTables />
        </Box>
      </Box>
    </LendProvider>
  );
};

export default Lend;
