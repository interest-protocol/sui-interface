import { FC } from 'react';

import { Layout } from '../components';
import BenefitsLiquidityProvider from './benefits-liquidity-provider';

const Liquidity: FC = () => (
  <Layout noContent>
    <BenefitsLiquidityProvider />
  </Layout>
);

export default Liquidity;
