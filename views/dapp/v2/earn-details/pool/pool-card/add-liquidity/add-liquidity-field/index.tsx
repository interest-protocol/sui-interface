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
import { AddLiquidityFieldProps } from './add-liquidity-field.types';
import Field from './field';
import TokenIcon from './token-icon';

const TokenFieldSlider: FC<
  Omit<AddLiquidityFieldProps, 'register' | 'tokens'>
> = ({ name, balance, control, decimals, setValue }) => {
  const balanceInNumber = FixedPointMath.toNumber(balance, decimals);

  const amount = useWatch({ control, name });
  const [getValue] = useDebounce(() => amount / balanceInNumber, 800);

  return (
    <Box mt="-1.5rem">
      <Slider
        max={100}
        initial={getValue()}
        onChange={(value) => setValue(name, value * balanceInNumber)}
      />
    </Box>
  );
};

const AddLiquidityField: FC<AddLiquidityFieldProps> = ({
  name,
  tokens,
  control,
  balance,
  decimals,
  register,
  setValue,
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
          color="onSurfaceVariant"
          width="100%"
          height="3.5rem"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          onClick={() => setIsInput(true)}
        >
          <Field
            name={name}
            register={register}
            control={control}
            isInput={isInput}
          />
        </Box>
      </Box>
      <TokenFieldSlider
        name={name}
        balance={balance}
        control={control}
        decimals={decimals}
        setValue={setValue}
      />
    </Box>
  );
};

export default AddLiquidityField;
