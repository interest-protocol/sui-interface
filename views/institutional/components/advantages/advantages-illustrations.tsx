import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  AdvantagesBottomShadow,
  AdvantagesCube,
  AdvantagesIsolatedCube,
  AdvantagesMainCube,
  AdvantagesSideShadow,
  AdvantagesStep,
  AdvantagesTiltedCoin,
  AdvantagesTopShadow,
  StarSVG,
} from '../svg';
import { IconWrapperProps } from './advantages.types';

export const IconWrapper: FC<IconWrapperProps> = ({
  size,
  Icon,
  shining,
  floating,
  ...props
}) => (
  <Motion
    width={size}
    height={size}
    {...props}
    position="absolute"
    {...(floating && {
      ...(shining && {
        filter: 'drop-shadow(0 0 0rem #fff)',
      }),
      animate: {
        translateY: -7,
        ...(shining && {
          filter:
            'hue-rotate(360deg) brightness(1.5) drop-shadow(0 0 .2rem #fff)',
        }),
      },
      transition: {
        ease: easeInOut,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: Math.random() * 1 + 0.2,
        duration: Math.random() * (shining ? 2 : 1) + (shining ? 1 : 0.5),
      },
    })}
  >
    <Icon maxWidth="100%" maxHeight="100%" width="100%" />
  </Motion>
);

export const StepsIllustration: FC = () => (
  <>
    <IconWrapper
      shining
      floating
      top="20%"
      size="3%"
      left="50%"
      Icon={StarSVG}
    />
    <IconWrapper
      shining
      floating
      top="35%"
      size="2%"
      left="76%"
      Icon={StarSVG}
    />
    <IconWrapper top="35%" size="30%" left="47%" Icon={AdvantagesStep} />
    <IconWrapper top="47%" size="30%" left="35%" Icon={AdvantagesStep} />
    <IconWrapper top="59%" size="30%" left="23%" Icon={AdvantagesStep} />
    <IconWrapper
      floating
      top="25%"
      size="20%"
      left="54%"
      Icon={AdvantagesTiltedCoin}
    />
  </>
);

export const BlockIllustration: FC = () => (
  <>
    <Motion
      top="20%"
      left="25%"
      width="50%"
      opacity="0"
      height="50%"
      position="absolute"
    >
      <AdvantagesCube maxWidth="100%" maxHeight="100%" width="100%" />
    </Motion>
    <Motion top="35%" left="45.1%" width="50%" height="50%" position="absolute">
      <Motion position="absolute" left="50%">
        <AdvantagesTopShadow
          maxWidth="100%"
          maxHeight="100%"
          width="100%"
          stroke="white"
        />
      </Motion>
      <Motion position="absolute" left="50%">
        <AdvantagesSideShadow
          maxWidth="100%"
          maxHeight="100%"
          width="100%"
          stroke="white"
        />
      </Motion>
      <Motion position="absolute" left="50%">
        <AdvantagesBottomShadow
          maxWidth="100%"
          maxHeight="100%"
          width="100%"
          stroke="white"
        />
      </Motion>
      <AdvantagesIsolatedCube maxWidth="100%" maxHeight="100%" width="100%" />
    </Motion>
    <Motion
      opacity="0"
      top="34.2%"
      left="41.6%"
      width="28.3%"
      height="28.3%"
      position="absolute"
    >
      <AdvantagesMainCube maxWidth="100%" maxHeight="100%" width="100%" />
    </Motion>
  </>
);
