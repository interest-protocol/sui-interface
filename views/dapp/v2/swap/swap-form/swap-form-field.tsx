import { Box, Slider, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { CoinData } from '@/interface';

import SelectToken from '../../componentes/select-token';
import { SwapInputProps } from '../swap.types';

const SwapFormField: FC<SwapInputProps> = ({
  form: { register, setValue, control },
  name,
}) => {
  const t = useTranslations();
  const type = useWatch({ control, name: `${name}.type` });

  const onSelectToken = (token: CoinData) =>
    setValue(name, {
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
          {t('swap.form.balance')} {0}
        </Typography>
      </Box>
      <TextField
        textAlign="right"
        placeholder="0.000"
        {...register(`${name}.value`)}
        Prefix={<SelectToken onSelectToken={onSelectToken} type={type} />}
      />
      {name === 'from' && (
        <Box mx="s">
          <Slider min={0} max={100} value={0} disabled />
        </Box>
      )}
    </Box>
  );
};

export default SwapFormField;
