import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SwapProps } from './swap.types';
import SwapForm from './swap-form';
import SwapHeader from './swap-header';

const Swap: FC<SwapProps> = ({ form }) => (
  <Box
    display="flex"
    gridColumn="1/-1"
    variant="container"
    alignItems="center"
    flexDirection="column"
    minHeight={['100%', '100%', 'unset']}
    justifyContent={['space-between', 'space-between', 'unset']}
  >
    <SwapHeader />
    <SwapForm form={form} />
  </Box>
);

export default Swap;
