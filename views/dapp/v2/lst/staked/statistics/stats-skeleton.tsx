import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const StatsSkeleton: FC = () => (
  <Box gap="0.5rem" display="flex" flexDirection="column" width="100%">
    <Skeleton height="6.75rem" width="100%" />
    <Skeleton height="10.3rem" width="100%" />
    <Box
      gap="s"
      display="flex"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Box width={['100%', '100%', '100%', '50%']}>
        <Skeleton height="6.75rem" width="100%" />
      </Box>
      <Box width={['100%', '100%', '100%', '50%']}>
        <Skeleton height="6.75rem" width="100%" />
      </Box>
    </Box>
    <Skeleton height="5.6rem" width="100%" />
  </Box>
);

export default StatsSkeleton;
