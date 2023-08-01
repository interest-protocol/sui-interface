import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeAll } from 'ramda';

import { LoadingPage } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import Pool from '@/views/dapp/dex-pool';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const DEXPoolPage: NextPageWithProps = ({ pageTitle }) => (
  <ModalProvider>
    <Web3Manager>
      <Layout pageTitle={pageTitle}>
        <Pool />
      </Layout>
    </Web3Manager>
  </ModalProvider>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexPoolMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/dex/pool/${locale}.json`),
  ]);

  const messages = mergeAll([commonMessages.default, dexPoolMessages.default]);

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'dexPool.pageTitle',
    },
  };
};

export default DEXPoolPage;
