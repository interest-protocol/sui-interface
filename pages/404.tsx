import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import ErrorPage from '@/views/dapp/v2/error';

const NotFoundPage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <ErrorPage />
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages] = await Promise.all([
    import(`../assets/messages/common/${locale}.json`),
    import(`../assets/messages/dapp/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    lendingMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'common.pageNotFound',
    },
  };
};

export default NotFoundPage;
