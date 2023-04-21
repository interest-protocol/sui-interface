import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';

import { getMetrics } from '@/api/analytics';
import { ChartSVG, TradesSVG, UserSVG } from '@/svg';
import { formatNumber } from '@/utils';

import UsedByCard from './used-by-card';
import UsedByTitle from './used-by-title';

const DEFAULT_DATA = {
  totalAccounts: 1_500,
  totalPools: 19_000_000,
  totalTXs: 3_200_000_000,
};

const UsedBy: FC = () => {
  const t = useTranslations();

  const [{ totalAccounts, totalPools, totalTXs }, setData] =
    useState(DEFAULT_DATA);

  useEffect(() => {
    (async () => {
      const result = await getMetrics();

      setData(result ?? DEFAULT_DATA);
    })();
  }, []);

  return (
    <Box bg="background" py="4xl">
      <Box variant="container" justifyItems="unset">
        <UsedByTitle />
        <UsedByCard
          mobileHalf
          Icon={UserSVG}
          color="#D9F99D"
          value={formatNumber(totalAccounts)}
          title={t('landingPage.usedBy.metrics.users.title')}
          description={t('landingPage.usedBy.metrics.users.description')}
        />
        <UsedByCard
          mobileHalf
          color="#E9D5FF"
          Icon={TradesSVG}
          value={formatNumber(totalPools)}
          title={t('landingPage.usedBy.metrics.markets.title')}
          description={t('landingPage.usedBy.metrics.markets.description')}
        />
        <UsedByCard
          color="#FED7AA"
          Icon={ChartSVG}
          value={formatNumber(totalTXs)}
          title={t('landingPage.usedBy.metrics.transactions.title')}
          description={t('landingPage.usedBy.metrics.transactions.description')}
        />
      </Box>
    </Box>
  );
};

export default UsedBy;
