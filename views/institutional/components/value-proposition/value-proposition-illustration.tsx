import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  ValuePropositionBall,
  ValuePropositionBallShadow,
  ValuePropositionCubeClose,
  ValuePropositionCubeOpen,
} from '../svg';
import { ValuePropositionIconWrapperProps } from './value-proposition.types';

const ValuePropositionIconWrapper: FC<ValuePropositionIconWrapperProps> = ({
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
        left="30%"
        bottom="0"
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

const ValuePropositionIllustration: FC = () => (
  <Motion
    p="4xl"
    bg="#B6C4FF0A"
    height="23rem"
    borderRadius="m"
    whileHover="hover"
    position="relative"
  >
    <ValuePropositionIconWrapper
      top="15%"
      left="40%"
      size="20%"
      to={[-100, 0]}
      Icon={ValuePropositionCubeClose}
    />
    <ValuePropositionIconWrapper
      top="27%"
      left="28%"
      size="20%"
      to={[-50, 50]}
      Icon={ValuePropositionCubeClose}
    />
    <ValuePropositionIconWrapper
      top="27%"
      left="52%"
      size="20%"
      to={[-50, -50]}
      Icon={ValuePropositionCubeClose}
    />
    <ValuePropositionIconWrapper
      chock
      top="39%"
      left="40%"
      size="20%"
      Icon={ValuePropositionCubeClose}
    />
    <ValuePropositionIconWrapper
      size="20%"
      top="39%"
      left="16%"
      to={[0, 100]}
      Icon={ValuePropositionCubeOpen}
    />
    <ValuePropositionIconWrapper
      size="20%"
      top="39%"
      left="64%"
      to={[0, -100]}
      Icon={ValuePropositionCubeOpen}
    />
    <ValuePropositionIconWrapper
      top="49%"
      left="28%"
      size="20%"
      to={[50, 60]}
      Icon={ValuePropositionCubeClose}
    />
    <ValuePropositionIconWrapper
      size="20%"
      top="49%"
      left="52%"
      to={[50, -50]}
      Icon={ValuePropositionCubeOpen}
    />
    <ValuePropositionIconWrapper
      top="63%"
      left="40%"
      size="20%"
      to={[100, 0]}
      Icon={ValuePropositionCubeClose}
    />
    <ValuePropositionIconWrapper
      shadow
      floating
      top="34%"
      size="13%"
      left="43.5%"
      Icon={ValuePropositionBall}
    />
  </Motion>
);

export default ValuePropositionIllustration;
