import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import { FC } from 'react';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import LSTLayout from '@/views/dapp/v2/lst';
import Stats from '@/views/dapp/v2/lst/stats';

const LoadingPage: FC = () => <LSTLayout loading={true} />;

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const StatsPage: NextPageWithProps = ({ pageTitle }) => (
  <Web3Manager>
    <SEO pageTitle={pageTitle} />
    <LSTLayout>
      <Stats />
    </LSTLayout>
  </Web3Manager>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, LstMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/lst/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, LstMessages.default);

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lst.metadata.title',
    },
  };
};

export default StatsPage;
