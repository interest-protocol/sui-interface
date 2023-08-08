import { Box, darkTheme, Motion } from '@interest-protocol/ui-kit';
import { AnimatePresence, easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  HeroCube,
  HeroCubeBNB,
  HeroCubeIPX,
  HeroCubeNumber,
  HeroCubeShadow,
  HeroCubeSUI,
  StarSVG,
} from '../svg';
import {
  CubeWrapperProps,
  HeroBlockProps,
  HeroStarWrapperProps,
} from './hero.types';
import {
  cubeVariant,
  cubeWrapperVariant,
  shadowBottomVariant,
  shadowFixedTopVariant,
  shadowTopVariant,
  starDelayMap,
  starTranslateYMap,
} from './hero-block.animation';

export const CubeWrapper: FC<CubeWrapperProps> = ({
  Icon,
  withTopShadow,
  specialShadow,
  withBottomShadow,
  withFixedTopShadow,
  ...props
}) => (
  <Motion
    width="44%"
    height="43%"
    whileHover="hover"
    position="absolute"
    {...props}
  >
    {withBottomShadow && (
      <Motion
        display="flex"
        color="#1B1B1F"
        position="absolute"
        justifyContent="center"
        variants={shadowBottomVariant}
        transition={{ duration: 0.5 }}
        bottom={specialShadow ? '-3rem' : '0'}
      >
        <HeroCubeShadow maxHeight="100%" maxWidth="100%" width="85%" />
      </Motion>
    )}

    <Motion
      position="relative"
      variants={cubeWrapperVariant}
      transition={{ duration: 0.1 }}
    >
      <Motion variants={cubeVariant} transition={{ duration: 0.8 }}>
        <Icon maxWidth="100%" maxHeight="100%" width="100%" />
      </Motion>
      <AnimatePresence>
        {withTopShadow && (
          <Motion
            initial={{ opacity: 0 }}
            variants={{
              hover: { opacity: 1, transition: { duration: 0 } },
            }}
            transition={{ duration: 0.05 }}
          >
            <Motion
              top="0"
              display="flex"
              color="#1B1B1F"
              position="absolute"
              justifyContent="center"
              variants={shadowTopVariant}
              transition={{ duration: 0.8 }}
            >
              <HeroCubeShadow maxHeight="100%" maxWidth="100%" width="85%" />
            </Motion>
          </Motion>
        )}
        {withFixedTopShadow && (
          <Motion
            initial={{ opacity: 1 }}
            variants={{
              hover: { opacity: 1, transition: { duration: 0 } },
            }}
            transition={{ duration: 0.05 }}
          >
            <Motion
              top="0"
              display="flex"
              color={darkTheme.colors.surface}
              position="absolute"
              justifyContent="center"
              variants={shadowFixedTopVariant}
              transition={{ duration: 0.8 }}
            >
              <HeroCubeShadow width="85%" maxWidth="100%" maxHeight="100%" />
            </Motion>
          </Motion>
        )}
      </AnimatePresence>
    </Motion>
  </Motion>
);

export const StarWrapper: FC<HeroStarWrapperProps> = ({
  Icon,
  size,
  ...props
}) => {
  const translateY = starTranslateYMap[size];
  const delay = starDelayMap[size];

  return (
    <Motion
      position="absolute"
      width={`calc(${size} / 2)`}
      filter="drop-shadow(0 0 .0625rem #fff)"
      animate={{
        translateY,
        filter:
          'hue-rotate(360deg) brightness(1.5) drop-shadow(0 0 .25rem #fff)',
      }}
      transition={{
        delay,
        duration: 0.7,
        ease: easeInOut,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      {...props}
    >
      <Icon width="100%" maxWidth="100%" maxHeight="100%" />
    </Motion>
  );
};

const HeroBlock: FC<HeroBlockProps> = ({ scale }) => (
  <Box width="272px" scale={scale} height="368px" position="relative" mx="auto">
    <StarWrapper Icon={StarSVG} left="-12%" top="9%" size="20%" />
    <StarWrapper Icon={StarSVG} left="0%" top="13%" size="15%" />
    <StarWrapper Icon={StarSVG} right="-17%" top="0%" size="30%" />
    <CubeWrapper Icon={HeroCube} top="8.6%" left="29%" />
    <CubeWrapper Icon={HeroCubeBNB} top="47.8%" withTopShadow />
    <CubeWrapper Icon={HeroCubeNumber} top="47.8%" right="0%" />
    <CubeWrapper Icon={HeroCube} right="0%" withBottomShadow specialShadow />
    <CubeWrapper Icon={HeroCube} top="60%" left="29%" withTopShadow />
    <CubeWrapper Icon={HeroCubeIPX} top="21%" withBottomShadow />
    <CubeWrapper Icon={HeroCubeSUI} top="33%" left="29%" withBottomShadow />
  </Box>
);

export default HeroBlock;
