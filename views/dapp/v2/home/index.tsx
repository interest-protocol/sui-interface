import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import CircleChartCard from '../components/charts/circle-chart/circle-chart-card';
import LineChartCard from '../components/charts/linear-chart/linear-chart-card';
import InfoCardGroup from '../components/home-info-cards/info-card-group';
import MidCardContainer from '../components/mid-card';
import MidCard from '../components/mid-card/mid-card';
import {
  CIRCLE_CHART_DATA,
  LINE_CHART_DATA,
  LINE_CHARTt_VISIBLE_DATA,
} from './charts.data';

const Home: FC = () => {
  return (
    <Layout dashboard>
      <Box variant="container">
        <InfoCardGroup />
        <LineChartCard
          data={LINE_CHART_DATA}
          visibleData={LINE_CHARTt_VISIBLE_DATA}
        />
        <CircleChartCard data={CIRCLE_CHART_DATA} />

        <MidCardContainer>
          <MidCard />
        </MidCardContainer>
        <MidCardContainer>
          <MidCard />
        </MidCardContainer>
        <MidCardContainer>
          <MidCard />
        </MidCardContainer>
      </Box>
    </Layout>
  );
};

export default Home;
