import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import YourInfo from './your-info';

const StakingForm: FC = () => (
  <Box height="max-content" width={['100%', '100%', '100%', '45%']}>
    <YourInfo />
  </Box>
);

export default StakingForm;
