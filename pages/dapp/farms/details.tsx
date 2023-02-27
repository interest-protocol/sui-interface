import { Network } from '@mysten/sui.js';
import type { GetStaticProps } from 'next';
import { mergeDeepRight, pathOr } from 'ramda';

import { FARMS_RECORD } from '@/constants';
import { withObjectIdGuard } from '@/HOC';
import { NextPageWithObjectId } from '@/interface';
import FarmDetails from '@/views/dapp/farm-details';

const FarmDetailsPage: NextPageWithObjectId = ({ objectId }) => {
  const farmMetadata = pathOr(null, [Network.DEVNET, objectId], FARMS_RECORD);

  if (!farmMetadata) return <div>Farm does not exist</div>;

  return <FarmDetails farmMetadata={farmMetadata} />;
};

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
      pageTitle: 'farmsDetails.pageTitle',
    },
  };
};

export default withObjectIdGuard(FarmDetailsPage);
