import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Error from 'next/error';

import { LoadingPage } from '@/components';
import { NextPageWithProps } from '@/interface';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const ErrorPage: NextPageWithProps = ({ pageTitle }) => (
  <Web3Manager>
    <Layout pageTitle={pageTitle}>
      <Error statusCode={404} />
    </Layout>
  </Web3Manager>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../assets/messages/common/${locale}.json`))
    .default;

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'common.error',
    },
  };
};

export default ErrorPage;
