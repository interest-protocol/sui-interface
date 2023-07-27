import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeAll } from 'ramda';

import { SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import CreateToken from '@/views/dapp/v2/create-token';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: CreateToken,
});

const CreateTokenPage: NextPageWithProps = ({ pageTitle }) => (
  <ModalProvider newDesign>
    <SEO pageTitle={pageTitle} />
    <Web3Manager>
      <CreateToken />
    </Web3Manager>
  </ModalProvider>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages, connectWalletMessages] =
    await Promise.all([
      import(`../../../assets/messages/common/${locale}.json`),
      import(`../../../assets/messages/create-token/${locale}.json`),
      import(`../../../assets/messages/connect-wallet/${locale}.json`),
    ]);

  const messages = mergeAll([
    commonMessages.default,
    dexMessages.default,
    connectWalletMessages.default,
  ]);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'createToken.pageTitle',
    },
  };
};

export default CreateTokenPage;
