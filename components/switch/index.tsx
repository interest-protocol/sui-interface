/* eslint-disable @typescript-eslint/no-empty-function */
import { useTheme } from '@emotion/react';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Box, Typography } from '@/elements';

import { SwitchProps } from './switch.types';

const Switch: FC<SwitchProps> = ({
  defaultValue,
  options,
  thin,
  bg,
  bgSelected,
}) => {
  const { dark } = useTheme() as { dark: boolean };
  const [selected, setSelected] = useState(defaultValue);

  const switcher = (value: string | number) => () => setSelected(value);

  return (
    <Box
      p="S"
      display="inline-flex"
      borderRadius="1.5rem"
      bg={bg || 'background'}
      height={thin ? '2.5rem' : '3rem'}
    >
      {options.map(({ value, onSelect, displayValue }) => (
        <Typography
          key={v4()}
          px={thin ? 'L' : 'XL'}
          py={thin ? 'S' : 'M'}
          display="flex"
          variant="normal"
          cursor="pointer"
          alignItems="center"
          borderRadius="1.5rem"
          fontSize="S"
          justifyContent="center"
          hover={{ color: 'textSecondary' }}
          textTransform="capitalize"
          color={
            value === selected
              ? dark
                ? 'text'
                : 'textInverted'
              : 'textSecondary'
          }
          onClick={() => {
            if (value !== selected) {
              switcher(value);
              onSelect?.();
            }
          }}
          bg={value === selected ? bgSelected || 'accentActive' : 'transparent'}
        >
          {displayValue ?? value}
        </Typography>
      ))}
    </Box>
  );
};
export default Switch;
