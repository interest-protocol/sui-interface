import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BenefitsLiquidityProviderBody from './benefits-liquidity-provider-body';

const BenefitsLiquidityProvider: FC = () => (
  <Box gridColumn="1/-1" width="100%">
    <BenefitsLiquidityProviderBody />
  </Box>
);

export default BenefitsLiquidityProvider;
