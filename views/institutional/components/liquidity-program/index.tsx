import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useHorizontalScroll } from '@/hooks';

import LiquidityProgramTitle from './liquidity-program-title';
import LiquiditySimpleInformation from './liquidity-simple-informations';
import LiquidityWarning from './liquidity-warning-information';
import { POOL_PROVIDERS_LIST } from './pool-provider.data';
import PoolProviderCard from './pool-provider-card';

const LiquidityProgram: FC = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <Box bg="background" py="4xl">
      <Box variant="container">
        <LiquidityProgramTitle />
        <Box
          width="100%"
          ref={scrollRef}
          overflow="hidden"
          marginBottom="3.75rem"
          scrollbarColor="background"
          gridColumn={['1/23', '1/23', '1/16', '1/23']}
        >
          <Box display="flex" gap="s">
            {POOL_PROVIDERS_LIST.map((poolProvider) => (
              <PoolProviderCard key={v4()} {...poolProvider} />
            ))}
          </Box>
        </Box>
        <LiquiditySimpleInformation />
        <LiquidityWarning />
      </Box>
    </Box>
  );
};
export default LiquidityProgram;
