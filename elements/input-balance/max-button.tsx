import { useTheme } from '@emotion/react';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Box from '../box';
import Button from '../button';
import { GenericMaxButtonProps, MaxButtonProps } from './input-balance.types';

const MAX_VALUES = [0.25, 0.5, 0.75, 1];

const GenericMaxButton: FC<GenericMaxButtonProps> = ({
  dark,
  onClick,
  disabled,
  children,
}) => (
  <Button
    p="NONE"
    fontSize="XS"
    width="2.4rem"
    height="2.4rem"
    variant="primary"
    bg="accentActive"
    onClick={onClick}
    hover={{ bg: 'accent' }}
    disabled={disabled || false}
    active={{ bg: 'accentActive' }}
    color={dark ? 'text' : 'textInverted'}
  >
    {children}
  </Button>
);

const MaxButton: FC<MaxButtonProps> = ({
  max,
  left,
  disabled,
  setValue,
  customFunction,
  name,
}) => {
  const { dark } = useTheme() as { dark: boolean };

  const [isOpen, setOpen] = useState(false);

  const handleMax = (value: number) => {
    setOpen(false);

    if (disabled || !setValue) return;

    setValue?.(name, +(max ?? '0') * value);

    customFunction && customFunction(name);
  };

  return max ? (
    <Box
      position="relative"
      display="flex"
      justifyContent={left ? 'flex-start' : 'flex-end'}
    >
      <GenericMaxButton
        disabled={!!disabled}
        dark={dark}
        onClick={() => setOpen(true)}
      >
        max
      </GenericMaxButton>
      {isOpen && (
        <Box
          gap="0.2rem"
          display="flex"
          position="absolute"
          minWidth={left ? '20rem' : 'unset'}
          justifyContent={left ? 'flex-start' : 'flex-end'}
          background={dark ? 'bottomBackground' : 'background'}
        >
          {MAX_VALUES.map((value) => (
            <GenericMaxButton
              key={v4()}
              dark={dark}
              disabled={!!disabled}
              onClick={() => handleMax(value)}
            >
              {value * 100}%
            </GenericMaxButton>
          ))}
        </Box>
      )}
    </Box>
  ) : null;
};

export default MaxButton;
