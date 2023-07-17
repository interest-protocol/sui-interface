import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import EarnPoolSectionOverview from './overview';
import AddLiquidityCard from './pool-card/add-liquidity';
import RemoveLiquidityCard from './pool-card/remove-liquidity';

const EarnPoolSection: FC = () => {
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <EarnPoolSectionOverview />
      <Box
        display="grid"
        gridTemplateColumns={[
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, minmax(17rem, 1fr))',
        ]}
        gap={['s', 's', 's', '2xl']}
      >
        <AddLiquidityCard />
        <RemoveLiquidityCard />
      </Box>
    </Box>
  );
};

export default EarnPoolSection;
