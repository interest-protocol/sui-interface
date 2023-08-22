import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import TopPoolsTableBody from './top-pools-table-body';
import TopPoolsTableHead from './top-pools-table-head';

const TopPoolsTable: FC = () => {
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
      <Box minWidth="55em">
        <TopPoolsTableHead title={t('metrics.tables.topPools')} />
        <Box p="l">
          <TopPoolsTableBody />
        </Box>
      </Box>
    </Box>
  );
};

export default TopPoolsTable;
