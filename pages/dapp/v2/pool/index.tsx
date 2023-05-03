import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import LendingProtocol from '@/views/dapp/v2/lending-protocol';

const LendingProtocolPage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <LendingProtocol />
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

export default LendingProtocolPage;
