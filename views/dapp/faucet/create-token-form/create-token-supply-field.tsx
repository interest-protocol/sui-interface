import { FC } from 'react';

import { Box, InputBalance, Typography } from '@/elements';

import { CreateTokenSupplyFieldProps } from './create-token-form.types';

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
      isLarge
      balance="∞"
      name="amount"
      register={register}
      setValue={setValue}
    />
  </Box>
);

export default CreateTokenSupplyField;
