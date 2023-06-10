import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { pathOr, propOr } from 'ramda';
import { ChangeEvent, FC } from 'react';
import { useWatch } from 'react-hook-form';

import { getUSDPriceByCoinSymbol, getUSDPriceById } from '@/api/prices';
import { COIN_MARKET_CAP_ID_RECORD } from '@/constants';
import { useWeb3 } from '@/hooks';
import { useNetwork } from '@/hooks';
import { CoinData, TTranslatedMessage } from '@/interface';
import { FixedPointMath } from '@/lib';
import {
  formatDollars,
  parseInputEventToNumberString,
  ZERO_BIG_NUMBER,
} from '@/utils';
import SelectToken from '@/views/dapp/v2/components/select-token';

import {
  SwapAmountInUSDProps,
  SwapInputProps,
  TextFieldWrapperProps,
} from '../swap.types';
import SwapFormFieldSlider from './swap-form-slider';

const SwapAmountInUSD: FC<SwapAmountInUSDProps> = ({ name, control }) => {
  const token = useWatch({ control, name });

  if (!token) return null;

  const { value, usdPrice } = token;

  const valueNumber = Number(value);

  if (!valueNumber || !usdPrice) return null;

  return <>{formatDollars(valueNumber * usdPrice)} USD</>;
};

const TextFieldWrapper: FC<TextFieldWrapperProps> = ({
  name,
  errors,
  control,
  register,
  setValue,
  onSelectToken,
  currentTokenType,
  searchTokenModalState,
  currentTokenSymbol,
}) => {
  const t = useTranslations();

  const locked = useWatch({
    control: control,
    name: `${name}.locked`,
  });

  return (
    <TextField
      placeholder="0"
      textAlign="right"
      disabled={locked || !currentTokenType}
      error={
        currentTokenType &&
        errors[name]?.message &&
        t(`swap.form.errors.${errors[name]?.message}` as TTranslatedMessage)
      }
      {...register(`${name}.value`, {
        onChange: (v: ChangeEvent<HTMLInputElement>) => {
          setValue('maxValue', false);
          setValue?.(`${name}.value`, parseInputEventToNumberString(v));
          setValue('lock', false);
        },
      })}
      Bottom={<SwapAmountInUSD name={name} control={control} />}
      Prefix={
        <SelectToken
          onSelectToken={onSelectToken}
          searchTokenModalState={searchTokenModalState}
          currentTokenType={currentTokenType ? currentTokenType : null}
          currentTokenSymbol={currentTokenSymbol}
        />
      }
    />
  );
};

const SwapFormField: FC<SwapInputProps> = ({
  name,
  searchTokenModalState,
  formSwap: {
    control,
    register,
    setValue,
    getValues,
    formState: { errors },
  },
}) => {
  const t = useTranslations();
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();
  const currentTokenType = useWatch({
    control: control,
    name: `${name}.type`,
  });

  const onSelectToken = async (token: CoinData) => {
    setValue(name, {
      ...token,
      value: '0',
      locked: false,
      usdPrice: null,
    });

    if (pathOr(null, [network, token.type], COIN_MARKET_CAP_ID_RECORD)) {
      const id = COIN_MARKET_CAP_ID_RECORD[network][token.type].toString();
      const data = await getUSDPriceById([id]).catch();

      setValue(
        `${name}.usdPrice`,
        pathOr(null, ['data', id, 'quote', 'USD', 'price'], data)
      );
      return;
    }

    const rawData = await getUSDPriceByCoinSymbol([
      token.symbol.toUpperCase(),
    ]).catch();

    const priceData = pathOr(
      [],
      ['data', token.symbol.toUpperCase()],
      rawData
    ).find(
      (x: Record<string, unknown>) =>
        propOr('', 'symbol', x) === token.symbol.toUpperCase() ||
        COIN_MARKET_CAP_ID_RECORD[network][token.type] === x.id
    );

    if (priceData)
      setValue(
        `${name}.usdPrice`,
        pathOr(null, ['quote', 'USD', 'price'], priceData)
      );
  };

  const balance = FixedPointMath.toNumber(
    pathOr(ZERO_BIG_NUMBER, [currentTokenType, 'totalBalance'], coinsMap)
  );

  return (
    <Box pt="l">
      <Box
        mb="xs"
        display="flex"
        color="onSurface"
        justifyContent="space-between"
      >
        <Typography variant="medium">
          {name === 'from' ? t('swap.form.from') : t('swap.form.to')}
        </Typography>
        <Typography variant="medium">
          {t('swap.form.balance')}: {balance}
        </Typography>
      </Box>
      <TextFieldWrapper
        name={name}
        errors={errors}
        control={control}
        register={register}
        setValue={setValue}
        onSelectToken={onSelectToken}
        currentTokenType={currentTokenType}
        searchTokenModalState={searchTokenModalState}
        currentTokenSymbol={getValues(`${name}.symbol`)}
      />
      {name === 'from' && (
        <SwapFormFieldSlider
          balance={balance}
          setValue={setValue}
          currentValue={+getValues('from.value')}
        />
      )}
    </Box>
  );
};

export default SwapFormField;
