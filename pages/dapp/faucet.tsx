import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { LoadingPage } from '@/components';
import { NextPageWithProps } from '@/interface';
import Faucet from '@/views/dapp/faucet';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const FaucetPage: NextPageWithProps = ({ pageTitle }) => (
  <Web3Manager>
    <Layout pageTitle={pageTitle}>
      <Faucet />
    </Layout>
  </Web3Manager>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, faucetMessages] = await Promise.all([
    import(`../../assets/messages/common/${locale}.json`),
    import(`../../assets/messages/faucet/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    faucetMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'faucet.pageTitle',
    },
  };
};

export default FaucetPage;
