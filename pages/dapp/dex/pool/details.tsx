import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { LoadingPage } from '@/components';
import { withObjectIdGuard } from '@/HOC';
import { NextPageDefaultProps } from '@/interface';
import DEXPoolDetailsView from '@/views/dapp/dex-pool-details';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

interface DEXPoolDetailsPageProps extends NextPageDefaultProps {
  objectId: string;
}

const DEXPoolDetailsPage: NextPage<DEXPoolDetailsPageProps> = ({
  objectId,
  pageTitle,
}) => (
  <Web3Manager>
    <Layout pageTitle={pageTitle}>
      <DEXPoolDetailsView objectId={objectId} />
    </Layout>
  </Web3Manager>
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
      pageTitle: 'dexPoolPair.pageTitle',
      now: Date.now(),
    },
  };
};

export default withObjectIdGuard(DEXPoolDetailsPage);
