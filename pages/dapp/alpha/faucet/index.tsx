import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { mergeAll, mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import Web3Manager from '@/components/web3-manager';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import { Layout } from '@/views/dapp/v2/components';
import Faucet from '@/views/dapp/v2/faucet';

const FaucetPage: NextPageWithProps = ({ pageTitle }) => {
  const t = useTranslations();

  return (
    <ModalProvider newDesign>
      <Web3Manager>
        <Layout dashboard titlePage={t('faucet.metadata.title')}>
          <SEO pageTitle={pageTitle} />
          <Faucet />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, faucetMessages, connectWalletMessages] =
    await Promise.all([
      import(`../../../../assets/messages/common/${locale}.json`),
      import(`../../../../assets/messages/faucet/${locale}.json`),
      import(`../../../../assets/messages/connect-wallet/${locale}.json`),
    ]);

  const messages = mergeAll([
    commonMessages.default,
    faucetMessages.default,
    connectWalletMessages.default,
  ]);

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'faucet.metadata.title',
    },
  };
};

export default FaucetPage;
