import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import SwapForm from './swap-form';
import SwapHeader from './swap-header';

const Swap: FC = () => (
  <Box variant="container" alignItems="center">
    <SwapHeader />
    <SwapForm />
  </Box>
);

export default Swap;
