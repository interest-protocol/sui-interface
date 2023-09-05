import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { formatMoney } from '@/utils';

import { RemoveLiquidityFieldProps } from './remove-liquidity-field.types';

const Field: FC<
  Pick<RemoveLiquidityFieldProps, 'control' | 'register'> & {
    isInput: boolean;
  }
> = ({ control, isInput, register }) => {
  const amount = useWatch({ control, name: 'lpCoin' });

  if (!isInput)
    return <Typography variant="medium">{formatMoney(+amount)}</Typography>;

  return (
    <Box width="100%">
      <TextField
        fontSize="m"
        {...register('lpCoin')}
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
