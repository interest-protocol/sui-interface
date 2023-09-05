import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import PriceMarketChart from './price-market-chart';
import SuiPriceInfo from './sui-price-info';
import TrendInfo from './trend-info';

const PricesMarketCard: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  return (
    <Box bg="surface.container" p="l" borderRadius="0.5rem">
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color={dark ? 'white' : 'black'}
        mb="l"
        textTransform="capitalize"
      >
        {t('lsd.cards.priceMarket.title')}
      </Typography>
      <Box
        display="flex"
        alignItems="flex-end"
        flexWrap="wrap"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <SuiPriceInfo />
        <TrendInfo percentage={2.87} daysPast={12} />
        <PriceMarketChart />
      </Box>
    </Box>
  );
};

export default PricesMarketCard;
