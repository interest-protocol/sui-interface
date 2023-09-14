import { SuiSystemStateSummary } from '@mysten/sui.js/src/types';
import { Control, UseFormRegister } from 'react-hook-form';

export interface IValidatorSearchForm {
  search: string;
}

export interface AllValidatorsProps {
  control: Control<IValidatorSearchForm>;
  activeValidators: SuiSystemStateSummary['activeValidators'];
}

export interface ValidatorSearchProps {
  register: UseFormRegister<IValidatorSearchForm>;
}
