import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import { Layout } from '@/views/dapp/v2/componentes';
import Swap from '@/views/dapp/v2/swap';

const SwapPage: NextPageWithProps = ({ pageTitle }) => {
  return (
    <ModalProvider>
      <SEO pageTitle={pageTitle} />
      <Layout dashboard>
        <Swap />
      </Layout>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/swap/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    lendingMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'swap.metadata.title',
    },
  };
};

export default SwapPage;
