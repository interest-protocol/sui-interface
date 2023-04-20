import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const LearnMoreTitle: FC = () => {
  const t = useTranslations();

  return (
    <Title as="h2" mb="4xl" gridColumn="1/-1" textAlign="center">
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        letterSpacing="-0.15rem"
      >
        {t('landingPage.learnMore.title.first')}
      </Typography>
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        letterSpacing="-0.15rem"
      >
        {t('landingPage.learnMore.title.second')}
      </Typography>
    </Title>
  );
};

export default LearnMoreTitle;
