import { FC } from 'react';

import { Box, Input, Typography } from '@/elements';

import { FieldProps } from './settings.types';

const Field: FC<FieldProps> = ({
  max,
  type,
  label,
  suffix,
  prefix,
  hasBorder,
  placeholder,
  setRegister,
}) => (
  <Box mt="L">
    <Typography variant="normal" fontSize="0.9rem">
      {label}
    </Typography>
    <Input
      min="0"
      max={max}
      type={type}
      Prefix={prefix}
      Suffix={suffix}
      textAlign="right"
      {...setRegister()}
      placeholder={placeholder}
      color={hasBorder ? 'text' : 'disabled'}
      fontWeight={hasBorder ? 'bold' : 'unset'}
      shieldProps={{
        p: 'S',
        my: 'M',
        height: '3.6rem',
        bg: 'background',
        overflow: 'visible',
        border: hasBorder ? '2px solid' : '1px',
        borderRadius: '2rem',
        fontWeight: hasBorder ? 'bold' : 'unset',
        borderColor: hasBorder ? 'accent' : 'transparent',
        nHover: {
          borderColor: hasBorder ? 'accent' : 'accentActive',
        },
      }}
    />
  </Box>
);

export default Field;
