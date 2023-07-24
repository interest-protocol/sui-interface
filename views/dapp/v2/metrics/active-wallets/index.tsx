import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Chart from '../../components/charts';
import CardHeader from '../card-header';
import { findMaxObject } from '../metrics.utils';
import MetricsCardContainer from '../metrics-card-container';
import { ActiveWalletsProps } from './active-wallets.types';

const ActiveWallets: FC<ActiveWalletsProps> = ({ data }) => {
  return (
    <MetricsCardContainer>
      <CardHeader title="metrics.cards.activeWallets" hasAllTime hasDaily />
      <Box p="l">
        <Typography variant="large">{`$ ${
          findMaxObject(data, 'amount')?.amount
        }`}</Typography>
        <Typography variant="small">{`$ ${
          findMaxObject(data, 'amount')?.date
        }`}</Typography>
      </Box>
      <Box height="14.1875rem" pb="l">
        <Chart dataKey="amount" xAxis="day" data={data} type="bar" />
      </Box>
    </MetricsCardContainer>
  );
};

export default ActiveWallets;
