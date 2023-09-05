import { Network } from '@interest-protocol/sui-amm-sdk';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import NotFoundPage from 'pages/404';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { COIN_TYPE_TO_COIN, FARMS_RECORD } from '@/constants';
import { FARMS_RECORD as LIQUIDITY_RECORD } from '@/constants/liquidity-farms.constants';
import { ModalProvider } from '@/context/modal';
import { withObjectIdGuard, withTypeGuard } from '@/HOC';
import { useNetwork } from '@/hooks';
import { NextPageDefaultProps } from '@/interface';
import EarnDetails from '@/views/dapp/v2/earn-details';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
});

interface EarnDetailsPageProps extends NextPageDefaultProps {
  type: string;
}

const EARN_RECORD = mergeDeepRight(LIQUIDITY_RECORD, FARMS_RECORD);

const EarnDetailsPage: NextPage<EarnDetailsPageProps> = ({
  now,
  type,
  messages,
  pageTitle,
}) => {
  const { network } = useNetwork();

  const poolData = EARN_RECORD[network][type];

  if (!poolData)
    return (
      <NotFoundPage
        now={now}
        messages={messages}
        pageTitle="common.pageNotFound"
      />
    );

  return (
    <>
      <SEO pageTitle={pageTitle} />
      <ModalProvider newDesign>
        <EarnDetails {...poolData} />
      </ModalProvider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/earn/details/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, dexMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'earnDetails.metadata.title',
    },
  };
};

export default withTypeGuard(EarnDetailsPage);
