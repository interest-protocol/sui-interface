import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { pathOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

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

  if (!valueNumber) return null;

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

  const onSelectToken = (token: CoinData) =>
    setValue(name, {
      ...token,
      value: '0',
      usdPrice: 1,
      locked: false,
    });

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
          balance={10}
          setValue={setValue}
          getValues={getValues}
        />
      )}
    </Box>
  );
};

export default SwapFormField;
