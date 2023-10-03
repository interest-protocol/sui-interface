import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { LineWrapperProps } from './modal.types';

const LineWrapper: FC<PropsWithChildren<LineWrapperProps>> = ({
  title,
  Icon,
  token,
  children,
}) => (
  <Box>
    <Typography
      variant="extraSmall"
      fontWeight="400"
      fontSize="0.6875rem"
      color="onSurface"
      opacity={0.6}
      mb="0.5rem"
      textTransform="capitalize"
    >
      {title}
    </Typography>
    <Box
      p="0.75rem"
      mb="l"
      borderRadius="0.25rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="surface.containerHighest"
    >
      <Box display="flex" gap="1rem" alignItems="center">
        {Icon}
        <Typography
          variant="small"
          fontWeight="400"
          fontSize="1rem"
          color="onSurface"
        >
          {token}
        </Typography>
      </Box>
      {children}
    </Box>
  </Box>
);

export default LineWrapper;
