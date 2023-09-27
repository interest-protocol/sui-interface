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

export interface IValidator {
  apy: string;
  name: string;
  imageUrl: string;
  suiAddress: string;
  projectUrl: string;
  votingPower: number;
  description: string;
  commissionRate: number;
  stakingPoolSuiBalance: string;
}

export interface ValidatorsTableDataProps {
  control: Control<IValidatorSearchForm>;
  validators: ReadonlyArray<IValidator>;
}
