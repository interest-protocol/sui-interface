import { FC } from 'react';

import { AboutUs, Hero, Layout, UsedBy } from './components';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <UsedBy />
  </Layout>
);

export default Home;
