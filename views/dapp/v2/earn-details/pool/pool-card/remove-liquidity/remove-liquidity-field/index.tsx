import {
  Box,
  Slider,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { v4 } from 'uuid';

import { FixedPointMath } from '@/lib';
import { capitalize } from '@/utils';

import { getSymbolsByCoins } from '../../../../earn.utils';
import Field from './field';
import { RemoveLiquidityFieldProps } from './remove-liquidity-field.types';
import TokenIcon from './token-icon';

const TokenFieldSlider: FC<
  Omit<RemoveLiquidityFieldProps, 'register' | 'tokens'>
> = ({ balance, control, decimals, setValue }) => {
  const balanceInNumber = FixedPointMath.toNumber(balance, decimals);

  const amount = useWatch({ control, name: 'lpCoin' });
  const [getValue] = useDebounce(() => +amount / balanceInNumber, 800);

  return (
    <Box mt="-1.5rem">
      <Slider
        max={100}
        initial={getValue()}
        onChange={(value) =>
          setValue('lpCoin', String(value * balanceInNumber))
        }
      />
    </Box>
  );
};

const RemoveLiquidityField: FC<RemoveLiquidityFieldProps> = ({
  tokens,
  control,
  balance,
  setValue,
  register,
  decimals,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const [isInput, setIsInput] = useState(false);

  return (
    <Box pt="2xl" display="flex" flexDirection="column" gap="s">
      <Typography variant="medium" color="onSurface">
        {capitalize(t('common.balance')) + ' ' + balance}
      </Typography>
      <Box display="flex" gap="2xl" alignItems="center">
        <Box
          display="flex"
          gap="m"
          alignItems="center"
          width="fill-available"
          flexWrap="wrap"
        >
          {tokens.map((coin) => (
            <TokenIcon type={coin.type} key={v4()} />
          ))}
          <Typography variant="medium" color={!dark ? 'black' : 'white'}>
            {getSymbolsByCoins(tokens)}
          </Typography>
        </Box>
        <Box
          ml="auto"
          px="l"
          width="100%"
          height="3.5rem"
          display="flex"
          alignItems="center"
          color="onSurfaceVariant"
          justifyContent="flex-end"
          onClick={() => setIsInput(true)}
        >
          <Field isInput={isInput} control={control} register={register} />
        </Box>
      </Box>
      <TokenFieldSlider
        control={control}
        balance={balance}
        decimals={decimals}
        setValue={setValue}
      />
    </Box>
  );
};

export default RemoveLiquidityField;
