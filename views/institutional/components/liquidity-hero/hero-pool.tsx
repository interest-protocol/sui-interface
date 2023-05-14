import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { HeroIllustration } from '../svg/liquidity';
import { PoolWrapperProps } from './hero.types';

const PoolWrapper: FC<PoolWrapperProps> = ({ Icon, ...props }) => (
  <Box width="100%" height="100%" position="absolute" {...props}>
    <Icon maxWidth="100%" maxHeight="100%" width="90%" />
  </Box>
);

const HeroPool: FC = () => (
  <Box
    width={['100%', '100%', '100%', '550px']}
    height={['360px', '460px']}
    position="relative"
    mx="auto"
  >
    <PoolWrapper Icon={HeroIllustration} top="8.6%" left="0" />
  </Box>
);

export default HeroPool;
