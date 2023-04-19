import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ChartSVG, TradesSVG, UserSVG } from '@/svg';
import { formatNumber } from '@/utils';

import UsedByCard from './used-by-card';
import UsedByTitle from './used-by-title';

const UsedBy: FC = () => {
  const t = useTranslations();

  return (
    <Box bg="background" py="4xl">
      <Box variant="container" justifyItems="unset">
        <UsedByTitle />
        <UsedByCard
          mobileHalf
          Icon={UserSVG}
          color="#D9F99D"
          value={formatNumber(1_500)}
          title={t('landingPage.usedBy.metrics.users.title')}
          description={t('landingPage.usedBy.metrics.users.description')}
        />
        <UsedByCard
          mobileHalf
          color="#E9D5FF"
          Icon={TradesSVG}
          value={formatNumber(19_000_00)}
          title={t('landingPage.usedBy.metrics.trades.title')}
          description={t('landingPage.usedBy.metrics.trades.description')}
        />
        <UsedByCard
          color="#FED7AA"
          Icon={ChartSVG}
          value={formatNumber(3_200_000_000)}
          title={t('landingPage.usedBy.metrics.staked.title')}
          description={t('landingPage.usedBy.metrics.staked.description')}
        />
      </Box>
    </Box>
  );
};

export default UsedBy;
