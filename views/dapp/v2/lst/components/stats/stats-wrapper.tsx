import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { StatsWrapperProps } from './stats.type';

const StatsWrapper: FC<PropsWithChildren<StatsWrapperProps>> = ({
  children,
  description,
  value,
}) => (
  <Box display="flex" gap="l">
    <Box
      width="3rem"
      height="3rem"
      display="flex"
      color="primary"
      alignItems="center"
      borderRadius="0.34rem"
      justifyContent="center"
      bg="surface.containerHigh"
    >
      {children}
    </Box>
    <Box>
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        opacity={0.6}
      >
        {description}
      </Typography>
      <Typography
        variant="extraSmall"
        fontSize="1.375rem"
        color="onSurface"
        lineHeight="1.75rem"
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

export default StatsWrapper;
