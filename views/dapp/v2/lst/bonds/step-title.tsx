import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { StepTitleProps } from './bonds.types';

const StepTitle: FC<StepTitleProps> = ({ step, title }) => (
  <Box display="flex" gap="m" py="l">
    <Box
      width="1.1rem"
      height="1.1rem"
      display="flex"
      border="1px solid"
      borderRadius="full"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="extraSmall">{step}</Typography>
    </Box>
    <Typography variant="small">{title}</Typography>
  </Box>
);

export default StepTitle;
