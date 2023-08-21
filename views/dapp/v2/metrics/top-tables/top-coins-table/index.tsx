import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import TopPoolsTableBody from './top-coins-table-body';
import TopPoolsTableHead from './top-coins-table-head';

const TopCoinsTable: FC = () => {
  const t = useTranslations();
  return (
    <Box
      width="100%"
      display="flex"
      overflowX="auto"
      borderRadius="m"
      overflowY="hidden"
      color="onSurface"
      gridColumn="1/-1"
      flexDirection="column"
      bg="surface.containerLow"
    >
      <Box minWidth="42.25em">
        <TopPoolsTableHead title={t('metrics.tables.topCoins')} />
        <Box p="l">
          <TopPoolsTableBody />
        </Box>
      </Box>
    </Box>
  );
};

export default TopCoinsTable;
