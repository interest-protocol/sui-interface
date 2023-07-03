import { TextField, TextFieldProps } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { Control, useWatch } from 'react-hook-form';

const MarketTableModalField: FC<
  TextFieldProps & { control: Control<{ value: string; isMax: boolean }> }
> = ({ control, ...props }) => {
  const value = useWatch({ control, name: 'value' });

  return (
    <TextField
      mb="1rem"
      placeholder="0"
      fontSize={`calc(3.563rem * ${8 / (value.length > 8 ? value.length : 8)})`}
      transition="fontSize 300ms ease-in-out"
      defaultValue={value}
      fieldProps={{
        border: 'none',
        textAlign: 'center',
      }}
      {...props}
    />
  );
};

export default MarketTableModalField;
