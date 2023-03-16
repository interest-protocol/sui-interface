import { FC } from 'react';

import { Box, InputBalance, Typography } from '@/elements';

import { CreateTokenSupplyFieldProps } from './create-token-form.types';

const CURRENCY_MAX = '100000';

const CreateTokenSupplyField: FC<CreateTokenSupplyFieldProps> = ({
  label,
  register,
  setValue,
}) => (
  <Box mb="L">
    <Typography as="label" fontSize="S" variant="normal" display="inline-block">
      {label}:
    </Typography>
    <InputBalance
      max
      name="amount"
      register={register}
      setValue={setValue}
      balance={CURRENCY_MAX}
    />
  </Box>
);

export default CreateTokenSupplyField;
