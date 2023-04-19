import { FC } from 'react';

import {
  AboutUs,
  Advantages,
  Hero,
  Layout,
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
  </Layout>
);

export default Home;
