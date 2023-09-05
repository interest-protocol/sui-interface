import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import CoinInfo from './coin-info';
import { ExchangeRateProps } from './exchange-rate.type';

const ExchangeRate: FC<ExchangeRateProps> = ({ exchangeRateData }) => {
  const t = useTranslations();
  return (
    <Box
      width={['100%', '100%', '100%', '49%']}
      bg="surface.container"
      p="l"
      borderRadius="0.5rem"
    >
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mb="l"
        textTransform="capitalize"
      >
        {t('lsd.exchangeRate')}
      </Typography>
      <Box display="flex" flexDirection="column" gap="1rem">
        {exchangeRateData.map((exchangeRateItem) => (
          <Box key={v4()} display="flex" justifyContent="space-between">
            <CoinInfo
              coin={exchangeRateItem[0].coin}
              amount={exchangeRateItem[0].amount}
            />
            <Typography variant="title4" color="white">
              =
            </Typography>
            <CoinInfo
              coin={exchangeRateItem[1].coin}
              amount={exchangeRateItem[1].amount}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExchangeRate;
