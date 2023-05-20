import { pathOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { InputBalance } from '@/elements';
import { FixedPointMath } from '@/lib';
import { ZERO_BIG_NUMBER } from '@/utils';
import SwapSelectCurrency from '@/views/dapp/components/select-currency';
import SelectCurrency from '@/views/dapp/components/select-currency';

import { CoinInputProps } from './swap.types';

export const InputTokenIn: FC<CoinInputProps> = ({
  coinsMap,
  formSwap,
  searchTokenModalState,
  onSelectCurrency,
}) => {
  const locked = useWatch({ control: formSwap.control, name: 'inputInLocked' });
  const tokenInType = useWatch({
    control: formSwap.control,
    name: 'tokenIn.type',
  });

  return (
    <InputBalance
      max
      noCap
      disabled={locked}
      name="tokenIn.value"
      register={formSwap.register}
      setValue={formSwap.setValue}
      balance={FixedPointMath.toNumber(
        pathOr(ZERO_BIG_NUMBER, [tokenInType, 'totalBalance'], coinsMap),
        pathOr(0, [tokenInType, 'decimals'], coinsMap)
      ).toString()}
      Suffix={
        <SelectCurrency
          currentToken={tokenInType}
          type={formSwap.getValues('tokenIn.type')}
          symbol={formSwap.getValues('tokenIn.symbol')}
          onSelectCurrency={onSelectCurrency('tokenIn')}
          searchTokenModalState={searchTokenModalState}
        />
      }
      isLarge={true}
      customFunction={() => {
        formSwap.setValue('lock', false);
      }}
    />
  );
};

export const InputTokenOut: FC<CoinInputProps> = ({
  coinsMap,
  formSwap,
  searchTokenModalState,
  onSelectCurrency,
}) => {
  const locked = useWatch({
    control: formSwap.control,
    name: 'inputOutLocked',
  });

  const tokenOutType = useWatch({
    control: formSwap.control,
    name: 'tokenOut.type',
  });
  return (
    <InputBalance
      noCap
      disabled={locked}
      isLarge
      balance={FixedPointMath.toNumber(
        pathOr(ZERO_BIG_NUMBER, [tokenOutType, 'totalBalance'], coinsMap),
        pathOr(0, [tokenOutType, 'decimals'], coinsMap)
      ).toString()}
      register={formSwap.register}
      setValue={formSwap.setValue}
      name="tokenOut.value"
      Suffix={
        <SwapSelectCurrency
          currentToken={tokenOutType}
          type={tokenOutType}
          onSelectCurrency={onSelectCurrency('tokenOut')}
          symbol={formSwap.getValues('tokenOut.symbol')}
          searchTokenModalState={searchTokenModalState}
        />
      }
      customFunction={() => {
        formSwap.setValue('lock', false);
      }}
    />
  );
};
