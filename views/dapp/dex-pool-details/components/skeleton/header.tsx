import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { Box } from '@/elements';

const HeaderSkeleton: FC = () => (
  <>
    {[1, 2].map(() => (
      <Box key={v4()} width="2.5rem" height="2.5rem" borderRadius="2rem">
        <Skeleton height="100%" borderRadius="2rem" />
      </Box>
    ))}
    <Box width="15rem" ml="L">
      <Skeleton />
    </Box>
  </>
);

export default HeaderSkeleton;
