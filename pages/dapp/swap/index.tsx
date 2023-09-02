import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeAll } from 'ramda';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useReadLocalStorage } from 'usehooks-ts';
import { Layout } from 'views/dapp/v2/components';

import { SEO } from '@/components';
import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';
import { NextPageWithProps } from '@/interface';
import { TokenModalMetadata } from '@/interface';
import LoadingPage from '@/views/dapp/components/loading-page';
import Swap from '@/views/dapp/v2/swap';
import {
  ISwapSettingsForm,
  LocalSwapSettings,
  SwapForm,
} from '@/views/dapp/v2/swap/swap.types';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const SwapPage: NextPageWithProps = ({ pageTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchedToken] = useState<null | TokenModalMetadata>(null);

  const localSettings = useReadLocalStorage<LocalSwapSettings>(
    `${LOCAL_STORAGE_VERSION}-sui-interest-swap-settings`
  ) ?? { slippage: '1', deadline: '30', autoFetch: true };

  const setLocalSettings = (settings: LocalSwapSettings) =>
    window.localStorage.setItem(
      `${LOCAL_STORAGE_VERSION}-sui-interest-swap-settings`,
      JSON.stringify(settings)
    );

  const formSwap = useForm<SwapForm>();

  const formSettings = useForm<ISwapSettingsForm>();

  useEffect(() => {
    formSettings.setValue('slippage', localSettings.slippage);
    formSettings.setValue('autoFetch', localSettings.autoFetch);
    formSettings.setValue('deadline', localSettings.deadline);
  }, [localSettings]);

  return (
    <Web3Manager>
      <SEO pageTitle={pageTitle} />
      <Layout dashboard>
        <Swap
          formSwap={formSwap}
          openModalState={{ isOpen, setIsOpen }}
          setLocalSettings={setLocalSettings}
          formSettings={formSettings}
          searchTokenModalState={searchedToken}
        />
      </Layout>
    </Web3Manager>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, swapMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/swap/${locale}.json`),
  ]);

  const messages = mergeAll([commonMessages.default, swapMessages.default]);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'swap.metadata.title',
    },
  };
};

export default SwapPage;
