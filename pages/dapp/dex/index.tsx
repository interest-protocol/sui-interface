import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { LoadingPage } from '@/components';
import { NextPageWithProps } from '@/interface';
import DEX from '@/views/dapp/dex';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const DexPage: NextPageWithProps = ({ pageTitle }) => (
  <Web3Manager>
    <Layout pageTitle={pageTitle}>
      <DEX />
    </Layout>
  </Web3Manager>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/dex/swap/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, dexMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'dexSwap.pageTitle',
    },
  };
};

export default DexPage;
