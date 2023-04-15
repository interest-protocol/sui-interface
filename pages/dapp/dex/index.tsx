import { TOKEN_SYMBOL } from 'lib';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { find, mergeDeepRight, propEq } from 'ramda';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoadingPage } from '@/components';
import { DEX_TOKENS_DATA } from '@/constants';
import { ModalProvider } from '@/context/modal';
import { useLocalStorage, useNetwork } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import Loading from '@/views/dapp/components/loading';
import { TokenModalMetadata } from '@/views/dapp/components/select-currency/select-currency.types';
import { ISwapForm, LocalSwapSettings } from '@/views/dapp/dex/swap/swap.types';
import DEXSwapView from '@/views/dapp/dex/swap-view';

const SLIPPAGE_AUTO_VALUE = '0.1';

const DEFAULT_UNKNOWN_DATA = {
  symbol: '???',
  name: 'Unknown',
  decimals: 0,
  type: '',
};

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const DexPage: NextPageWithProps = ({ pageTitle }) => {
  const { network } = useNetwork();

  const SUI =
    find(propEq('symbol', TOKEN_SYMBOL.SUI), DEX_TOKENS_DATA[network]) ??
    DEFAULT_UNKNOWN_DATA;

  const ETH =
    find(propEq('symbol', TOKEN_SYMBOL.ETH), DEX_TOKENS_DATA[network]) ??
    DEFAULT_UNKNOWN_DATA;

  const [isOpen, setIsOpen] = useState(false);
  const [searchedToken] = useState<null | TokenModalMetadata>(null);

  const [localSettings, setLocalSettings] = useLocalStorage<LocalSwapSettings>(
    'sui-interest-swap-settings',
    { slippage: '1' }
  );

  const formSwap = useForm<ISwapForm>();

  useEffect(() => {
    formSwap.setValue('tokenIn', {
      type: SUI.type,
      value: '0.0',
      decimals: SUI.decimals,
      symbol: SUI.symbol,
    });
    formSwap.setValue('tokenOut', {
      type: ETH.type,
      value: '0.0',
      decimals: ETH.decimals,
      symbol: ETH.symbol,
    });
  }, [network]);

  const formSettingsDropdown = useForm({
    defaultValues: {
      slippage: localSettings.slippage,
    },
  });

  const [isAuto, setAuto] = useState(
    formSettingsDropdown.getValues('slippage') == SLIPPAGE_AUTO_VALUE
  );

  if (!formSwap.getValues()) return <Loading />;

  return (
    <ModalProvider>
      <Web3Manager>
        <Layout pageTitle={pageTitle}>
          <DEXSwapView
            formSwap={formSwap}
            openModalState={{ isOpen, setIsOpen }}
            setLocalSettings={setLocalSettings}
            localSettings={localSettings}
            formSettingsDropdown={formSettingsDropdown}
            autoButtonState={{ isAuto, setAuto }}
            searchTokenModalState={searchedToken}
          />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/dex/swap/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, dexMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'dexSwap.pageTitle',
    },
  };
};

export default DexPage;
