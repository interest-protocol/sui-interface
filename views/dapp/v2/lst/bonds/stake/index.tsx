import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BondsStakeForm from './stake-form';
import BondsStakeHeader from './stake-header';

const LSTBondsStake: FC = () => (
  <Box variant="container" display="flex">
    <Box
      gap="xl"
      width="100%"
      display="grid"
      gridTemplateColumns={['1fr', '1fr', '3fr 2fr']}
    >
      <Box
        p="xl"
        width="100%"
        borderRadius="m"
        color="onSurface"
        bg="surface.container"
      >
        <BondsStakeHeader />
        <BondsStakeForm />
      </Box>
      <Box
        p="xl"
        width="100%"
        borderRadius="m"
        color="onSurface"
        bg="surface.container"
      >
        Stake
      </Box>
    </Box>
  </Box>
);

export default LSTBondsStake;
