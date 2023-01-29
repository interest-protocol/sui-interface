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
        height: '3rem',
        bg: 'background',
        borderRadius: 'M',
        overflow: 'visible',
        border: '1px solid',
        borderColor: 'transparent',
        hover: {
          borderColor: 'accentBackground',
        },
      }}
      Prefix={prefix}
      Suffix={suffix}
    />
  </Box>
);

export default Field;
