import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';
import { Layout } from 'views/dapp/v2/components';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';

const PoolPage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <Layout>Pool</Layout>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/lending/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    lendingMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lending.metadata.title',
    },
  };
};

export default PoolPage;
