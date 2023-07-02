import { FC } from 'react';

import { Layout } from '../components';
import EarnCard from '../components/earn-card';
import EarnContainer from '../components/earn-card/earn-container';

const EarnPage: FC = () => {
  return (
    <Layout dashboard titlePage="Earn">
      <EarnContainer columns={3}>
        <EarnCard isPool type="normal" />
        <EarnCard isPool type="normal" />
        <EarnCard isPool type="normal" />
        <EarnCard isPool type="normal" />
        <EarnCard isPool type="normal" />
        <EarnCard isPosition type="normal" />
      </EarnContainer>
      <EarnContainer columns={2}>
        <EarnCard type="preview" action="add" />
        <EarnCard type="preview" action="remove" />
      </EarnContainer>
    </Layout>
  );
};

export default EarnPage;
