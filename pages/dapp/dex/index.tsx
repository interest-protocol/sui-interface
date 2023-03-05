import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { find, mergeDeepRight, propEq } from 'ramda';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoadingPage } from '@/components';
import { DEX_TOKENS_DATA } from '@/constants';
import { useLocalStorage } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import { TOKEN_SYMBOL } from '@/sdk';
import { SwapTokenModalMetadata } from '@/views/dapp/dex/dex.types';
import { LocalSwapSettings } from '@/views/dapp/dex/swap/swap.types';
import DEXSwapView from '@/views/dapp/dex/swap-view';

const SLIPPAGE_AUTO_VALUE = '0.1';

const DEFAULT_UNKNOWN_DATA = {
  symbol: '???',
  name: 'Unknown',
  decimals: 0,
  type: '',
};

const SUI =
  find(propEq('symbol', TOKEN_SYMBOL.SUI), DEX_TOKENS_DATA) ??
  DEFAULT_UNKNOWN_DATA;

const ETH =
  find(propEq('symbol', TOKEN_SYMBOL.ETH), DEX_TOKENS_DATA) ??
  DEFAULT_UNKNOWN_DATA;

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const DexPage: NextPageWithProps = ({ pageTitle }) => {
  const [isTokenInOpenModal, setTokenInIsOpenModal] = useState(false);
  const [isTokenOutOpenModal, setTokenOutIsOpenModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchedToken] = useState<null | SwapTokenModalMetadata>(null);
  const [isOpen, setIsOpen] = useState(false);

  const formSearch = useForm({
    defaultValues: {
      search: '',
    },
    mode: 'onBlur',
  });

  const [localSettings, setLocalSettings] = useLocalStorage<LocalSwapSettings>(
    'sui-interest-swap-settings',
    { slippage: '1' }
  );

  const formSwap = useForm({
    defaultValues: {
      tokenIn: {
        type: SUI.type,
        value: '0.0',
        decimals: SUI.decimals,
        symbol: SUI.symbol,
      },
      tokenOut: {
        type: ETH.type,
        value: '0.0',
        decimals: ETH.decimals,
        symbol: ETH.symbol,
      },
    },
  });

  const formSettingsDropdown = useForm({
    defaultValues: {
      slippage: localSettings.slippage,
    },
  });

  const [isAuto, setAuto] = useState(
    formSettingsDropdown.getValues('slippage') == SLIPPAGE_AUTO_VALUE
  );

  return (
    <Web3Manager>
      <Layout pageTitle={pageTitle}>
        <DEXSwapView
          formSwap={formSwap}
          tokenInModalState={{ isTokenInOpenModal, setTokenInIsOpenModal }}
          tokenOutModalState={{ isTokenOutOpenModal, setTokenOutIsOpenModal }}
          openModalState={{ isOpen, setIsOpen }}
          setLocalSettings={setLocalSettings}
          localSettings={localSettings}
          formSettingsDropdown={formSettingsDropdown}
          autoButtonState={{ isAuto, setAuto }}
          formSearch={formSearch}
          searchingState={{ isSearching, setIsSearching }}
          searchTokenModalState={searchedToken}
        />
      </Layout>
    </Web3Manager>
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
