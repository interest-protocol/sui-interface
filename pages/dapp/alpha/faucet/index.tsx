import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { mergeAll } from 'ramda';

import { SEO } from '@/components';
import Web3Manager from '@/components/web3-manager';
import { NextPageWithProps } from '@/interface';
import { Layout } from '@/views/dapp/v2/components';
import Faucet from '@/views/dapp/v2/faucet';

const FaucetPage: NextPageWithProps = ({ pageTitle }) => {
  const t = useTranslations();

  return (
    <Web3Manager>
      <Layout dashboard titlePage={t('faucet.metadata.title')}>
        <SEO pageTitle={pageTitle} />
        <Faucet />
      </Layout>
    </Web3Manager>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, faucetMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/faucet/${locale}.json`),
  ]);

  const messages = mergeAll([commonMessages.default, faucetMessages.default]);

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'faucet.metadata.title',
    },
  };
};

export default FaucetPage;
