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
        gridColumn="1/8"
        fontWeight="400"
        variant="displayLarge"
        display={['none', 'none', 'block']}
      >
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
          background="linear-gradient(90deg, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)"
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('landingPage.hero.title.first', { isMobile: Number(false) })}
        </Typography>
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
          background="linear-gradient(270deg, #99BBFF 50%, rgba(153, 187, 255, 0.2) 99.07%)"
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('landingPage.hero.title.second', { isMobile: Number(false) })}
        </Typography>
      </Typography>
      <Typography
        as="h1"
        my="4xl"
        gridColumn="1/8"
        fontWeight="400"
        textAlign="center"
        variant="displaySmall"
        display={['block', 'block', 'none']}
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
      </Typography>
    </>
  );
};

export default HeroTitle;