import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { withTypeGuard } from '@/HOC';
import { NextPageWithObjectId } from '@/interface';
import DEXPoolDetailsView from '@/views/dapp/dex-pool-details';

const DEXPoolDetailsPage: NextPageWithObjectId = ({ objectId }) => (
  <DEXPoolDetailsView objectId={objectId} />
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexPoolPairMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/dex/pool/details/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    dexPoolPairMessages.default
  );

  return {
    props: {
      messages,
      pageTitle: 'dexPoolPairAddress.pageTitle',
      now: Date.now(),
    },
  };
};

export default withTypeGuard(DEXPoolDetailsPage);
