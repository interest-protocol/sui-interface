import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  AboutUsEarnETH,
  AboutUsEarnIPX,
  AboutUsLendBase,
  AboutUsLendSUI,
  AboutUsTradeBall,
  AboutUsTradeCube,
  AboutUsTradePyramid,
  StarSVG,
} from '../svg';
import { IconWrapperProps } from './about-us.types';

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

export const EarnIllustration: FC = () => (
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
    <IconWrapper
      shining
      floating
      top="42%"
      size="3%"
      left="72%"
      Icon={StarSVG}
    />
    <IconWrapper
      floating
      top="35%"
      size="30%"
      left="26%"
      Icon={AboutUsEarnIPX}
    />
    <IconWrapper
      floating
      top="45%"
      size="32%"
      left="40%"
      Icon={AboutUsEarnETH}
    />
  </>
);

export const TradeIllustration: FC = () => (
  <>
    <IconWrapper
      floating
      top="45%"
      size="32%"
      left="50%"
      Icon={AboutUsTradeCube}
    />
    <IconWrapper
      floating
      top="25%"
      size="32%"
      left="40%"
      Icon={AboutUsTradePyramid}
    />
    <IconWrapper
      floating
      top="24%"
      size="22%"
      left="28%"
      Icon={AboutUsTradeBall}
    />
  </>
);

export const LendIllustration: FC = () => (
  <>
    <IconWrapper top="35%" size="42%" left="28%" Icon={AboutUsLendBase} />
    <IconWrapper
      floating
      top="30%"
      size="20%"
      left="40%"
      Icon={AboutUsLendSUI}
    />
    <IconWrapper
      shining
      floating
      top="22%"
      size="2%"
      left="56%"
      Icon={StarSVG}
    />
    <IconWrapper
      shining
      floating
      top="22%"
      size="3%"
      left="52%"
      Icon={StarSVG}
    />
  </>
);
