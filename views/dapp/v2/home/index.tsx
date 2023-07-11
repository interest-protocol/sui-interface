import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import CircleChartCard from '../components/charts/circle-chart/circle-chart-card';
import LineChartCard from '../components/charts/linear-chart/linear-chart-card';
import CollectRewardCard from '../components/collect-reward-card/card';
import InfoCardGroup from '../components/home-info-cards/info-card-group';
import MidCardContainer from '../components/home-mid-cards';
import MidCard from '../components/home-mid-cards/card';
import {
  ACTIVITY_CARD_POOL_DATA,
  ASSETS_CARD_POOL_DATA,
} from '../components/home-mid-cards/mid-card.data';
import SmallCard from '../components/small-home-cards/card';
import {
  CIRCLE_CHART_DATA,
  LINE_CHART_DATA,
  LINE_CHARTt_VISIBLE_DATA,
} from './charts.data';

const Home: FC = () => {
  const t = useTranslations();

  return (
    <Box variant="container">
      <InfoCardGroup />
      <LineChartCard
        data={LINE_CHART_DATA}
        visibleData={LINE_CHARTt_VISIBLE_DATA}
      />
      <CircleChartCard data={CIRCLE_CHART_DATA} />
      <MidCardContainer>
        <MidCard
          data={ASSETS_CARD_POOL_DATA}
          title={t('dapp.assets')}
          withSuffix
          hasSuffixWithDesc
        />
      </MidCardContainer>
      <MidCardContainer>
        <MidCard
          data={ACTIVITY_CARD_POOL_DATA}
          title={t('dapp.activity')}
          hasPrefixWithDesc
        />
      </MidCardContainer>
      <MidCardContainer>
        <SmallCard />
        <CollectRewardCard />
      </MidCardContainer>
    </Box>
  );
};

export default Home;
