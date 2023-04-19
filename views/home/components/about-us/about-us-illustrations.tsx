import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  Cube,
  EthereumCoinSVG,
  HeroStarSVG,
  InterestCoinSVG,
  LendSectionSVG,
  SphereSVG,
  TriangleSVG,
} from '@/svg';

import { FloatingWrapperProps } from './about-us.types';

const FloatingWrapper: FC<FloatingWrapperProps> = ({
  width,
  height,
  Icon,
  isStar,
}) => (
  <Motion
    width={width}
    filter="drop-shadow(0 0 .0625rem #fff)"
    animate={{
      translateY: -5,
      filter: isStar
        ? 'hue-rotate(360deg) brightness(1.5) drop-shadow(0 0 .25rem #fff)'
        : 'none',
    }}
    transition={{
      delay: 0.5,
      duration: 0.7,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  >
    <Icon maxWidth={width} maxHeight={height} width="100%" height="100%" />
  </Motion>
);

export const EarnIllustration: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="relative"
    height="100%"
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      width={['100%', '100%', '40%', '100%']}
      height="35%"
    >
      <Box
        position="absolute"
        top={['-25px', '-25px', '-25px', '-10px']}
        left={['10%', '10%', '10%', '30%']}
        width="14.35px"
        height="14.35px"
        zIndex={2}
      >
        <FloatingWrapper width="100%" height="100%" Icon={HeroStarSVG} isStar />
      </Box>
      <Box
        position="absolute"
        top={['0', '0', '0', '0']}
        left={['12px', '12px', '12px', 'unset']}
        width="120px"
        height="96px"
      >
        <FloatingWrapper width="107px" height="109px" Icon={InterestCoinSVG} />
      </Box>
      <Box
        position="absolute"
        top={['35%', '35%', '35%', '20%']}
        right="17%"
        width="20.95px"
        height="20.95px"
        zIndex={2}
      >
        <FloatingWrapper width="100%" height="100%" Icon={HeroStarSVG} isStar />
      </Box>
      <Box
        position="absolute"
        top={['40%', '40%', '40%', '25%']}
        right="11%"
        width="11.62px"
        height="11.62px"
        zIndex={2}
      >
        <FloatingWrapper width="100%" height="100%" Icon={HeroStarSVG} isStar />
      </Box>
      <Box
        position="absolute"
        top={['60px', '60px', '60px', '48px']}
        right={['20px', '20px', '20px', '41.5px']}
        width="120px"
        height="96px"
      >
        <FloatingWrapper width="100%" height="100%" Icon={EthereumCoinSVG} />
      </Box>
    </Box>
  </Box>
);

export const TradeIllustration: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="relative"
    height="100%"
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      width={['100%', '100%', '40%', '100%']}
      height="35%"
    >
      <Box
        position="absolute"
        top={['-25px', '-25px', '10%', '10%']}
        right="53%"
        width="65.35px"
        height="65.35px"
        zIndex={3}
      >
        <FloatingWrapper width="100%" height="100%" Icon={SphereSVG} />
      </Box>
      <Box
        position="absolute"
        top={['0%', '0%', '20%', '20%']}
        right={['23%', '23%', '10%', '32%']}
        width="95.35px"
        height="95.35px"
        zIndex={2}
      >
        <FloatingWrapper width="100%" height="100%" Icon={TriangleSVG} />
      </Box>
      <Box
        position="absolute"
        top={['58%', '58%', '63%', '63%']}
        right={['10%', '10%', '0%', '25%']}
        width="85.35px"
        height="85.35px"
        zIndex={1}
      >
        <FloatingWrapper width="100%" height="100%" Icon={Cube} />
      </Box>
    </Box>
  </Box>
);

export const LendIllustration: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100%"
  >
    <LendSectionSVG maxWidth="165px" maxHeight="207px" />
  </Box>
);
