import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type TCreateTokenFieldNames =
  | 'amount'
  | 'symbol'
  | 'name'
  | 'iconUrl'
  | 'description';

export type TCreateTokenForm = Record<TCreateTokenFieldNames, string>;

export interface CreateTokenFieldProps {
  label: string;
  required?: boolean;
  name: TCreateTokenFieldNames;
  register: UseFormRegister<TCreateTokenForm>;
}

export interface CreateTokenSupplyFieldProps {
  label: string;
  register: UseFormRegister<TCreateTokenForm>;
  setValue: UseFormSetValue<TCreateTokenForm>;
}

export interface CreateTokenFormProps {
  handleCloseModal: () => void;
}

export interface CreateTokenButtonProps {
  control: Control<TCreateTokenForm>;
}
