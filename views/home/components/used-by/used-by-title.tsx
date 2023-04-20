import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const UsedByTitle: FC = () => {
  const t = useTranslations();

  return (
    <Title my="4xl" gridColumn="1/-1" textAlign="center">
      {t('landingPage.usedBy.title')}
    </Title>
  );
};

export default UsedByTitle;
