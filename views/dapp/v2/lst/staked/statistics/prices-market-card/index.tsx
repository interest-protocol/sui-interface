import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

// import { COIN_PRICES } from '@/constants/liquidity-farms.constants';
import { PriceMarketCardProps } from './prices-market-card.types';
// import PriceMarketChart from './price-market-chart';
import SuiPriceInfo from './sui-price-info';

const PricesMarketCard: FC<PriceMarketCardProps> = ({ suiPrice }) => {
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
        <SuiPriceInfo amount={suiPrice} />
        {/* <TrendInfo percentage={0} daysPast={0} /> */}
        {/* <PriceMarketChart data={chartData} /> */}
      </Box>
    </Box>
  );
};

export default PricesMarketCard;
