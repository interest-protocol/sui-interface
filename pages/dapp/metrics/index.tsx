import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import { Layout } from 'views/dapp/v2/components';

import { LoadingPage, SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import Metrics from '@/views/dapp/v2/metrics';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const MetricsPage: NextPageWithProps = ({ pageTitle }) => {
  return (
    <ModalProvider newDesign>
      <Web3Manager>
        <SEO pageTitle={pageTitle} />
        <Layout dashboard>
          <Metrics />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/metrics/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    lendingMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'metrics.metadata.title',
    },
  };
};

export default MetricsPage;
