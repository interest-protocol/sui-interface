import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BenefitsLiquidityProviderBody from './benefits-liquidity-provider-body';
import BenefitsLiquidityProviderHeader from './benefits-liquidity-provider-header';

const BenefitsLiquidityProvider: FC = () => (
  <Box bg="background">
    <Box variant="container">
      <Box
        gridColumn="1/-1"
        width="100%"
        py={['2.875rem', '2.875rem', '2.875rem', '5rem']}
      >
        <BenefitsLiquidityProviderHeader />
        <BenefitsLiquidityProviderBody />
      </Box>
    </Box>
  </Box>
);

export default BenefitsLiquidityProvider;
