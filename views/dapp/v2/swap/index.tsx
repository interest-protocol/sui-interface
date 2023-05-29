import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import SwapForm from './swap-form';
import SwapHeader from './swap-header';

const Swap: FC = () => (
  <Box
    variant="container"
    alignItems="center"
    minHeight="100%"
    display="flex"
    height="100%"
    gridColumn="1/-1"
    flexDirection="column"
    justifyContent={['space-between', 'space-between', 'unset']}
  >
    <SwapHeader />
    <SwapForm />
  </Box>
);

export default Swap;
