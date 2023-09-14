import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import CardSection from '../../components/card-section';
import { AssetsListProps } from '../portfolio.type';
import AssetsTable from './table';

const PortfolioAssets: FC<AssetsListProps> = ({ data }) => {
  const t = useTranslations();
  return (
    <Box height="max-content" width="100%">
      <CardSection title={t('lst.assetsTable.title')}>
        <AssetsTable data={data} />
      </CardSection>
    </Box>
  );
};

export default PortfolioAssets;
