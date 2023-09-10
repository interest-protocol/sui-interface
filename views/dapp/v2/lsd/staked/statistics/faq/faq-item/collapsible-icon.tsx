import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';
import { PlusSVG } from '@/svg';

const minusVariants = {
  rest: {
    scaleY: 0,
    rotate: '90deg',
    duration: 0.5,
  },
  clicked: {
    scaleY: 1,
    rotate: '0deg',
    duration: 0.5,
  },
};

const plusVariants = {
  rest: {
    scaleY: 1,
    duration: 0.5,
    rotate: '90deg',
  },
  clicked: {
    scaleY: 0,
    rotate: '0deg',
    duration: 0.5,
  },
};

const CollapseIcon: FC = () => (
  <Box
    position="relative"
    width="0.875rem"
    height="0.875rem"
    display="flex"
    alignItems="center"
  >
    <Motion overflow="hidden" position="absolute" variants={minusVariants}>
      <TimesSVG maxHeight="0.875rem" maxWidth="0.875rem" width="100%" />
    </Motion>
    <Motion overflow="hidden" position="absolute" variants={plusVariants}>
      <PlusSVG maxHeight="0.875rem" maxWidth="0.875rem" width="100%" />
    </Motion>
  </Box>
);

export default CollapseIcon;
