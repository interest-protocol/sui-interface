import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const FooterHeader: FC = () => {
  const t = useTranslations();

  return (
    <>
      <Title
        as="h2"
        fontWeight="400"
        textAlign="left"
        mb={['0.5rem', '0.5rem', '0.5rem', '2xl']}
      >
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
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
