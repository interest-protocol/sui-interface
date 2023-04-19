import { FC } from 'react';

import {
  AboutUs,
  Advantages,
  Hero,
  Layout,
  Partners,
  UsedBy,
  ValueProposition,
} from './components';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <UsedBy />
    <ValueProposition />
    <Advantages />
    <Partners />
  </Layout>
);

export default Home;
