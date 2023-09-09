import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { StatsWrapperProps } from './stats.type';

const StatsWrapper: FC<PropsWithChildren<StatsWrapperProps>> = ({
  children,
  description,
  value,
  isCoin,
}) => (
  <Box display="flex" gap="l">
    <Box
      width="3rem"
      height="3rem"
      borderRadius="0.34rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color={isCoin ? 'white' : 'primary'}
      bg={isCoin ? '#6FBCF0' : 'surface.containerHigh'}
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
