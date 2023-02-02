import { find, pathOr, propEq } from 'ramda';
import { FC, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { DEX_TOKENS_DATA } from '@/constants';
import { Box } from '@/elements';
import { useLocalStorage, useWeb3 } from '@/hooks';
import { FixedPointMath, TOKEN_SYMBOL } from '@/sdk';
import { LoadingSVG } from '@/svg';
import { formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../components/swap-select-currency';
import InputBalance from './input-balance';
import SettingsModal from './settings';
import { ISwapSettingsForm } from './settings/settings.types';
import {
  ISwapForm,
  LocalSwapSettings,
  OnSelectCurrencyData,
} from './swap.types';
import SwapManager from './swap-manager';

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

const Swap: FC = () => {
  const [ready, setReady] = useState(false);
  const { coinsMap, mutate, account } = useWeb3();
  const [tokenInType, setTokenInType] = useState(SUI.type);
  const [tokenOutType, setTokenOutType] = useState(ETH.type);
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
        value: '0',
        decimals: SUI.decimals,
        symbol: SUI.symbol,
      },
      tokenOut: {
        type: ETH.type,
        value: '0',
        decimals: ETH.decimals,
        symbol: ETH.symbol,
      },
    },
  });

  const flipTokens = () => {
    const aux = tokenOutType;

    setTokenOutType(() => {
      setValue('tokenOut', {
        ...(find(propEq('type', tokenInType), DEX_TOKENS_DATA) ??
          DEFAULT_UNKNOWN_DATA),
        value: '0.0',
      });
      return tokenInType;
    });

    setTokenInType(() => {
      setValue('tokenIn', {
        ...(find(propEq('type', aux), DEX_TOKENS_DATA) ?? DEFAULT_UNKNOWN_DATA),
        value: '0.0',
      });
      return aux;
    });
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

      if (name == 'tokenIn') setTokenInType(type);
      if (name == 'tokenOut') setTokenOutType(type);
    };

  return (
    <Box
      my="L"
      px="L"
      pb="L"
      color="text"
      width="100%"
      bg="foreground"
      borderRadius="M"
      minWidth={['20rem', '40rem']}
    >
      <Box pt="L" display="flex" alignItems="center" justifyContent="flex-end">
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <SettingsModal
            setLocalSettings={setSettings}
            localSettings={localSettings}
          />
        </Box>
      </Box>
      <Box color="text" width="100%" display="grid" gridGap="1rem">
        {!ready ? (
          <Box display="flex" justifyContent="center" width="100%" my="XXL">
            <LoadingSVG width="5rem" maxHeight="5rem" maxWidth="5rem" />
          </Box>
        ) : (
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
              name="tokenIn"
              register={register}
              setValue={setValue}
              disabled={false}
              currencySelector={
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
        )}
        <SwapManager
          mutate={mutate}
          control={control}
          account={account}
          setReady={setReady}
          setValue={setValue}
          register={register}
          coinsMap={coinsMap}
          getValues={getValues}
          tokenInType={tokenInType}
          tokenOutType={tokenOutType}
          slippage={localSettings.slippage}
          isTokenOutOpenModal={isTokenOutOpenModal}
          setTokenOutIsOpenModal={setTokenOutIsOpenModal}
          onSelectCurrency={onSelectCurrency('tokenOut')}
        />
      </Box>
    </Box>
  );
};

export default Swap;
