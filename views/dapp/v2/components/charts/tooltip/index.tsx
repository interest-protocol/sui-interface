import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CustomTooltipProps } from './tooltip.types';

const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        p="s"
        borderRadius="m"
        bg="inverseSurface"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30)"
      >
        {payload.map(({ value, dataKey }: any) => (
          <Typography
            variant="extraSmall"
            color="inverseOnSurface"
            key={`tooltip-${dataKey}`}
          >{`$${value}`}</Typography>
        ))}
        <Typography
          color="outline"
          variant="extraSmall"
        >{`${payload[0].payload.description}`}</Typography>
      </Box>
    );
  }
  return null;
};

export default CustomTooltip;
