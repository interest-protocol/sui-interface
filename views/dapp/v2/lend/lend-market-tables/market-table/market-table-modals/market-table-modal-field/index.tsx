import {
  TextField,
  TextFieldProps,
  Theme,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC, forwardRef, PropsWithRef } from 'react';
import { Control, useWatch } from 'react-hook-form';

import { SupplyBorrowForm } from '../modal.types';

const MarketTableModalField: FC<
  PropsWithRef<
    TextFieldProps & { symbol: string; control: Control<SupplyBorrowForm> }
  >
> = forwardRef((props, ref) => {
  const value = useWatch({ control: props.control, name: 'value' });
  const { colors } = useTheme() as Theme;

  return (
    <TextField
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      placeholder="0"
      fontSize="1rem"
      transition="fontSize 300ms ease-in-out"
      Suffix={props.symbol}
      defaultValue={value}
      fieldProps={{
        px: '1rem',
        my: '.5rem',
        border: 'none',
        height: '3.5rem',
        bg: colors['surface.containerLowest'],
      }}
      {...props}
    />
  );
});

MarketTableModalField.displayName = 'MarketTableModalField';
export default MarketTableModalField;
