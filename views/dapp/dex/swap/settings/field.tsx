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
  hasBorder,
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
      color={hasBorder ? 'text' : 'disabled'}
      fontWeight={hasBorder ? 'bold' : 'unset'}
      shieldProps={{
        p: 'S',
        my: 'M',
        bg: 'background',
        overflow: 'visible',
        border: hasBorder ? '2px solid' : '1px',
        borderRadius: '2rem',
        fontWeight: hasBorder ? 'bold' : 'unset',
        borderColor: hasBorder ? 'accent' : 'transparent',
        hover: {
          borderColor: hasBorder ? 'accent' : 'accentActive',
        },
      }}
      Prefix={prefix}
      Suffix={suffix}
    />
  </Box>
);

export default Field;
