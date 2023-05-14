import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  CyanBox,
  CyanTallBox,
  PrimaryBox,
  PrimaryTallBox,
  ZealyGreenBoxes,
  ZealyPrimaryBoxesBack,
  ZealyPrimaryBoxesFront,
} from '../svg';
import { IconWrapperProps } from './share.types';

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

export const DApp: FC = () => (
  <>
    <IconWrapper
      floating
      top="68.7%"
      left="46.7%"
      size="17%"
      Icon={PrimaryBox}
    />
    <IconWrapper top="64.4%" left="51.9%" size="17%" Icon={PrimaryBox} />
    <IconWrapper top="37%" size="35%" Icon={PrimaryTallBox} />
    <IconWrapper top="25%" size="35%" Icon={CyanTallBox} />
    <IconWrapper top="14.3%" left="30.8%" size="17%" Icon={CyanBox} />
    <IconWrapper floating top="9.8%" left="36%" size="17%" Icon={CyanBox} />
  </>
);

export const Zealy: FC = () => (
  <>
    <IconWrapper top="20%" size="37%" left="30%" Icon={ZealyPrimaryBoxesBack} />
    <IconWrapper top="30%" size="24.5%" left="17%" Icon={ZealyGreenBoxes} />
    <IconWrapper
      floating
      top="31%"
      size="24.9%"
      left="36%"
      Icon={ZealyGreenBoxes}
    />
    <IconWrapper top="32%" size="24.9%" left="56%" Icon={ZealyGreenBoxes} />
    <IconWrapper
      top="45%"
      size="37%"
      left="30%"
      Icon={ZealyPrimaryBoxesFront}
    />
  </>
);
