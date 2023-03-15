import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { LoadingPage } from '@/components';
import { ModalProvider } from '@/context/modal';
import DEXFindPool from '@/views/dapp/dex-find-pool';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const DEXFindPoolPage: NextPage<{ pageTitle: string }> = ({ pageTitle }) => (
  <ModalProvider>
    <Web3Manager>
      <Layout pageTitle={pageTitle}>
        <DEXFindPool />
      </Layout>
    </Web3Manager>
  </ModalProvider>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexPoolFindMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/dex/pool/find/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    dexPoolFindMessages.default
  );

  return {
    props: {
      messages,
      pageTitle: 'dexPoolFind.pageTitle',
      now: Date.now(),
    },
  };
};

export default DEXFindPoolPage;
