import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Stats from './stats';

const Overview: FC = () => (
  <Box width={['100%', '100%', '100%', '55%']}>
    <Stats
      apy="100%"
      totalRewards="$100"
      totalStaked="574.23"
      derivatedSui={[
        { name: 'iSUI', value: '1.345' },
        { name: 'iSUI-PC', value: '1.345' },
        { name: 'iSUI-YC', value: '1.345' },
      ]}
    />
  </Box>
);

export default Overview;
