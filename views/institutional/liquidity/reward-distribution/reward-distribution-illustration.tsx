import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  AdvantagesTiltedCoin,
  ValuePropositionBallShadow,
  ValuePropositionCubeClose,
  ValuePropositionCubeOpen,
} from '../../components/svg';
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
        left="10%"
        bottom="-100%"
        position="absolute"
        animate={{
          scale: 0.8,
        }}
        transition={{
          delay: 0.5,
          duration: 0.7,
          ease: easeInOut,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <ValuePropositionBallShadow
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
          translateY: -7,
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
    whileHover="hover"
    position="relative"
  >
    <RewardDistributionIconWrapper
      top="15%"
      left="40%"
      size="20%"
      to={[-100, 0]}
      Icon={ValuePropositionCubeClose}
    />
    <RewardDistributionIconWrapper
      top="27%"
      left="28%"
      size="20%"
      to={[-50, 50]}
      Icon={ValuePropositionCubeClose}
    />
    <RewardDistributionIconWrapper
      top="27%"
      left="52%"
      size="20%"
      to={[-50, -50]}
      Icon={ValuePropositionCubeClose}
    />
    <RewardDistributionIconWrapper
      chock
      top="39%"
      left="40%"
      size="20%"
      Icon={ValuePropositionCubeClose}
    />
    <RewardDistributionIconWrapper
      size="20%"
      top="39%"
      left="16%"
      to={[0, 100]}
      Icon={ValuePropositionCubeOpen}
    />
    <RewardDistributionIconWrapper
      size="20%"
      top="39%"
      left="64%"
      to={[0, -100]}
      Icon={ValuePropositionCubeOpen}
    />
    <RewardDistributionIconWrapper
      top="49%"
      left="28%"
      size="20%"
      to={[50, 60]}
      Icon={ValuePropositionCubeClose}
    />
    <RewardDistributionIconWrapper
      size="20%"
      top="49%"
      left="52%"
      to={[50, -50]}
      Icon={ValuePropositionCubeOpen}
    />
    <RewardDistributionIconWrapper
      top="63%"
      left="40%"
      size="20%"
      to={[100, 0]}
      Icon={ValuePropositionCubeClose}
    />
    <RewardDistributionIconWrapper
      shadow
      floating
      top="19%"
      size="17%"
      left="40.5%"
      Icon={AdvantagesTiltedCoin}
    />
  </Motion>
);

export default RewardDistributionIllustration;
