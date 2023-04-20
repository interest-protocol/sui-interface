import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const AdvantagesTitle: FC = () => {
  const t = useTranslations();

  return (
    <Title as="h1" mb="4xl" gridColumn="1/-1" textAlign="center">
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        letterSpacing="-0.15rem"
      >
        {t('landingPage.advantages.title.first')}
      </Typography>
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        letterSpacing="-0.15rem"
      >
        {t('landingPage.advantages.title.second')}
      </Typography>
    </Title>
  );
};

export default AdvantagesTitle;
