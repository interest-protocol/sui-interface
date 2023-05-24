import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { getMetrics } from '@/api/analytics';
import { ChartSVG, TradesSVG, UserSVG } from '@/svg';
import { formatNumber } from '@/utils';

import UsedByCard from './used-by-card';
import UsedByTitle from './used-by-title';

const DEFAULT_DATA = {
  totalUsers: 0,
  tvl: 0,
  totalVolume: 0,
};

const UsedBy: FC = () => {
  const t = useTranslations();

  const [{ totalUsers, totalVolume, tvl }, setData] = useState(DEFAULT_DATA);

  useEffect(() => {
    (async () => {
      const result = await getMetrics();
      if (!isEmpty(result)) setData(result);
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
          value={formatNumber(totalUsers)}
          title={t('landingPage.usedBy.metrics.users.title')}
          description={t('landingPage.usedBy.metrics.users.description')}
        />
        <UsedByCard
          mobileHalf
          color="#E9D5FF"
          Icon={TradesSVG}
          value={formatNumber(tvl)}
          title={t('landingPage.usedBy.metrics.tvl.title')}
          description={t('landingPage.usedBy.metrics.tvl.description')}
        />
        <UsedByCard
          color="#FED7AA"
          Icon={ChartSVG}
          value={formatNumber(totalVolume)}
          title={t('landingPage.usedBy.metrics.volume.title')}
          description={t('landingPage.usedBy.metrics.volume.description')}
        />
      </Box>
    </Box>
  );
};

export default UsedBy;
