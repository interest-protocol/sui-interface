import { FC } from 'react';

import { AboutUs, Hero, Layout, UsedBy, ValueProposition } from './components';
import LearnMore from './components/learn-more';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <UsedBy />
    <ValueProposition />
    <LearnMore />
  </Layout>
);

export default Home;
