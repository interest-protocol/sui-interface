import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ChartSVG, TradesSVG, UserSVG } from '@/svg';
import { formatNumber } from '@/utils';

import UsedByCard from './used-by-card';
import UsedByTitle from './used-by-title';

const UsedBy: FC = () => (
  <Box bg="background" py="4xl">
    <Box variant="container" justifyItems="unset">
      <UsedByTitle />
      <UsedByCard
        mobileHalf
        title="users"
        Icon={UserSVG}
        color="#D9F99D"
        value={formatNumber(1_500)}
        description="Unique Addresses"
      />
      <UsedByCard
        mobileHalf
        color="#E9D5FF"
        title="Trades"
        Icon={TradesSVG}
        description="Pools deployed"
        value={formatNumber(19_000_00)}
      />
      <UsedByCard
        color="#FED7AA"
        title="staked"
        Icon={ChartSVG}
        description="Total TXs"
        value={formatNumber(3_200_000_000)}
      />
    </Box>
  </Box>
);

export default UsedBy;
