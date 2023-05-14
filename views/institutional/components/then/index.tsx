import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';
import ThenCards from './then-cards';

const ThenSection: FC = () => {
  const t = useTranslations();

  return (
    <Box
      variant="container"
      justifyItems="unset"
      py={['3.5rem', '3.5rem', '3.5rem', '5rem']}
    >
      <Title textAlign="left" gridColumn="1/-1">
        {t('liquidity.then.title')}
      </Title>
      <Typography
        textAlign="left"
        variant="medium"
        gridColumn="1/-1"
        color="textSoft"
      >
        {t('liquidity.then.description')}
      </Typography>
      <ThenCards />
    </Box>
  );
};

export default ThenSection;
