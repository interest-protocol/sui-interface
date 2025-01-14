import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

const MetricsCardContainer: FC<PropsWithChildren> = ({ children }) => (
  <Box
    width={['100%', '100%', '100%', '48%']}
    display="block"
    borderRadius="m"
    color="onSurface"
    minHeight="23.1875rem"
    bg="surface.containerLow"
  >
    {children}
  </Box>
);

export default MetricsCardContainer;
