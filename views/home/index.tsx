import { FC } from 'react';

import { Hero, Layout } from './components';
import AboutUs from './components/about-us';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
  </Layout>
);

export default Home;
