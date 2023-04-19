import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const LearnMoreTitle: FC = () => {
  const t = useTranslations();

  return (
    <Box gridColumn="1/-1">
      <Typography as="h1" variant="displayLarge" textAlign="center" mb="4xl">
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
          {t('landingPage.learnMore.title.first')}
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
          {t('landingPage.learnMore.title.second')}
        </Typography>
      </Typography>
    </Box>
  );
};

export default LearnMoreTitle;
