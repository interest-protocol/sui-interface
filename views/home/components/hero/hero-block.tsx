import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Cube, CubeBNB, CubeIPX, CubeNumber, CubeSUI } from '@/svg';

import { CubeWrapperProps } from './hero.types';

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
