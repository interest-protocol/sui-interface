import { Box, Slider, TextField, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import SelectToken from '../../componentes/select-token';
import { SwapFormFieldProps } from './swap-form.types';

const SwapFormField: FC<SwapFormFieldProps> = ({ field, balance }) => (
  <Box pt="l">
    <Box display="flex" justifyContent="space-between" color="textSoft" mb="xs">
      <Typography variant="medium">
        {field === 'from' ? 'From' : 'To'}
      </Typography>
      <Typography variant="medium">Balance {balance}</Typography>
    </Box>
    <TextField textAlign="right" placeholder="0.000" Prefix={<SelectToken />} />
    {field === 'from' && (
      <Box mx="s">
        <Slider min={0} max={100} value={0} />
      </Box>
    )}
  </Box>
);

export default SwapFormField;
