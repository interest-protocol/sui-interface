import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const HeroTitle: FC = () => {
  const t = useTranslations();

  return (
    <Title as="h1" fontWeight="400" my="4xl">
      <Typography
        mx="0"
        color="primary"
        gridColumn="1/7"
        fontWeight="400"
        display={'block'}
        variant="displayLarge"
      >
        <Typography
          as="span"
          textAlign="left"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
        >
          {t('liquidity.hero.title', { isMobile: Number(false) })}
        </Typography>
      </Typography>
    </Title>
  );
};

export default HeroTitle;
