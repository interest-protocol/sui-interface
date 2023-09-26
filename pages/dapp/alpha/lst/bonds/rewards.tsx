import { Network } from '@interest-protocol/sui-amm-sdk';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { always, mergeDeepRight } from 'ramda';
import { FC } from 'react';

import { SEO } from '@/components';
import { useNetwork } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import LSTLayout from '@/views/dapp/v2/lst';
import BondsClaimRewards from '@/views/dapp/v2/lst/bonds/claim-rewards';
import { BondsProvider } from '@/views/dapp/v2/lst/bonds/context';

const LoadingPage: FC = always(<LSTLayout loading={true} />);

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const BondsRewardsPage: NextPageWithProps = ({ pageTitle }) => {
  const { network } = useNetwork();

  if (network !== Network.TESTNET) return <LoadingPage />;

  return (
    <BondsProvider>
      <Web3Manager>
        <SEO pageTitle={pageTitle} />
        <LSTLayout>
          <BondsClaimRewards />
        </LSTLayout>
      </Web3Manager>
    </BondsProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, LstMessages] = await Promise.all([
    import(`../../../../../assets/messages/common/${locale}.json`),
    import(`../../../../../assets/messages/lst/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, LstMessages.default);

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lst.metadata.title',
    },
  };
};

export default BondsRewardsPage;
