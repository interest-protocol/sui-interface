import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ExchangeRateProps } from '@/views/dapp/v2/lst/components/exchange-rate/exchange-rate.type';

import ExchangeRateItem from './exchange-rate-item';

const ExchangeRate: FC<ExchangeRateProps> = ({ iSuiExchangeRate }) => {
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
        {t('lst.exchangeRate')}
      </Typography>
      <ExchangeRateItem
        to="SUI"
        from="iSui"
        finalValue={iSuiExchangeRate}
        initialValue={1}
      />
    </Box>
  );
};

export default ExchangeRate;
