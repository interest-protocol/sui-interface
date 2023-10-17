import { TextFieldProps } from '@interest-protocol/ui-kit';
import { Control, UseFormRegisterReturn } from 'react-hook-form';

import { BondsForm } from '../../context/bonds-context.types';

export interface MoneyInputProps
  extends Pick<TextFieldProps, 'Prefix'>,
    UseFormRegisterReturn<'amount'> {
  balance: string;
  isStake?: boolean;
  control: Control<BondsForm>;
  onChangeValue: (value: number) => void;
}

export interface MoneyInputErrorProps {
  control: Control<BondsForm>;
  isStake: boolean;
}
