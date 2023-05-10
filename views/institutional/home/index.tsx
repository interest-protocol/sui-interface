import { FC } from 'react';

import {
  AboutUs,
  Advantages,
  Hero,
  Layout,
  LearnMore,
  Partners,
  Security,
  UsedBy,
  ValueProposition,
} from '../components';

const Home: FC = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <UsedBy />
    <ValueProposition />
    <Security />
    <Advantages />
    <LearnMore />
    <Partners />
  </Layout>
);

export default Home;
