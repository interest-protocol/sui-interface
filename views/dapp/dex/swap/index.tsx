import { find, not, pathOr, propEq } from 'ramda';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { DEX_TOKENS_DATA } from '@/constants';
import { Box } from '@/elements';
import { useLocalStorage, useWeb3 } from '@/hooks';
import { FixedPointMath, TOKEN_SYMBOL } from '@/sdk';
import { CogsSVG } from '@/svg';
import { formatMoney, ZERO_BIG_NUMBER } from '@/utils';

import SwapSelectCurrency from '../components/swap-select-currency';
import InputBalance from './input-balance';
import SettingsModal from './settings';
import {
  ISwapForm,
  LocalSwapSettings,
  OnSelectCurrencyData,
} from './swap.types';
import SwapButton from './swap-button';

const DEFAULT_UNKNOWN_DATA = {
  type: '',
  symbol: '???',
  name: 'Unknown',
  decimals: 0,
};

const SUI =
  find(propEq('symbol', TOKEN_SYMBOL.SUI), DEX_TOKENS_DATA) ??
  DEFAULT_UNKNOWN_DATA;

const ETH =
  find(propEq('symbol', TOKEN_SYMBOL.ETH), DEX_TOKENS_DATA) ??
  DEFAULT_UNKNOWN_DATA;

const Swap: FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { coinsMap, mutate } = useWeb3();
  const [localSettings, setLocalSettings] = useLocalStorage<LocalSwapSettings>(
    'sui-interest-swap-settings',
    { slippage: '1', deadline: 5, autoFetch: false }
  );

  const [tokenInType, setTokenInType] = useState(SUI.type);
  const [tokenOutType, setTokenOutType] = useState(ETH.type);
  const [isTokenInOpenModal, setTokenInIsOpenModal] = useState(false);
  const [isTokenOutOpenModal, setTokenOutIsOpenModal] = useState(false);

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

  const toggleSettings = () => setShowSettings(not);

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
          <Box
            display="flex"
            cursor="pointer"
            alignItems="center"
            justifyContent="center"
            transform="rotate(0deg)"
            transition="all 300ms ease-in-out"
            hover={{
              color: 'accent',
              transform: 'rotate(90deg)',
            }}
            onClick={toggleSettings}
          >
            <CogsSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
          </Box>
          {showSettings && (
            <SettingsModal
              toggle={toggleSettings}
              setLocalSettings={setLocalSettings}
              localSettings={localSettings}
            />
          )}
        </Box>
      </Box>
      <Box color="text" width="100%" display="grid" gridGap="1rem">
        <Box
          py="L"
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
              pathOr(ZERO_BIG_NUMBER, [tokenInType, 'totalBalance'], coinsMap),
              pathOr(0, [tokenInType, 'decimals'], coinsMap)
            ).toString()}
            name="tokenIn"
            register={register}
            setValue={setValue}
            disabled={false}
            currencySelector={
              <SwapSelectCurrency
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
          <InputBalance
            balance={formatMoney(
              FixedPointMath.toNumber(
                pathOr(
                  ZERO_BIG_NUMBER,
                  [tokenOutType, 'totalBalance'],
                  coinsMap
                ),
                pathOr(0, [tokenOutType, 'decimals'], coinsMap)
              )
            )}
            name="tokenOut"
            register={register}
            setValue={setValue}
            currencySelector={
              <SwapSelectCurrency
                currentToken={tokenOutType}
                isModalOpen={isTokenOutOpenModal}
                symbol={getValues('tokenOut.symbol')}
                type={getValues('tokenOut.type')}
                setIsModalOpen={setTokenOutIsOpenModal}
                onSelectCurrency={onSelectCurrency('tokenOut')}
              />
            }
          />
        </Box>
      </Box>
      <SwapButton
        mutate={mutate}
        control={control}
        coinsMap={coinsMap}
        getValues={getValues}
        tokenInType={tokenInType}
        tokenOutType={tokenOutType}
      />
    </Box>
  );
};

export default Swap;
