import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ExchangeRate from '../components/exchange-rate';
import Overview from '../components/overview';
import OverviewSecondRow from './overview-second-row';
import { OVERVIEW_DATA } from './stats.data';
import TotalRewards from './total-rewards';
import TotalStaked from './total-staked';

const StatsSection: FC = () => {
  const t = useTranslations();
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Overview
        title={t('lsd.overview.title')}
        data={OVERVIEW_DATA.slice(0, 3)}
      >
        <Box
          gap="l"
          display="flex"
          flexDirection={['column', 'column', 'row', 'row']}
          alignItems={['unset', 'unset', 'center', 'center']}
        >
          <OverviewSecondRow data={OVERVIEW_DATA.slice(3, 6)} />
        </Box>
      </Overview>
      <TotalStaked />
      <Box
        gap="l"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <TotalRewards />
        <ExchangeRate />
      </Box>
    </Box>
  );
};

export default StatsSection;
