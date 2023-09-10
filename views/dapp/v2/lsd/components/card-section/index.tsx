import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { CardSectionProps } from './card-section';

const CardSection: FC<PropsWithChildren<CardSectionProps>> = ({
  title,
  withOpactity,
  children,
}) => (
  <Box bg="surface.container" p="l" borderRadius="0.5rem">
    <Typography
      variant="extraSmall"
      fontSize="0.688rem"
      color="onSurface"
      mb="l"
      textTransform="capitalize"
      opacity={withOpactity ? 0.6 : 'unset'}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

export default CardSection;
