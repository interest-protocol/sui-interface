import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { pathOr, propOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { getUSDPriceByCoinSymbol } from '@/api/prices';
import { useWeb3 } from '@/hooks';
import { CoinData, TTranslatedMessage } from '@/interface';
import { FixedPointMath } from '@/lib';
import { formatDollars, ZERO_BIG_NUMBER } from '@/utils';
import SelectToken from '@/views/dapp/v2/components/select-token';

import { SwapAmountInUSDProps, SwapInputProps } from '../swap.types';
import SwapFormFieldSlider from './swap-form-slider';

const SwapAmountInUSD: FC<SwapAmountInUSDProps> = ({ name, control }) => {
  const token = useWatch({ control, name });

  if (!token) return null;

  const { value, usdPrice } = token;

  const valueNumber = Number(value);

  if (!valueNumber || !usdPrice) return null;

  return <>{formatDollars(valueNumber * usdPrice)} USD</>;
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

  const currentTokenType = useWatch({
    control: control,
    name: `${name}.type`,
  });

  const locked = useWatch({
    control: control,
    name: `${name}.locked`,
  });

  const onSelectToken = async (token: CoinData) => {
    setValue(name, {
      ...token,
      value: '0',
      usdPrice: null,
      locked: false,
    });

    const rawData = await getUSDPriceByCoinSymbol([token.symbol.toUpperCase()]);

    const priceData = pathOr(
      [],
      ['data', token.symbol.toUpperCase()],
      rawData
    ).find(
      (x: Record<string, unknown>) =>
        propOr('', 'symbol', x) === token.symbol.toUpperCase()
    );

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
      <TextField
        disabled={locked}
        textAlign="right"
        placeholder="0.000"
        error={
          currentTokenType &&
          errors[name]?.message &&
          t(`swap.form.errors.${errors[name]?.message}` as TTranslatedMessage)
        }
        {...register(`${name}.value`)}
        Bottom={<SwapAmountInUSD name={name} control={control} />}
        Prefix={
          <SelectToken
            onSelectToken={onSelectToken}
            searchTokenModalState={searchTokenModalState}
            currentTokenType={currentTokenType ? currentTokenType : null}
          />
        }
      />
      {name === 'from' && (
        <SwapFormFieldSlider
          balance={balance}
          setValue={setValue}
          getValues={getValues}
        />
      )}
    </Box>
  );
};

export default SwapFormField;
