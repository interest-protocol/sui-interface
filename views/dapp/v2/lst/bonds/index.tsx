import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Statistics from './statistics';

const Bonds: FC = () => {
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
      </Box>
    </Box>
  );
};

export default Bonds;
