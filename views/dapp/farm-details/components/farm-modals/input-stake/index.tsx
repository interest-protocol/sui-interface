import { FC } from 'react';

import { Box, InputBalance, Typography } from '@/elements';

import { InputStakeProps } from './input-stake.types';

const InputStake: FC<InputStakeProps> = ({
  label,
  balance,
  register,
  setValue,
  currencyPrefix,
}) => (
  <Box mb="L">
    <Typography as="label" fontSize="S" variant="normal" display="inline-block">
      {label}:
    </Typography>
    <InputBalance
      name="amount"
      max={String(balance)}
      balance={String(balance)}
      register={register}
      setValue={setValue}
      isLarge={false}
      buttonMaxPosition={'left'}
      Suffix={
        <Box
          px="L"
          display="flex"
          alignItems="center"
          borderRight="1px solid"
          borderColor="bottomBackground"
        >
          {currencyPrefix}
        </Box>
      }
    />
  </Box>
);

export default InputStake;
