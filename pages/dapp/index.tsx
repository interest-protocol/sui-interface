import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { mergeDeepRight } from 'ramda';
import { Layout } from 'views/dapp/v2/components';

import { LoadingPage, SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import Home from '@/views/dapp/v2/home';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const HomePage: NextPageWithProps = ({ pageTitle }) => {
  const t = useTranslations();
  return (
    <ModalProvider newDesign>
      <Web3Manager>
        <SEO pageTitle={pageTitle} />
        <Layout dashboard titlePage={t('dapp.metadata.title')}>
          <Home />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages] = await Promise.all([
    import(`../../assets/messages/common/${locale}.json`),
    import(`../../assets/messages/dapp/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    lendingMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'dapp.metadata.title',
    },
  };
};

export default HomePage;
