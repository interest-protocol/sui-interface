import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  AdvantagesTiltedCoin,
  RewardDistributionCoinShadow,
  RewardDistributionCube,
  RewardDistributionCubeWithbigShadow,
  RewardDistributionCubeWithFrontShadow,
} from '../svg';
import { RewardDistributionIconWrapperProps } from './reward-distribution.types';

const RewardDistributionIconWrapper: FC<RewardDistributionIconWrapperProps> = ({
  to,
  size,
  Icon,
  chock,
  shadow,
  floating,
  ...props
}) => (
  <Motion width={size} height={size} position="absolute" {...props}>
    {shadow && (
      <Motion
        left="50%"
        bottom={['-80%', '-80%', '-80%', '-120%']}
        position="absolute"
        animate={{
          scale: 0.9,
        }}
        transition={{
          delay: 0.5,
          duration: 0.7,
          ease: easeInOut,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        width={['70%', '70%', '70%', '100%']}
      >
        <RewardDistributionCoinShadow
          width="100%"
          maxWidth="100%"
          maxHeight="100%"
        />
      </Motion>
    )}
    <Motion
      position="relative"
      {...(to && {
        variants: {
          hover: {
            translateX: to[0],
            translateY: to[1],
            transition: {
              duration: 0.7,
            },
          },
        },
      })}
      {...(floating && {
        animate: {
          translateY: -23,
        },
        transition: {
          delay: 0.5,
          duration: 0.7,
          ease: easeInOut,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      })}
      {...(chock && {
        animate: {
          translateY: [0, 0, 0, 0, 0, 0.8, 0],
          scaleY: [1, 1, 1, 1, 0.98, 1, 1],
        },
        transition: {
          delay: 1.3,
          duration: 0.7,
          ease: easeInOut,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      })}
    >
      <Icon maxWidth="100%" maxHeight="100%" width="100%" />
    </Motion>
  </Motion>
);

const RewardDistributionIllustration: FC = () => (
  <Motion
    height="23rem"
    borderRadius="m"
    // whileHover="hover"
    position="relative"
  >
    <RewardDistributionIconWrapper
      top="13%"
      left="42%"
      size="20%"
      to={[-100, 0]}
      Icon={RewardDistributionCubeWithFrontShadow}
    />
    <RewardDistributionIconWrapper
      top="26%"
      left="29%"
      size="20%"
      to={[-50, 50]}
      Icon={RewardDistributionCubeWithFrontShadow}
    />
    <RewardDistributionIconWrapper
      top="25%"
      left="54%"
      size="20%"
      to={[-50, -50]}
      Icon={RewardDistributionCubeWithbigShadow}
    />
    <RewardDistributionIconWrapper
      chock
      top="38%"
      left="41%"
      size="20%"
      Icon={RewardDistributionCubeWithFrontShadow}
    />
    <RewardDistributionIconWrapper
      size="20%"
      top="39%"
      left="16%"
      to={[0, 100]}
      Icon={RewardDistributionCube}
    />
    <RewardDistributionIconWrapper
      size="20%"
      top="37%"
      left="66%"
      to={[0, -100]}
      Icon={RewardDistributionCubeWithFrontShadow}
    />
    <RewardDistributionIconWrapper
      top="51%"
      left="28%"
      size="20%"
      to={[50, 60]}
      Icon={RewardDistributionCube}
    />
    <RewardDistributionIconWrapper
      size="20%"
      top="50%"
      left="53%"
      to={[50, -50]}
      Icon={RewardDistributionCubeWithFrontShadow}
    />
    <RewardDistributionIconWrapper
      top="63%"
      left="40%"
      size="20%"
      to={[100, 0]}
      Icon={RewardDistributionCube}
    />
    <RewardDistributionIconWrapper
      shadow
      floating
      top="15%"
      size="17%"
      left="40.5%"
      Icon={AdvantagesTiltedCoin}
    />
  </Motion>
);

export default RewardDistributionIllustration;
