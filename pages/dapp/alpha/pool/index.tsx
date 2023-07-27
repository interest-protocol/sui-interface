import { GetStaticProps } from 'next';
import NotFoundPage from 'pages/404';
import { mergeAll } from 'ramda';
import { Layout } from 'views/dapp/v2/components';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';

const PoolPage: NextPageWithProps = ({ now, messages, pageTitle }) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')
    return (
      <NotFoundPage messages={messages} now={now} pageTitle="common.error" />
    );

  return (
    <>
      <SEO pageTitle={pageTitle} />
      <Layout>Pool</Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages, connectWalletMessages] =
    await Promise.all([
      import(`../../../../assets/messages/common/${locale}.json`),
      import(`../../../../assets/messages/lending/${locale}.json`),
      import(`../../../../assets/messages/connect-wallet/${locale}.json`),
    ]);

  const messages = mergeAll([
    commonMessages.default,
    lendingMessages.default,
    connectWalletMessages.default,
  ]);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lending.metadata.title',
    },
  };
};

export default PoolPage;
