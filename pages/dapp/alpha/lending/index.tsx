import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, ProgressIndicator } from '@interest-protocol/ui-kit';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';
import { useEffect } from 'react';
import { Layout } from 'views/dapp/v2/components';

import { LoadingPage, SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { useNetwork } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import Lend from '@/views/dapp/v2/lend';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const LendPage: NextPageWithProps = ({ pageTitle }) => {
  const { network, setNetwork } = useNetwork();

  // Money Market is only available on Sui Testnet
  useEffect(() => {
    if (network !== Network.TESTNET) setNetwork(Network.TESTNET);
  }, [network]);

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
    <ModalProvider newDesign>
      <Web3Manager>
        <SEO pageTitle={pageTitle} />
        <Layout dashboard>
          <Lend />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, lendingMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/lend/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    lendingMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lend.metadata.title',
    },
  };
};

export default LendPage;
