import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { mutate } from 'swr';

import { useGetDexMarkets } from './swap.hooks';
import {
  SwapBodyProps,
  SwapManagerWrapperProps,
  SwapProps,
} from './swap.types';
import SwapForm from './swap-form';
import SwapHeader from './swap-header';
import SwapManager from './swap-manager';

const SwapManagerWrapper: FC<SwapManagerWrapperProps> = ({
  formSwap,
  dexMarket,
  formSettings,
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
  formSettings,
  searchTokenModalState,
}) => {
  const { data, isLoading } = useGetDexMarkets();

  return (
    <>
      <SwapForm
        mutate={mutate}
        formSwap={formSwap}
        isLoading={isLoading}
        dexMarket={data || {}}
        formSettings={formSettings}
        searchTokenModalState={searchTokenModalState}
      />
      <SwapManagerWrapper
        formSwap={formSwap}
        dexMarket={data || {}}
        formSettings={formSettings}
      />
    </>
  );
};

const Swap: FC<SwapProps> = ({
  formSwap,
  formSettings,
  searchTokenModalState,
  ...rest
}) => (
  <Box
    variant="container"
    alignItems="center"
    justifyItems="unset"
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
