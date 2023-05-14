import { Motion } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { FC } from 'react';

import {
  BTCCoin,
  EthereumCoin,
  SUICoin,
  USDCCoin,
  USDTCoin,
} from '../svg/liquidity';
import Star from '../svg/star';
import { IconWrapperProps } from './liquidity-program.types';

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

export const SUIEthereumIllustration: FC = () => (
  <>
    <IconWrapper shining floating top="64%" size="4%" left="20%" Icon={Star} />
    <IconWrapper shining floating top="23%" size="6%" left="65%" Icon={Star} />
    <IconWrapper shining floating top="25%" size="3%" left="72%" Icon={Star} />
    <IconWrapper floating top="35%" size="47%" left="7.5%" Icon={SUICoin} />
    <IconWrapper
      floating
      top="35%"
      size="47%"
      left="27.8%"
      Icon={EthereumCoin}
    />
  </>
);

export const SUIUSDCIllustration: FC = () => (
  <>
    <IconWrapper shining floating top="64%" size="4%" left="20%" Icon={Star} />
    <IconWrapper shining floating top="23%" size="6%" left="65%" Icon={Star} />
    <IconWrapper shining floating top="25%" size="3%" left="72%" Icon={Star} />
    <IconWrapper floating top="35%" size="47%" left="7.5%" Icon={SUICoin} />
    <IconWrapper floating top="35%" size="47%" left="27.8%" Icon={USDCCoin} />
  </>
);

export const SUIBTCIllustration: FC = () => (
  <>
    <IconWrapper shining floating top="64%" size="4%" left="20%" Icon={Star} />
    <IconWrapper shining floating top="23%" size="6%" left="65%" Icon={Star} />
    <IconWrapper shining floating top="25%" size="3%" left="72%" Icon={Star} />
    <IconWrapper floating top="35%" size="47%" left="7.5%" Icon={SUICoin} />
    <IconWrapper floating top="35%" size="47%" left="27.8%" Icon={BTCCoin} />
  </>
);

export const USDCUSDTIllustration: FC = () => (
  <>
    <IconWrapper shining floating top="64%" size="4%" left="20%" Icon={Star} />
    <IconWrapper shining floating top="23%" size="6%" left="65%" Icon={Star} />
    <IconWrapper shining floating top="25%" size="3%" left="72%" Icon={Star} />
    <IconWrapper floating top="35%" size="41%" left="20%" Icon={USDTCoin} />
    <IconWrapper floating top="35%" size="47%" left="27.8%" Icon={USDCCoin} />
  </>
);