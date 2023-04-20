import { FC } from 'react';

import {
  AboutUs,
  Advantages,
  Hero,
  Layout,
  LearnMore,
  Partners,
  UsedBy,
  ValueProposition,
} from '../components';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <UsedBy />
    <ValueProposition />
    <Advantages />
    <LearnMore />
    <Partners />
  </Layout>
);

export default Home;
