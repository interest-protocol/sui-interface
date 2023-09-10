import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ExchangeRateItem from './exchange-rate-item';

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
      <ExchangeRateItem to="SUI" from="iSui" finalValue={1} initialValue={1} />
      <ExchangeRateItem
        to="SUI"
        from="iSui-PC"
        finalValue={1.2}
        initialValue={1}
      />
    </Box>
  );
};

export default ExchangeRate;
