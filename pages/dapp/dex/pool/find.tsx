import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { mergeAll } from 'ramda';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { DEX_TOKENS_DATA } from '@/constants';
import { ModalProvider } from '@/context/modal';
import { useNetwork } from '@/hooks';
import LoadingPage from '@/views/dapp/components/loading-page';
import DEXFindPool from '@/views/dapp/dex-find-pool';
import { DexFindPoolForm } from '@/views/dapp/dex-find-pool/dex-find-pool.types';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const DEXFindPoolPage: NextPage<{ pageTitle: string }> = ({ pageTitle }) => {
  const [isCreatingPair, setCreatingPair] = useState(false);
  const form = useForm<DexFindPoolForm>();
  const { network } = useNetwork();

  const tokenADefault = { ...DEX_TOKENS_DATA[network][0], value: '0' };
  const tokenBDefault = { ...DEX_TOKENS_DATA[network][1], value: '0' };

  useEffect(() => {
    form.setValue('tokenA', tokenADefault);
    form.setValue('tokenB', tokenBDefault);
  }, [network]);

  // We want the form to re-render if types change
  const tokenAType =
    useWatch({ control: form.control, name: 'tokenA.type' }) ||
    tokenADefault.type;
  const tokenBType =
    useWatch({ control: form.control, name: 'tokenB.type' }) ||
    tokenBDefault.type;

  return (
    <ModalProvider>
      <Web3Manager>
        <Layout pageTitle={pageTitle}>
          <DEXFindPool
            form={form}
            isCreatingPair={isCreatingPair}
            setCreatingPair={setCreatingPair}
            tokenAType={tokenAType}
            tokenBType={tokenBType}
          />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexPoolFindMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/dex/pool/find/${locale}.json`),
  ]);

  const messages = mergeAll([
    commonMessages.default,
    dexPoolFindMessages.default,
  ]);

  return {
    props: {
      messages,
      pageTitle: 'dexPoolFind.pageTitle',
      now: Date.now(),
    },
  };
};

export default DEXFindPoolPage;
