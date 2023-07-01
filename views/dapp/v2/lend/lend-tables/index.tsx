import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import MarketTable from './market-table';

const LendTables: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F;'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4;';
  return (
    <Box mt="2rem">
      <Box
        display="grid"
        gridTemplateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
        ]}
        gap="m"
      >
        <Box
          color="text"
          borderRadius=".25rem"
          bg={surface1}
          height="fit-content"
        >
          <MarketTable title={t('lend.supplyTableTitle')} isSupply />
        </Box>
        <Box
          color="text"
          borderRadius=".25rem"
          bg={surface1}
          height="fit-content"
        >
          <MarketTable title={t('lend.borrowTableTitle')} />
        </Box>
      </Box>
    </Box>
  );
};

export default LendTables;
