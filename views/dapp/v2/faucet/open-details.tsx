import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { animated, useSpring } from 'react-spring';

import { ArrowSpecialSVG } from '@/svg';

import { OpenDetailsProps } from './faucet.types';

const AnimatedBox = animated(Box);

const OpenDetails: FC<OpenDetailsProps> = ({ isOpen, handleClick }) => {
  const { transform } = useSpring({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    config: {
      duration: 300,
    },
  });

  return (
    <Box as="span" cursor="pointer" onClick={handleClick}>
      <AnimatedBox
        as="span"
        color="onSurface"
        width="0.5rem"
        display="inline-block"
        nHover={{ color: 'accent' }}
        style={{ transform }}
      >
        <ArrowSpecialSVG
          width="100%"
          maxWidth="1rem"
          maxHeight="1rem"
          fill="currentColor"
        />
      </AnimatedBox>
    </Box>
  );
};

export default OpenDetails;
