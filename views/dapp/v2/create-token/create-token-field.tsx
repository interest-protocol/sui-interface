import { TextField } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CreateTokenFieldProps } from './create-token-form.types';

const CreateTokenField: FC<CreateTokenFieldProps> = ({
  name,
  register,
  required,
  placeholder,
}) => (
  <TextField
    fontSize="m"
    required={required}
    placeholder={placeholder}
    {...register(name)}
    fieldProps={{
      border: '0px',
      bg: 'surface.containerLowest',
      height: '3.5rem',
      color: 'onSurfaceVariant',
      paddingLeft: '1rem',
    }}
  />
);

export default CreateTokenField;
