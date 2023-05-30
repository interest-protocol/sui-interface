import { GetStaticProps, NextPage } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageDefaultProps } from '@/interface';
import LendingProtocolDetails from '@/views/dapp/v2/lending-protocol-details';

interface LendingDetailsPageProps extends NextPageDefaultProps {
  type: string;
}

const LendingProtocolPage: NextPage<LendingDetailsPageProps> = ({
  type,
  pageTitle,
}) => (
  <>
    <SEO pageTitle={pageTitle} />
    <LendingProtocolDetails type={type} />
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
