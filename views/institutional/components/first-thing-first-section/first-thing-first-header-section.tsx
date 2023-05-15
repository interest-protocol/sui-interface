import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const FirstThingFirstHeader: FC = () => {
  const t = useTranslations();

  return (
    <Box maxWidth="44rem" mb="5rem" textAlign="left">
      <Typography
        mb="0.5rem"
        color="textSoft"
        variant="extraSmall"
        textTransform="capitalize"
      >
        {t('liquidity.firstThingFirst.subtitle')}
      </Typography>
      <Title mb="1.5rem">
        <Typography variant="displaySmall" color="primary">
          {t('liquidity.firstThingFirst.title')}
        </Typography>
      </Title>
      <Typography variant="medium" color="textSoft">
        {t('liquidity.firstThingFirst.description')}
      </Typography>
    </Box>
  );
};

export default FirstThingFirstHeader;
