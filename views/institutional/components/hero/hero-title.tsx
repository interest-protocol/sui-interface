import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const HeroTitle: FC = () => {
  const t = useTranslations();

  return (
    <>
      <Title
        as="h1"
        my="4xl"
        gridColumn="1/8"
        fontWeight="400"
        display={['none', 'none', 'none', 'block']}
      >
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
        >
          {t('landingPage.hero.title.first', { isMobile: Number(false) })}
        </Typography>
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
        >
          {t('landingPage.hero.title.second', { isMobile: Number(false) })}
        </Typography>
      </Title>
      <Title
        as="h1"
        my="4xl"
        gridColumn="1/8"
        fontWeight="400"
        textAlign="center"
        display={['block', 'block', 'block', 'none']}
      >
        <Typography
          as="span"
          display="block"
          variant="displaySmall"
          letterSpacing="-0.15rem"
          background="linear-gradient(90deg, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)"
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('landingPage.hero.title.first', { isMobile: Number(true) })}
        </Typography>
        <Typography
          as="span"
          display="block"
          variant="displaySmall"
          letterSpacing="-0.15rem"
          background="linear-gradient(270deg, #99BBFF 50%, rgba(153, 187, 255, 0.2) 99.07%)"
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('landingPage.hero.title.second', { isMobile: Number(true) })}
        </Typography>
      </Title>
    </>
  );
};

export default HeroTitle;
