import type { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { withObjectIdGuard } from '@/HOC';
import { NextPageWithObjectId } from '@/interface';
import FarmDetails from '@/views/dapp/farm-details';

const FarmDetailsPage: NextPageWithObjectId = ({ objectId }) => (
  <FarmDetails objectId={objectId} />
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, farmDetailsMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/farms/details/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    farmDetailsMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'dexSwap.pageTitle',
    },
  };
};

export default withObjectIdGuard(FarmDetailsPage);
