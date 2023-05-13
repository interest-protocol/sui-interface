import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

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
      <Typography variant="displaySmall" color="primary" mb="1.5rem">
        {t('liquidity.firstThingFirst.title')}
      </Typography>
      <Typography variant="medium" color="textSoft">
        {t('liquidity.firstThingFirst.description')}
      </Typography>
    </Box>
  );
};

export default FirstThingFirstHeader;
