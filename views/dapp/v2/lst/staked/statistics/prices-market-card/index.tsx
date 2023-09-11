import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { COINS } from '@/constants';
import { COIN_PRICES } from '@/constants/liquidity-farms.constants';
import { useGetCoinsPrices } from '@/hooks';

import PriceMarketChart from './price-market-chart';
import SuiPriceInfo from './sui-price-info';
import TrendInfo from './trend-info';

const PricesMarketCard: FC = () => {
  const { data, isLoading } = useGetCoinsPrices([
    COINS[Network.MAINNET].SUI.type,
  ]);
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
        {t('lst.cards.priceMarket.title')}
      </Typography>
      <Box
        display="flex"
        alignItems="flex-end"
        flexWrap="wrap"
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/*<SuiPriceInfo {...priceInfo} />*/}
        {/*<TrendInfo {...trendInfo} />*/}
        {/*<PriceMarketChart data={chartData} />*/}
      </Box>
    </Box>
  );
};

export default PricesMarketCard;
