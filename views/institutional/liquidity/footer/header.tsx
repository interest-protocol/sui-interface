import { Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../../components/title';

const FooterHeader: FC = () => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  return (
    <>
      <Title
        as="h2"
        mb={['0.5rem', '0.5rem', '0.5rem', '2xl']}
        fontWeight="400"
      >
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
          background={`linear-gradient(90deg, ${colors.primary} 27.62%, ${colors.primary}33 82.41%)`}
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('liquidity.footer.title')}
        </Typography>
      </Title>
      <Typography
        variant="medium"
        as="span"
        color="textSoft"
        textAlign="left"
        mb="5rem"
        width={['16.625rem', '16.625rem', '16.625rem', 'unset']}
      >
        {t('liquidity.footer.description')}
      </Typography>
    </>
  );
};

export default FooterHeader;
