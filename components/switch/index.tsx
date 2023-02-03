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
          fontSize="S"
          display="flex"
          variant="normal"
          cursor="pointer"
          alignItems="center"
          borderRadius="1.5rem"
          py={thin ? 'S' : 'M'}
          px={thin ? 'L' : 'XL'}
          justifyContent="center"
          textTransform="capitalize"
          hover={{ bg: value === selected ? 'accent' : 'transparent' }}
          bg={value === selected ? bgSelected || 'accentActive' : 'transparent'}
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
        >
          {displayValue ?? value}
        </Typography>
      ))}
    </Box>
  );
};
export default Switch;
