import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Cube, CubeBNB, CubeIPX, CubeNumber, CubeSUI } from '@/svg';

import { CubeWrapperProps, HeroStarWrapperProps } from './hero.types';
import HeroStar from '@/components/svg/hero-star';
import { easeInOut } from 'framer-motion';
import breakpoints from '@/design-system/common/breakpoints';

const CubeWrapper: FC<CubeWrapperProps> = ({ Icon, ...props }) => (
  <Motion
    position="absolute"
    width="44%"
    nAfter={{
      content: '""',
      display: 'block',
      paddingTop: '100%',
    }}
    height="43%"
    whileHover={{
      translateY: -7,
      filter: 'hue-rotate(360deg) brightness(1.5) opacity(0.95)',
    }}
    transition={{ duration: 0.8 }}
    {...props}
  >
    <Icon maxWidth="100%" maxHeight="100%" width="100%" />
  </Motion>
);

const StarWrapper: FC<HeroStarWrapperProps> = ({ Icon, size, ...props }) => (
  <Motion
    position="absolute"
    width="44%"
    nAfter={{
      content: '""',
      display: 'block',
      paddingTop: '100%',
    }}
    height="43%"
    filter="drop-shadow(0 0 .0625rem #fff)"
    animate={{
      translateY:
        size === '30%' ? -7 : size === '20%' ? -5 : size === '15%' ? -3 : 0,
      filter: 'hue-rotate(360deg) brightness(1.5) drop-shadow(0 0 .25rem #fff)',
    }}
    transition={{
      repeat: Infinity,
      duration: 0.7,
      delay:
        size === '30%' ? 0.2 : size === '20%' ? 1 : size === '15%' ? 0.6 : 0,
      repeatType: 'reverse',
      ease: easeInOut,
    }}
    {...props}
  >
    <Icon
      maxWidth={size || '100%'}
      maxHeight={size || '100%'}
      width={size || '100%'}
    />
  </Motion>
);

const HeroBlock: FC = () => (
  <Motion
    mx="auto"
    width="272px"
    height="368px"
    position="relative"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 100 }}
  >
    <StarWrapper Icon={HeroStar} right="68%" top="10%" size="20%" />
    <StarWrapper Icon={HeroStar} left="0%" top="13%" size="15%" />
    <StarWrapper Icon={HeroStar} left="106%" top="0%" size="30%" />
    <CubeWrapper Icon={Cube} top="8.6%" left="29%" />
    <CubeWrapper Icon={Cube} right="0%" />
    <CubeWrapper Icon={CubeBNB} top="47.8%" />
    <CubeWrapper Icon={CubeNumber} top="47.8%" right="0%" />
    <CubeWrapper Icon={Cube} top="60%" left="29%" />
    <CubeWrapper Icon={CubeIPX} top="21%" />
    <CubeWrapper Icon={CubeSUI} top="33%" left="29%" />
  </Motion>
);

export default HeroBlock;
