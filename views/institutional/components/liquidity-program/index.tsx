import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { sliderSettings } from './liquidity-program.data';
import LiquidityProgramTitle from './liquidity-program-title';
import LiquiditySimpleInformation from './liquidity-simple-informations';
import LiquidityWarning from './liquidity-warning-information';
import { POOL_PROVIDERS_LIST } from './pool-provider.data';
import PoolProviderCard from './pool-provider-card';

const LiquidityProgram: FC = () => (
  <Box variant="container" display="block">
    <LiquidityProgramTitle />
    <Box width="100%" gridColumn="1/-1">
      <Slider {...sliderSettings}>
        {POOL_PROVIDERS_LIST.map((poolProvider) => (
          <PoolProviderCard key={v4()} {...poolProvider} />
        ))}
      </Slider>
    </Box>
    <LiquiditySimpleInformation />
    <LiquidityWarning />
  </Box>
);

export default LiquidityProgram;
