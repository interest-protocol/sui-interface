import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import AllValidators from './all-validators';

const ValidatorsSection: FC = () => (
  <Box variant="container" display="flex" flexDirection="column">
    <AllValidators />
  </Box>
);

export default ValidatorsSection;
