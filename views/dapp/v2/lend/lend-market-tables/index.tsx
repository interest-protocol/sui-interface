import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import MarketTable from './market-table';

const LendMarketTables: FC = () => {
  const t = useTranslations();

  return (
    <Box mt="2rem">
      <Box
        gap="m"
        display={['flex', 'flex', 'flex', 'flex', 'grid']}
        flexDirection="column"
        gridTemplateColumns="repeat(2, 1fr)"
      >
        <MarketTable title={t('lend.supplyTableTitle')} isSupply />
        <MarketTable title={t('lend.borrowTableTitle')} />
      </Box>
    </Box>
  );
};

export default LendMarketTables;
