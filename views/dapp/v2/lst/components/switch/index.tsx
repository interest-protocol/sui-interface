import {
  Box,
  darkTheme,
  lightTheme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Theme } from '@/design-system';

import { SwitchProps } from './switcher.types';

const Switcher: FC<SwitchProps> = ({ options, defaultValue }) => {
  const { dark } = useTheme() as Theme;
  const [selected, setSelected] = useState(defaultValue);

  const switcher = (value: string | number) => () => setSelected(value);

  return (
    <Box
      p="0.125rem"
      width="100%"
      display="flex"
      cursor="pointer"
      borderRadius="full"
      bg="inverseSurface"
      justifyContent="space-between"
    >
      {options.map(({ value, onSelect, displayValue }) => (
        <Box
          key={v4()}
          flex="1"
          p="0.5rem 1.5rem"
          borderRadius="full"
          onClick={() => {
            if (value !== selected) {
              switcher(value);
              onSelect?.();
            }
          }}
          bg={value !== selected ? 'transparent' : 'surface'}
          color={
            value !== selected
              ? (!dark ? darkTheme : lightTheme).colors.primary
              : 'onSurface'
          }
        >
          <Typography textAlign="center" variant="small" fontWeight="500">
            {displayValue}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
export default Switcher;
