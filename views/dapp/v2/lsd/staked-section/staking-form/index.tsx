import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ProMode from './pro-mode';
import YourInfo from './your-info';

const StakingForm: FC = () => {
  return (
    <Box height="max-content" width={['100%', '100%', '100%', '45%']}>
      <ProMode />
      <YourInfo />
    </Box>
  );
};

export default StakingForm;
