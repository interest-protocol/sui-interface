import { Box, Slider, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { pathOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { useWeb3 } from '@/hooks';
import { CoinData } from '@/interface';
import { FixedPointMath } from '@/lib';
import { ZERO_BIG_NUMBER } from '@/utils';
import SelectToken from '@/views/dapp/v2/components/select-token';

import { SwapInputProps } from '../swap.types';

const SwapFormField: FC<SwapInputProps> = ({
  name,
  formSwap,
  searchTokenModalState,
}) => {
  const t = useTranslations();
  const { coinsMap } = useWeb3();

  const currentTokenType = useWatch({
    control: formSwap.control,
    name: `${name}.type`,
  });
  const locked = useWatch({
    control: formSwap.control,
    name: `${name}Locked`,
  });

  const onSelectToken = (token: CoinData) =>
    formSwap.setValue(name, {
      ...token,
      value: '0',
      locked: false,
    });

  return (
    <Box pt="l">
      <Box
        display="flex"
        justifyContent="space-between"
        color="textSoft"
        mb="xs"
      >
        <Typography variant="medium">
          {name === 'from' ? t('swap.form.from') : t('swap.form.to')}
        </Typography>
        <Typography variant="medium">
          {t('swap.form.balance')}{' '}
          {FixedPointMath.toNumber(
            pathOr(
              ZERO_BIG_NUMBER,
              [currentTokenType, 'totalBalance'],
              coinsMap
            ),
            pathOr(0, [currentTokenType, 'decimals'], coinsMap)
          ).toString()}
        </Typography>
      </Box>
      <TextField
        disabled={locked}
        textAlign="right"
        placeholder="0.000"
        {...formSwap.register(`${name}.value`)}
        Prefix={
          <SelectToken
            currentTokenType={currentTokenType ? currentTokenType : null}
            onSelectToken={onSelectToken}
            searchTokenModalState={searchTokenModalState}
          />
        }
      />
      {name === 'from' && (
        <Box mx="s">
          <Slider
            min={0}
            max={100}
            value={0}
            disabled={pathOr(
              ZERO_BIG_NUMBER,
              [currentTokenType, 'totalBalance'],
              coinsMap
            ).isZero()}
          />
        </Box>
      )}
    </Box>
  );
};

export default SwapFormField;
