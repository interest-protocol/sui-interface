import { TextField } from '@interest-protocol/ui-kit';
import { ChangeEvent, FC } from 'react';

import { parseInputEventToNumberString } from '@/utils';

import { CreateTokenAmountFieldProps } from './create-token-form.types';

const CreateTokenAmountField: FC<CreateTokenAmountFieldProps> = ({
  required,
  register,
  setValue,
  placeholder,
}) => (
  <TextField
    fontSize="m"
    required={required}
    placeholder={placeholder}
    fieldProps={{
      border: '0px',
      bg: 'surface.containerLowest',
      height: '3.5rem',
      color: 'onSurfaceVariant',
      paddingLeft: '1rem',
    }}
    {...register('amount', {
      onChange: (v: ChangeEvent<HTMLInputElement>) => {
        setValue?.('amount', parseInputEventToNumberString(v));
      },
    })}
  />
);

export default CreateTokenAmountField;
