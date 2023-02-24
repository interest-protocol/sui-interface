import dynamic from 'next/dynamic';
import { isEmpty, pathOr } from 'ramda';
import { FC, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useWatch } from 'react-hook-form';

import { Box, InputBalance } from '@/elements';
import { useLocalStorage, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG } from '@/svg';
import { formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../components/swap-select-currency';
import SettingsModal from './settings';
import { ISwapSettingsForm } from './settings/settings.types';
import { ETH, SUI } from './swap.data';
import { useGetVolatilePools } from './swap.hooks';
import {
  ISwapForm,
  LocalSwapSettings,
  OnSelectCurrencyData,
} from './swap.types';

const SwapManager = dynamic(() => import('./swap-manager'));

const Swap: FC = () => {
  const { coinsMap, mutate, account } = useWeb3();
  const { data: volatilePoolsMap } = useGetVolatilePools();
  const [isTokenInOpenModal, setTokenInIsOpenModal] = useState(false);
  const [isTokenOutOpenModal, setTokenOutIsOpenModal] = useState(false);

  const [localSettings, setLocalSettings] = useLocalStorage<LocalSwapSettings>(
    'sui-interest-swap-settings',
    { slippage: '1' }
  );

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

  const { register, setValue, getValues, control } = useForm<ISwapForm>({
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

  const flipTokens = () => {
    const tokenIn = getValues('tokenIn');
    const tokenOut = getValues('tokenOut');

    setValue('tokenIn', tokenOut);
    setValue('tokenOut', tokenIn);
  };

  const onSelectCurrency =
    (name: 'tokenIn' | 'tokenOut') =>
    ({ type, decimals, symbol }: OnSelectCurrencyData) => {
      setValue(`${name}.type`, type);
      setValue(`${name}.decimals`, decimals);
      setValue(`${name}.symbol`, symbol);
      setValue('tokenOut.value', '0.0');
      setValue('tokenIn.value', '0.0');
      isTokenInOpenModal && setTokenInIsOpenModal(false);
      isTokenOutOpenModal && setTokenOutIsOpenModal(false);
    };

  const tokenInType = useWatch({ control, name: 'tokenIn.type' });
  const tokenOutType = useWatch({ control, name: 'tokenOut.type' });

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
            localSettings={localSettings}
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
              register={register}
              setValue={setValue}
              disabled={false}
              Prefix={
                <SwapSelectCurrency
                  tokens={coinsMap}
                  currentToken={tokenInType}
                  isModalOpen={isTokenInOpenModal}
                  type={getValues('tokenIn.type')}
                  symbol={getValues('tokenIn.symbol')}
                  setIsModalOpen={setTokenInIsOpenModal}
                  onSelectCurrency={onSelectCurrency('tokenIn')}
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
            control={control}
            account={account}
            setValue={setValue}
            register={register}
            coinsMap={coinsMap}
            getValues={getValues}
            tokenInType={tokenInType}
            tokenOutType={tokenOutType}
            volatilePoolsMap={volatilePoolsMap}
            isTokenOutOpenModal={isTokenOutOpenModal}
            setTokenOutIsOpenModal={setTokenOutIsOpenModal}
            onSelectCurrency={onSelectCurrency('tokenOut')}
            swapButtonProps={{
              mutate,
              control,
              coinsMap,
              setValue,
              getValues,
              tokenInType,
              tokenOutType,
              slippage: localSettings.slippage,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Swap;
