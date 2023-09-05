import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { formatMoney } from '@/utils';

import { AddLiquidityFieldProps } from './add-liquidity-field.types';

const Field: FC<
  Pick<AddLiquidityFieldProps, 'control' | 'register'> & {
    isInput: boolean;
    name: `token${0 | 1}`;
  }
> = ({ control, isInput, register, name }) => {
  const amount = useWatch({ control, name });

  if (!isInput)
    return <Typography variant="medium">{formatMoney(+amount)}</Typography>;

  return (
    <Box width="100%">
      <TextField
        fontSize="m"
        {...register(name)}
        placeholder={formatMoney(+amount)}
        fieldProps={{
          border: '0px',
          bg: 'surface.containerLowest',
          height: '3.5rem',
          color: 'onSurfaceVariant',
          paddingLeft: 'l',
          textAlign: 'end',
        }}
      />
    </Box>
  );
};

export default Field;
