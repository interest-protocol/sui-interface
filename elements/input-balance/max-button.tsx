import { FC, PropsWithChildren } from 'react';
import { v4 } from 'uuid';

import Box from '../box';
import Button from '../button';
import { GenericMaxButtonProps, MaxButtonProps } from './input-balance.types';

const MAX_VALUES = [1, 0.5, 0.25];

const GenericMaxButton: FC<PropsWithChildren<GenericMaxButtonProps>> = ({
  onClick,
  disabled,
  children,
}) => (
  <Button
    p="S"
    ml="S"
    fontSize="XS"
    onClick={onClick}
    variant="secondary"
    justifyContent="center"
    disabled={disabled || false}
  >
    {children}
  </Button>
);

const MaxButton: FC<MaxButtonProps> = ({
  max,
  name,
  disabled,
  setValue,
  customFunction,
}) => {
  const handleMax = (value: number) => {
    if (disabled || !setValue) return;

    setValue?.(name, +(max ?? '0') * value);

    customFunction && customFunction(name);
  };

  return max ? (
    <Box px="M">
      {MAX_VALUES.map((value) => (
        <GenericMaxButton
          key={v4()}
          disabled={!!disabled}
          onClick={() => handleMax(value)}
        >
          {value === 1 ? 'Max' : <>{value * 100}%</>}
        </GenericMaxButton>
      ))}
    </Box>
  ) : null;
};

export default MaxButton;
