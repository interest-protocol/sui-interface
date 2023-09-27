import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { IValidatorSearchForm } from '@/views/dapp/v2/lst/validators/all-validators/all-validators.types';

import HeaderModal from '../header-modal';
import { ValidatorListProps } from '../modal.types';
import ValidatorListBody from './validator-body';
import ValidatorSearch from './validator-search';

const ValidatorList: FC<ValidatorListProps> = ({
  handleClose,
  handleSelected,
  validators,
  currentValidatorAddress,
}) => {
  const { dark } = useTheme() as Theme;

  const { control, register } = useForm<IValidatorSearchForm>({
    defaultValues: { search: '' },
  });

  return (
    <Box
      width={['90vw', '90vw', '90vw', '44rem']}
      height={['90vh', '90vh', '90vh', 'auto']}
      borderRadius="1rem"
      bg={dark ? 'black' : 'white'}
      display="flex"
      flexDirection="column"
    >
      <Box bg="surface.dim" borderRadius="1rem 1rem 0 0">
        <HeaderModal
          title="Choose a Validator"
          handleClose={handleClose}
          withoutBack
        />
      </Box>
      <Box px="xl" pb="0.875rem" borderRadius="0 0 1rem 1rem" bg="surface.dim">
        <ValidatorSearch register={register} />
      </Box>
      <ValidatorListBody
        control={control}
        validators={validators}
        handleSelected={handleSelected}
        currentValidatorAddress={currentValidatorAddress}
      />
    </Box>
  );
};

export default ValidatorList;
