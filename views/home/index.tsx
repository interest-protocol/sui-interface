import { FC } from 'react';

import { AboutUs, Hero, Layout, UsedBy, ValueProposition } from './components';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <UsedBy />
    <ValueProposition />
  </Layout>
);

export default Home;
