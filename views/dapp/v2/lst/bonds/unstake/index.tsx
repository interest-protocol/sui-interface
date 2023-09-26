import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BondsUnstakeForm from './unstake-form';
import BondsUnstakeHeader from './unstake-header';

const LSTBondsUnstake: FC = () => (
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
        <BondsUnstakeHeader />
        <BondsUnstakeForm />
      </Box>
      <Box
        p="xl"
        width="100%"
        borderRadius="m"
        color="onSurface"
        bg="surface.container"
      >
        Unstake
      </Box>
    </Box>
  </Box>
);

export default LSTBondsUnstake;
