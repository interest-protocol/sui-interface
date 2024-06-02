import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import CardSection from '../../components/card-section';
import AssetsTable from './table';

const PortfolioAssets: FC = () => {
  const t = useTranslations();

  return (
    <Box height="max-content" width="100%">
      <CardSection title={t('lst.assetsTable.title')}>
        <AssetsTable />
      </CardSection>
    </Box>
  );
};

export default PortfolioAssets;
