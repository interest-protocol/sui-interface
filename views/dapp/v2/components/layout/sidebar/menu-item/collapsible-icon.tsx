import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MinusSVG, PlusSVG } from '@/svg';

const minusVariants = {
  rest: {
    scaleY: 0,
    rotate: '90deg',
    duration: 0.5,
  },
  hover: {
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
  hover: {
    scaleY: 0,
    rotate: '0deg',
    duration: 0.5,
  },
};

const CollapseIcon: FC = () => (
  <Box position="relative" width="1.2rem" height="1.2rem">
    <Motion overflow="hidden" position="absolute" variants={minusVariants}>
      <MinusSVG maxHeight="1.5rem" maxWidth="1.5em" width="100%" />
    </Motion>
    <Motion overflow="hidden" position="absolute" variants={plusVariants}>
      <PlusSVG maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
    </Motion>
  </Box>
);

export default CollapseIcon;
