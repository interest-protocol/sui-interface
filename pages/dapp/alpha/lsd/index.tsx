import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, ProgressIndicator } from '@interest-protocol/ui-kit';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeAll } from 'ramda';
import { Layout } from 'views/dapp/v2/components';

import { SEO } from '@/components';
import { useNetwork } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import LoadingPage from '@/views/dapp/components/loading-page';
import LSD from '@/views/dapp/v2/lsd';
const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const LSDPage: NextPageWithProps = ({ pageTitle }) => {
  const { network } = useNetwork();

  if (network !== Network.TESTNET)
    return (
      <Layout dashboard>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="calc(100% - 10rem)"
        >
          <ProgressIndicator variant="loading" />
        </Box>
      </Layout>
    );

  return (
    <Web3Manager>
      <SEO pageTitle={pageTitle} />
      <LSD />
    </Web3Manager>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, LsdMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/lsd/${locale}.json`),
  ]);

  const messages = mergeAll([commonMessages.default, LsdMessages.default]);

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lsd.metadata.title',
    },
  };
};

export default LSDPage;
