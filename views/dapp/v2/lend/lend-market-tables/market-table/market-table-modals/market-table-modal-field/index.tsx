import { TextField, TextFieldProps } from '@interest-protocol/ui-kit';
import { FC, forwardRef, PropsWithRef } from 'react';
import { Control, useWatch } from 'react-hook-form';

import { SupplyBorrowForm } from '../modal.types';

const MarketTableModalField: FC<
  PropsWithRef<
    TextFieldProps & { symbol: string; control: Control<SupplyBorrowForm> }
  >
> = forwardRef((props, ref) => {
  const originalValue = useWatch({
    control: props.control,
    name: 'originalValue',
  });
  const value = useWatch({ control: props.control, name: 'value' });

  return (
    <TextField
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      mb="1rem"
      placeholder="0"
      fontSize={`calc(3.563rem * ${
        8 / (originalValue.length > 8 ? originalValue.length : 8)
      })`}
      transition="fontSize 300ms ease-in-out"
      Suffix={props.symbol}
      defaultValue={value}
      fieldProps={{
        border: 'none',
        textAlign: 'center',
      }}
      {...props}
    />
  );
});

MarketTableModalField.displayName = 'MarketTableModalField';
export default MarketTableModalField;
