import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  CubeWrapper,
  StarWrapper,
} from '@/views/institutional/components/hero/hero-block';
import {
  HeroCube,
  HeroCubeBNB,
  HeroCubeIPX,
  HeroCubeNumber,
  HeroCubeSUI,
  StarSVG,
} from '@/views/institutional/components/svg';

const BlockIllustration: FC = () => (
  <Box width="100%" height="100%" position="relative" mx="auto">
    <StarWrapper Icon={StarSVG} left="-12%" top="9%" size="20%" />
    <StarWrapper Icon={StarSVG} left="0%" top="13%" size="15%" />
    <StarWrapper Icon={StarSVG} right="-17%" top="0%" size="30%" />
    <CubeWrapper Icon={HeroCube} top="8.6%" left="29%" />
    <CubeWrapper Icon={HeroCubeBNB} top="47.8%" withTopShadow />
    <CubeWrapper
      Icon={HeroCubeNumber}
      right="0%"
      top="47.8%"
      withFixedTopShadow
    />
    <CubeWrapper Icon={HeroCube} right="0%" />
    <CubeWrapper Icon={HeroCube} top="60%" left="29%" withTopShadow />
    <CubeWrapper Icon={HeroCubeIPX} top="21%" withBottomShadow />
    <CubeWrapper Icon={HeroCubeSUI} top="33%" left="29%" withBottomShadow />
  </Box>
);

export default BlockIllustration;
