import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useCallback } from 'react';
import { useWatch } from 'react-hook-form';

import { Box } from '@/elements';
import { useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';

import { OnSelectCurrency } from '../../components/select-currency/select-currency.types';
import { InputTokenIn, InputTokenOut } from './inputs';
import SettingsModal from './settings';
import { ISwapSettingsForm } from './settings/settings.types';
import { useGetDexMarkets } from './swap.hooks';
import { SwapProps } from './swap.types';

const SwapManager = dynamic(() => import('./swap-manager'));

const Swap: FC<SwapProps> = ({
  formSwap,
  localSettings,
  openModalState,
  autoButtonState,
  setLocalSettings,
  formSettingsDropdown,
  searchTokenModalState,
}) => {
  const { coinsMap, mutate, account } = useWeb3();
  const { data: poolsMap, isLoading } = useGetDexMarkets();

  const setSettings = useCallback(
    ({ slippage, deadline, autoFetch }: ISwapSettingsForm) => {
      setLocalSettings({
        slippage,
        deadline,
        autoFetch,
      });
    },
    []
  );

  const flipTokens = () => {
    const tokenIn = formSwap.getValues('tokenIn');
    const tokenOut = formSwap.getValues('tokenOut');

    formSwap.setValue('tokenIn', tokenOut);
    formSwap.setValue('tokenOut', tokenIn);
  };

  const onSelectCurrency =
    (name: 'tokenIn' | 'tokenOut'): OnSelectCurrency =>
    ({ type, decimals, symbol }) => {
      formSwap.setValue(`${name}.type`, type);
      formSwap.setValue(`${name}.decimals`, decimals);
      formSwap.setValue(`${name}.symbol`, symbol);
      formSwap.setValue('tokenOut.value', '0.0');
      formSwap.setValue('tokenIn.value', '0.0');
    };

  const tokenInType = useWatch({
    control: formSwap.control,
    name: 'tokenIn.type',
  });

  const tokenOutType = useWatch({
    control: formSwap.control,
    name: 'tokenOut.type',
  });

  return (
    <Box
      my="L"
      px="L"
      pb="L"
      color="text"
      width="100%"
      bg="foreground"
      borderRadius="M"
      minWidth={['17rem', '40rem']}
    >
      <Box pt="L" display="flex" alignItems="center" justifyContent="flex-end">
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <SettingsModal
            setLocalSettings={setSettings}
            formSettingsDropdown={formSettingsDropdown}
            autoButtonState={autoButtonState}
            openModalState={openModalState}
          />
        </Box>
      </Box>
      {isLoading ? (
        <Box
          my="XXL"
          width="100%"
          display="flex"
          color="accent"
          justifyContent="center"
        >
          <LoadingSVG width="5rem" maxHeight="5rem" maxWidth="5rem" />
        </Box>
      ) : (
        <Box color="text" width="100%" display="grid" gridGap="1rem">
          <Box
            pt="L"
            mb="-1rem"
            display="flex"
            borderRadius="M"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <InputTokenIn
              formSwap={formSwap}
              coinsMap={coinsMap}
              onSelectCurrency={onSelectCurrency}
              searchTokenModalState={searchTokenModalState}
            />
            <Box
              zIndex={1}
              width="3rem"
              height="3rem"
              display="flex"
              bg="background"
              cursor="pointer"
              borderRadius="50%"
              border="1px solid"
              mx={['XL', 'auto']}
              position="relative"
              alignItems="center"
              borderColor="accent"
              onClick={flipTokens}
              justifyContent="center"
              mt={['-1rem', '-1.5rem']}
              mb={['-1.2rem', '-1.5rem']}
              nHover={{
                boxShadow: '0 0 0.5rem #0055FF',
              }}
            >
              ⥯
            </Box>
          </Box>
          <InputTokenOut
            formSwap={formSwap}
            coinsMap={coinsMap}
            onSelectCurrency={onSelectCurrency}
            searchTokenModalState={searchTokenModalState}
          />
          <SwapManager
            account={account}
            coinsMap={coinsMap}
            control={formSwap.control}
            setValue={formSwap.setValue}
            getValues={formSwap.getValues}
            poolsMap={poolsMap || {}}
            autoFetch={localSettings.autoFetch}
            tokenInType={tokenInType}
            tokenOutType={tokenOutType}
            swapButtonProps={{
              mutate,
              getValues: formSwap.getValues,
              slippage: localSettings.slippage,
              deadline: localSettings.deadline,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Swap;
