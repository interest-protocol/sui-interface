import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { CardSectionProps } from './card-section';

const CardSection: FC<PropsWithChildren<CardSectionProps>> = ({
  title,
  children,
  rightAction,
  withOpactity,
}) => (
  <Box bg="surface.container" p="l" borderRadius="0.5rem">
    <Box
      mb="l"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        color="onSurface"
        fontSize="0.688rem"
        variant="extraSmall"
        textTransform="capitalize"
        opacity={withOpactity ? 0.6 : 'unset'}
      >
        {title}
      </Typography>
      {rightAction}
    </Box>
    {children}
  </Box>
);

export default CardSection;
