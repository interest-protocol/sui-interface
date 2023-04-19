import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  ValuePropositionBall,
  ValuePropositionCubeClose,
  ValuePropositionCubeOpen,
} from '../svg';
import { ValuePropositionIconWrapperProps } from './value-proposition.types';

const ValuePropositionIconWrapper: FC<ValuePropositionIconWrapperProps> = ({
  size,
  Icon,
  floating,
  to,
  ...props
}) => (
  <Motion
    width={size}
    height={size}
    position="absolute"
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
    {...props}
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
  >
    <Icon maxWidth="100%" maxHeight="100%" width="100%" />
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
      floating
      top="34%"
      size="13%"
      left="43.5%"
      Icon={ValuePropositionBall}
    />
  </Motion>
);

export default ValuePropositionIllustration;
