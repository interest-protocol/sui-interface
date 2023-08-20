import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

import { Layout } from '../components';
import EarnListCard from './earn-list';
import EarnOverview from './earn-overview';

const Earn: FC = () => {
  const t = useTranslations();

  return (
    <Layout dashboard titlePage={capitalize(t('earn.metadata.title'))}>
      <EarnOverview />
      <EarnListCard />
    </Layout>
  );
};

export default Earn;
