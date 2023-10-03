import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import CardSection from '../../components/card-section';
import { ASSETS_DATA } from './assets.mock';
import AssetsTable from './table';

const PortfolioAssets: FC = () => {
  const t = useTranslations();

  return (
    <Box height="max-content" width="100%">
      <CardSection title={t('lst.assetsTable.title')}>
        <AssetsTable data={ASSETS_DATA} />
      </CardSection>
    </Box>
  );
};

export default PortfolioAssets;
