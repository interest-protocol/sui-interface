import { FC } from 'react';

import { Box, Input, Typography } from '@/elements';

import { FieldProps } from './settings.types';

const Field: FC<FieldProps> = ({
  label,
  prefix,
  setRegister,
  suffix,
  placeholder,
  max,
  type,
}) => (
  <Box mt="L">
    <Typography variant="normal" fontSize="0.9rem">
      {label}
    </Typography>
    <Input
      min="0"
      type={type}
      placeholder={placeholder}
      {...setRegister()}
      max={max}
      textAlign="right"
      shieldProps={{
        p: 'S',
        my: 'M',
        bg: 'background',
        overflow: 'visible',
        border: '1px solid',
        borderRadius: '2rem',
        borderColor: 'transparent',
        hover: {
          borderColor: 'accentActive',
        },
      }}
      Prefix={prefix}
      Suffix={suffix}
    />
  </Box>
);

export default Field;
