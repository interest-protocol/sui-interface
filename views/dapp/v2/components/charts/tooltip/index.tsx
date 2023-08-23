import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { formatDollars } from '@/utils';

import { CustomTooltipProps } from './tooltip.types';

const CustomTooltip: FC<CustomTooltipProps> = ({
  active,
  payload,
  inDollars,
}) => {
  if (!(active && payload && payload.length)) return null;

  return (
    <Box
      p="s"
      borderRadius="m"
      bg="inverseSurface"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30)"
    >
      {payload.map(({ value, dataKey, payload }) => (
        <Box key={`tooltip-${dataKey}`}>
          <Typography variant="extraSmall" color="inverseOnSurface">
            {inDollars ? formatDollars(value) : value}
          </Typography>
          <Typography color="outline" variant="extraSmall">
            {payload.label ?? payload.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CustomTooltip;
