import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import FirstThingFirst from '../components/first-thing-first-section';
import LiquidityBanner from '../components/liquidity-banner';
import LiquidityFooter from '../components/liquidity-footer';
import LiquidityHero from '../components/liquidity-hero';
import LiquidityNewsletter from '../components/liquidity-newsletter';
import LiquidityProgram from '../components/liquidity-program';
import RewardDistribution from '../components/reward-distribution';
import ShareSection from '../components/share-section';
import ThenSection from '../components/then';

const Liquidity: FC = () => (
  <Layout noContent>
    <Box bg="background" color="text" flex="1" textAlign="center">
      <LiquidityBanner />
      <LiquidityHero />
      <FirstThingFirst />
      <ThenSection />
      <LiquidityProgram />
      <ShareSection />
      <RewardDistribution />
      <LiquidityNewsletter />
      <LiquidityFooter />
    </Box>
  </Layout>
);
export default Liquidity;
