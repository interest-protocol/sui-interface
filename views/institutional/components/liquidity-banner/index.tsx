import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import {
  LIQUIDITY_BANNER_DATA,
  slideShowSettings,
} from './liquidity-banner.data';
import { SlideShow } from './liquidity-banner.styles';
import LiquidityBannerCard from './liquidity-banner-card';

const LiquidityBanner: FC = () => (
  <Box variant="container" justifyItems="stretch">
    <Box gridColumn="1/-1">
      <SlideShow {...slideShowSettings}>
        {LIQUIDITY_BANNER_DATA.map((props) => (
          <Box key={v4()}>
            <LiquidityBannerCard {...props} />
          </Box>
        ))}
      </SlideShow>
    </Box>
  </Box>
);

export default LiquidityBanner;
