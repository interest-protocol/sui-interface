import { Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const NewsletterHeader: FC = () => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;

  return (
    <>
      <Title
        as="h2"
        mb={['0.5rem', '0.5rem', '0.5rem', '2xl']}
        gridColumn="1/8"
        fontWeight="400"
      >
        <Typography
          as="span"
          display="block"
          textAlign="center"
          variant="displayLarge"
          letterSpacing="-0.15rem"
          background={`linear-gradient(90deg, ${colors.primary} 27.62%, ${colors.primary}33 82.41%)`}
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('liquidity.newsletter.title')}
        </Typography>
      </Title>
      <Typography
        variant="medium"
        as="span"
        color="textSoft"
        mb="3.563rem"
        textAlign="left"
      >
        {t('liquidity.newsletter.description')}
      </Typography>
    </>
  );
};

export default NewsletterHeader;
