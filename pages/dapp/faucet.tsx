import { Network } from '@interest-protocol/sui-sdk';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import { mergeAll } from 'ramda';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { LoadingPage } from '@/components';
import { FAUCET_TOKENS } from '@/constants';
import { ModalProvider } from '@/context/modal';
import { useNetwork } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import Faucet from '@/views/dapp/faucet';
import { IFaucetForm } from '@/views/dapp/faucet/faucet.types';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const FaucetPage: NextPageWithProps = ({ pageTitle }) => {
  const { network } = useNetwork();

  const tokens = FAUCET_TOKENS[network];

  const form = useForm<IFaucetForm>();

  useEffect(() => {
    form.setValue('type', tokens?.[0]?.type ?? '');
    form.setValue('amount', 0);
  }, [network]);

  if (network === Network.MAINNET)
    return (
      <Web3Manager>
        <Layout pageTitle="common.error">
          <Error statusCode={404} />
        </Layout>
      </Web3Manager>
    );

  return (
    <ModalProvider>
      <Web3Manager>
        <Layout pageTitle={pageTitle}>
          <Faucet form={form} />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, faucetMessages, connectWalletMessages] =
    await Promise.all([
      import(`../../assets/messages/common/${locale}.json`),
      import(`../../assets/messages/faucet/${locale}.json`),
      import(`../../assets/messages/connect-wallet/${locale}.json`),
    ]);

  const messages = mergeAll([
    commonMessages.default,
    faucetMessages.default,
    connectWalletMessages.default,
  ]);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'faucet.pageTitle',
    },
  };
};

export default FaucetPage;
