import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { StakedProps } from '../staked/staked.types';
import StakingForm from './staking-form';
import Statistics from './statistics';

const Bonds: FC<StakedProps> = (props) => {
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box
        pb="1rem"
        width="100%"
        gridColumn="1/-1"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap={['l', 'l', 'l', 'xl']}
      >
        <Statistics />
        <StakingForm {...props} />
      </Box>
    </Box>
  );
};

export default Bonds;
