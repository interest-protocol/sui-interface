import { GetStaticProps } from 'next';
import NotFoundPage from 'pages/404';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import Home from '@/views/dapp/v2/home';

const DAppPage: NextPageWithProps = ({ now, messages, pageTitle }) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')
    return (
      <NotFoundPage messages={messages} now={now} pageTitle="common.error" />
    );

  return (
    <>
      <SEO pageTitle={pageTitle} />
      <Home />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/dapp/${locale}.json`),
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

export default DAppPage;
