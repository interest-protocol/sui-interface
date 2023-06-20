import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LinesModalProps } from './modal.types';

const LineModal: FC<LinesModalProps> = ({ description, value }) => {
  return (
    <Box
      p="1rem"
      display="flex"
      justifyContent="space-between"
      color="onSurface"
    >
      <Typography variant="small" lineHeight="1.25rem">
        {description}
      </Typography>
      <Typography variant="small" lineHeight="1.25rem">
        {value}
      </Typography>
    </Box>
  );
};

export default LineModal;
