import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ISUIPcToSUI from './i-sui-pc-to-sui';
import ISUIToSUI from './i-sui-to-sui';

const ExchangeRate: FC = () => {
  const t = useTranslations();
  return (
    <Box
      p="l"
      flex="1"
      gap="l"
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      bg="surface.container"
    >
      <Typography
        color="onSurface"
        variant="extraSmall"
        textTransform="capitalize"
      >
        {t('lsd.exchangeRate')}
      </Typography>
      <ISUIToSUI />
      <ISUIPcToSUI />
    </Box>
  );
};

export default ExchangeRate;
