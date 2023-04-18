import { FC } from 'react';

import { AboutUs, Advantages, Hero, Layout, UsedBy } from './components';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <UsedBy />
    <Advantages />
  </Layout>
);

export default Home;
