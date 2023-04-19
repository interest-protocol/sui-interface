import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const AdvantagesTitle: FC = () => {
  const t = useTranslations();

  return (
    <Typography
      as="h1"
      mb="4xl"
      textAlign="center"
      gridColumn="1/-1"
      variant="displayLarge"
    >
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
        {t('landingPage.advantages.title.first')}
      </Typography>
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
        {t('landingPage.advantages.title.second')}
      </Typography>
    </Typography>
  );
};

export default AdvantagesTitle;