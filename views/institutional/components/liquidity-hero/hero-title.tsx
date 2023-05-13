import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const HeroTitle: FC = () => {
  const t = useTranslations();

  return (
    <>
      <Typography
        as="h1"
        my="4xl"
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
    </>
  );
};

export default HeroTitle;
