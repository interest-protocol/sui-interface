import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { StakingFormProps } from '@/views/dapp/v2/lst/staked/staked.types';

import YourInfo from './your-info';

const StakingForm: FC<StakingFormProps> = ({ form }) => (
  <Box height="max-content" width={['100%', '100%', '100%', '45%']}>
    <YourInfo form={form} />
  </Box>
);

export default StakingForm;
