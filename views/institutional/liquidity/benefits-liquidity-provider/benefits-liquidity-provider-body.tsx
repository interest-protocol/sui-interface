import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { BENEFITS_LIQUIDITY_PROVIDER_LIST } from './benefits-liquidity-provider.data';
import BenefitsLiquidityCard from './benefits-liquidity-provider-card';

const BenefitsLiquidityProviderBody: FC = () => (
  <Box
    display="grid"
    gap="0.5rem"
    gridTemplateColumns={[
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ]}
  >
    {BENEFITS_LIQUIDITY_PROVIDER_LIST.map((benefit) => (
      <BenefitsLiquidityCard {...benefit} key={v4()} />
    ))}
  </Box>
);

export default BenefitsLiquidityProviderBody;
