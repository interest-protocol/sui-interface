import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import { StarSVG } from '../svg';
import InterestCoinTiltedSVG from '../svg/interest-coin-tilted';
import StepIconSVG from '../svg/step';
import { IconWrapperProps } from './advantages.types';

export const IconWrapper: FC<IconWrapperProps> = ({
  size,
  Icon,
  shining,
  floating,
  goDownStairs,
  // hittingTheFloor,
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
    {...(goDownStairs && {
      animate: {
        translateY: [0, -30, 30, -30, 60],
        translateX: [0, -30, -30, -30, -60],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
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
      top="30%"
      size="4%"
      left="20%"
      Icon={StarSVG}
    />
    <IconWrapper
      shining
      floating
      top="40%"
      size="6%"
      left="65%"
      Icon={StarSVG}
    />
    <IconWrapper top="35%" size="30%" left="47%" Icon={StepIconSVG} />
    <IconWrapper top="47%" size="30%" left="35%" Icon={StepIconSVG} />
    <IconWrapper top="59%" size="30%" left="23%" Icon={StepIconSVG} />
    <IconWrapper
      goDownStairs
      top="25%"
      size="20%"
      left="54%"
      Icon={InterestCoinTiltedSVG}
    />
  </>
);
