import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';

import { useLstData } from '../../lst.hooks';
import PriceMarketChart from './price-market-chart';
import SuiPriceInfo from './sui-price-info';
import TrendInfo from './trend-info';

const PricesMarketCard: FC = () => {
  const t = useTranslations();
  const { suiCoinInfo, last30daysPrice } = useLstData();
  const { dark } = useTheme() as Theme;

  const chartData = useMemo(
    () =>
      last30daysPrice.map(({ timestamp: date, price }) => {
        const priceDate = new Date(date);

        return {
          date,
          amount: price,
          description: priceDate.toUTCString(),
          day: `${priceDate.getDay()}/${priceDate.getMonth() + 1}`,
        };
      }),
    [last30daysPrice]
  );

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
        <SuiPriceInfo amount={suiCoinInfo?.price ?? 0} />
        <TrendInfo
          daysPast={1}
          percentage={Number(suiCoinInfo?.percent_change_24h.toFixed(2)) ?? 0}
        />
        <PriceMarketChart data={chartData} />
      </Box>
    </Box>
  );
};

export default PricesMarketCard;
