import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { mergeDeepRight } from 'ramda';
import { Layout } from 'views/dapp/v2/components';

import { SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import LoadingPage from '@/views/dapp/components/loading-page';
import Metrics from '@/views/dapp/v2/metrics';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const MetricsPage: NextPageWithProps = ({ pageTitle }) => {
  const t = useTranslations();

  return (
    <ModalProvider newDesign>
      <Web3Manager>
        <SEO pageTitle={pageTitle} />
        <Layout dashboard titlePage={t('metrics.metadata.title')}>
          <Metrics />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, metricsMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/metrics/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    metricsMessages.default
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
