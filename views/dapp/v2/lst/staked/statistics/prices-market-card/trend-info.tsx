import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowTrendSVG } from '@/svg';

import { TrendInfoProps } from '../statistics.types';

const TrendInfo: FC<TrendInfoProps> = ({ isTrendUp, percentage, daysPast }) => (
  <Box display="flex" gap="0.75rem">
    <Box
      display="flex"
      alignItems="center"
      color={isTrendUp ? 'success' : 'error'}
    >
      <Box
        width="1rem"
        height="1rem"
        transform={`rotate(${isTrendUp ? 180 : 0}deg)`}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr="0.25rem"
      >
        <ArrowTrendSVG
          maxWidth="1rem"
          maxHeight="1rem"
          width="0.75rem"
          height="0.75rem"
        />
      </Box>
      <Typography variant="large" fontSize="0.688rem">
        {percentage}%
      </Typography>
    </Box>
    <Typography variant="large" fontSize="0.688rem" color="onSurface">
      ({daysPast}d)
    </Typography>
  </Box>
);

export default TrendInfo;
