import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const AboutUsTitle: FC = () => {
  const t = useTranslations();

  return (
    <Title as="h2" textAlign="center" mb="4xl" gridColumn="1/-1">
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        letterSpacing="-0.15rem"
      >
        {t('landingPage.aboutUs.title.first')}
      </Typography>
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        letterSpacing="-0.15rem"
      >
        {t('landingPage.aboutUs.title.second')}
      </Typography>
    </Title>
  );
};

export default AboutUsTitle;
