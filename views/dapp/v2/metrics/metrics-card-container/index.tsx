import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

const MetricsCardContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      width="100%"
      display="flex"
      borderRadius="m"
      color="onSurface"
      height="23.1875rem"
      flexDirection="column"
      bg="surface.containerLow"
      justifyContent="space-between"
      gridColumn={['1/-1', '1/-1', '1/-1', 'span 6']}
    >
      {children}
    </Box>
  );
};

export default MetricsCardContainer;
