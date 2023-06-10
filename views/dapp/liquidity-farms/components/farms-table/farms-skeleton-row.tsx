import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { Box } from '@/elements';

export const DesktopFarmsSkeletonRow = [
  {
    items: [
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
    ],
  },
];

export const MobileFarmsSkeletonRow = [
  {
    mobileSide: (
      <Box
        mb="L"
        key={v4()}
        minWidth="6rem"
        minHeight="3rem"
        borderRadius="L"
        overflow="hidden"
      >
        <Skeleton height="100%" />
      </Box>
    ),
    button: (
      <Box
        mb="L"
        key={v4()}
        minWidth="8rem"
        minHeight="2.5rem"
        borderRadius="L"
        overflow="hidden"
      >
        <Skeleton height="100%" />
      </Box>
    ),
    items: [
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
      <Box key={v4()}>
        <Skeleton />
      </Box>,
    ],
  },
];
