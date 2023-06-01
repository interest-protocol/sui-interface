import { Box, Slider, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import SelectToken from '../../componentes/select-token';
import { SwapFormFieldProps } from './swap-form.types';

const SwapFormField: FC<SwapFormFieldProps> = ({ field, balance }) => {
  const t = useTranslations();
  return (
    <Box pt="l">
      <Box
        display="flex"
        justifyContent="space-between"
        color="textSoft"
        mb="xs"
      >
        <Typography variant="medium">
          {field === 'from' ? t('swap.form.from') : t('swap.form.to')}
        </Typography>
        <Typography variant="medium">
          {t('swap.form.balance')} {balance}
        </Typography>
      </Box>
      <TextField
        textAlign="right"
        placeholder="0.000"
        Prefix={<SelectToken />}
      />
      {field === 'from' && (
        <Box mx="s">
          <Slider min={0} max={100} value={0} />
        </Box>
      )}
    </Box>
  );
};

export default SwapFormField;
