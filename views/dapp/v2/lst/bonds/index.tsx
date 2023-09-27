import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BondsCard from './bonds-card';

const Bonds: FC = () => (
  <Box
    gap="l"
    display={['flex', 'flex', 'flex', 'grid']}
    flexDirection="column"
    gridTemplateColumns="1fr 1fr 1fr"
  >
    <BondsCard type="stake" />
    <BondsCard type="unstake" />
    <BondsCard type="rewards" />
  </Box>
);

export default Bonds;
