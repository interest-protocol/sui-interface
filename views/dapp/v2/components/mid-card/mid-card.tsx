import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ETHSVG } from '@/components/svg/v2';
import ETH from '@/components/svg/v2/eth';

const MidCard: FC = () => {
  return (
    <Box gridColumn="span 4" bg="surface.containerLow" height="100%" p="1.5rem">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="2rem"
      >
        <Typography variant="large" color="onSurface">
          Assets
        </Typography>
        <Typography variant="medium" color="#E9D5FF">
          See more
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Box
          bg="primary"
          p="0.5rem"
          width="fit-content"
          display="flex"
          borderRadius=".25rem"
        >
          <ETHSVG maxHeight="25px" maxWidth="25px" width="100%" />
        </Box>
        <Typography variant="medium" color="onSurface">
          ETH
        </Typography>
      </Box>
    </Box>
  );
};

export default MidCard;
