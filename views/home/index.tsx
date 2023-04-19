import { FC } from 'react';

import {
  AboutUs,
  Advantages,
  Hero,
  Layout,
  Partners,
  Team,
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
    <Team />
  </Layout>
);

export default Home;
