import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import {
  AllValidatorsProps,
  IValidatorSearchForm,
} from './all-validators.types';
import ValidatorSearch from './validator-search';
import ValidatorsTable from './validators-table';

const AllValidators: FC<AllValidatorsProps> = ({ activeValidators }) => {
  const { control, register } = useForm<IValidatorSearchForm>({
    defaultValues: { search: '' },
  });

  return (
    <Box bg="surface.container" p="l" borderRadius="0.5rem">
      <ValidatorSearch register={register} />
      <ValidatorsTable activeValidators={activeValidators} control={control} />
    </Box>
  );
};

export default AllValidators;
