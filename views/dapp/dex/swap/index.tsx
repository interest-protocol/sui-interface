import dynamic from 'next/dynamic';
import { isEmpty, pathOr } from 'ramda';
import { FC } from 'react';
import { useCallback } from 'react';
import { useWatch } from 'react-hook-form';

import { Box, InputBalance } from '@/elements';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG } from '@/svg';
import { formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../components/swap-select-currency';
import SettingsModal from './settings';
import { ISwapSettingsForm } from './settings/settings.types';
import { useGetVolatilePools } from './swap.hooks';
import { OnSelectCurrencyData, SwapProps } from './swap.types';

const SwapManager = dynamic(() => import('./swap-manager'));

const Swap: FC<SwapProps> = ({
  formSwap,
  setLocalSettings,
  localSettings,
  formSettingsDropdown,
  autoButtonState,
  openModalState,
  tokenInModalState,
  tokenOutModalState,
  searchingState,
  formSearch,
  searchTokenModalState,
}) => {
  const { coinsMap, mutate, account } = useWeb3();
  const { data: volatilePoolsMap } = useGetVolatilePools();

  const setSettings = useCallback(
    ({ slippage: newSlippage }: ISwapSettingsForm) => {
      const slippage =
        !!newSlippage && newSlippage !== localSettings.slippage
          ? newSlippage
          : localSettings.slippage;

      setLocalSettings({
        slippage,
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
    (name: 'tokenIn' | 'tokenOut') =>
    ({ type, decimals, symbol }: OnSelectCurrencyData) => {
      formSwap.setValue(`${name}.type`, type);
      formSwap.setValue(`${name}.decimals`, decimals);
      formSwap.setValue(`${name}.symbol`, symbol);
      formSwap.setValue('tokenOut.value', '0.0');
      formSwap.setValue('tokenIn.value', '0.0');
      tokenInModalState.isTokenInOpenModal &&
        tokenInModalState.setTokenInIsOpenModal(false);
      tokenOutModalState.isTokenOutOpenModal &&
        tokenOutModalState.setTokenOutIsOpenModal(false);
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
      {isEmpty(volatilePoolsMap) ? (
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
            <InputBalance
              balance={formatMoney(
                FixedPointMath.toNumber(
                  pathOr(
                    ZERO_BIG_NUMBER,
                    [tokenInType, 'totalBalance'],
                    coinsMap
                  ),
                  pathOr(0, [tokenInType, 'decimals'], coinsMap)
                )
              )}
              max={FixedPointMath.toNumber(
                pathOr(
                  ZERO_BIG_NUMBER,
                  [tokenInType, 'totalBalance'],
                  coinsMap
                ),
                pathOr(0, [tokenInType, 'decimals'], coinsMap)
              ).toString()}
              name="tokenIn.value"
              register={formSwap.register}
              setValue={formSwap.setValue}
              disabled={false}
              Prefix={
                <SwapSelectCurrency
                  tokens={coinsMap}
                  currentToken={tokenInType}
                  searchingState={searchingState}
                  formSearch={formSearch}
                  isModalOpen={tokenInModalState.isTokenInOpenModal}
                  type={formSwap.getValues('tokenIn.type')}
                  symbol={formSwap.getValues('tokenIn.symbol')}
                  setIsModalOpen={tokenInModalState.setTokenInIsOpenModal}
                  onSelectCurrency={onSelectCurrency('tokenIn')}
                  searchTokenModalState={searchTokenModalState}
                />
              }
              isLarge={true}
              buttonMaxPosition="right"
            />
            <Box
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
              hover={{
                boxShadow: '0 0 0.5rem #0055FF',
              }}
            >
              ⥯
            </Box>
          </Box>
          <SwapManager
            control={formSwap.control}
            account={account}
            setValue={formSwap.setValue}
            register={formSwap.register}
            coinsMap={coinsMap}
            getValues={formSwap.getValues}
            tokenInType={tokenInType}
            tokenOutType={tokenOutType}
            volatilePoolsMap={volatilePoolsMap}
            isTokenOutOpenModal={tokenOutModalState.isTokenOutOpenModal}
            setTokenOutIsOpenModal={tokenOutModalState.setTokenOutIsOpenModal}
            onSelectCurrency={onSelectCurrency('tokenOut')}
            swapButtonProps={{
              mutate,
              control: formSwap.control,
              coinsMap,
              setValue: formSwap.setValue,
              getValues: formSwap.getValues,
              tokenInType,
              tokenOutType,
              slippage: localSettings.slippage,
            }}
            searchingState={searchingState}
            formSearch={formSearch}
            searchTokenModalState={searchTokenModalState}
          />
        </Box>
      )}
    </Box>
  );
};

export default Swap;
