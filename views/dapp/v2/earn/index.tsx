import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useModal } from '@/hooks';
import { capitalize } from '@/utils';

import { Layout } from '../components';
import EarnListCard from './earn-list';
import FilterSection from './filters-section';
import EarnOverview from './overview';

const Earn: FC = () => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const openModalFilters = () =>
    setModal(<FilterSection handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });

  return (
    <Layout dashboard titlePage={capitalize(t('earn.metadata.title'))}>
      <EarnOverview />
      <EarnListCard openModalFilters={openModalFilters} />
    </Layout>
  );
};

export default Earn;
