import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { mutate } from 'swr';

import { useGetDexMarkets } from '@/views/dapp/dex/swap/swap.hooks';

import {
  SwapBodyProps,
  SwapManagerWrapperProps,
  SwapProps,
} from './swap.types';
import SwapForm from './swap-form';
import SwapHeader from './swap-header';
import SwapManager from './swap-manager';

const SwapManagerWrapper: FC<SwapManagerWrapperProps> = ({
  formSettings,
  formSwap,
  dexMarket,
}) => {
  const autoFetch = useWatch({
    control: formSettings.control,
    name: 'autoFetch',
  });

  const tokenInType = useWatch({
    control: formSwap.control,
    name: 'from.type',
  });

  const tokenOutType = useWatch({
    control: formSwap.control,
    name: 'to.type',
  });

  return (
    <SwapManager
      autoFetch={autoFetch}
      formSwap={formSwap}
      dexMarket={dexMarket}
      tokenInType={tokenInType}
      tokenOutType={tokenOutType}
    />
  );
};

const SwapFormBody: FC<SwapBodyProps> = ({
  formSwap,
  searchTokenModalState,
  formSettings,
}) => {
  const { data, isLoading } = useGetDexMarkets();
  console.log('handle loading', isLoading);
  return (
    <>
      <SwapForm
        formSwap={formSwap}
        searchTokenModalState={searchTokenModalState}
        formSettings={formSettings}
        dexMarket={data || {}}
        mutate={mutate}
      />
      <SwapManagerWrapper
        formSwap={formSwap}
        formSettings={formSettings}
        dexMarket={data || {}}
      />
    </>
  );
};

const Swap: FC<SwapProps> = ({
  formSwap,
  searchTokenModalState,
  formSettings,
  ...rest
}) => (
  <Box
    display="flex"
    gridColumn="1/-1"
    variant="container"
    alignItems="center"
    flexDirection="column"
    minHeight={['100%', '100%', 'unset']}
    justifyContent={['space-between', 'space-between', 'unset']}
  >
    <SwapHeader {...rest} formSettings={formSettings} />
    <SwapFormBody
      formSwap={formSwap}
      formSettings={formSettings}
      searchTokenModalState={searchTokenModalState}
    />
  </Box>
);

export default Swap;
