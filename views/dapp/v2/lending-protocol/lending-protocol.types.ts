import { ReactNode } from 'react';
import {
  Control,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';

export interface LendCardProps {
  formLend: UseFormReturn<ILendForm, any>;
  balance: string;
  name: 'borrow' | 'repay';
}
export interface CardWrapperProps {
  position: 'left' | 'right';
  buttonDescription: string;
  control: Control<ILendForm, any>;
  name: 'borrow' | 'repay';
  children?: ReactNode | undefined;
}

export interface CardSectionProps {
  title: string;
  alignTitle?: 'left' | 'center' | 'right';
  padding?: string;
  isModal?: boolean;
  lines: ReadonlyArray<LineCardProps>;
}

export interface LineCardProps {
  description: string;
  value: string;
  Icon?: ReactNode;
}

export interface InputSectionProps {
  name: 'borrow' | 'repay';
  title: string;
  amount: string;
  Icon: ReactNode;
  placeholder: string;
  register: UseFormRegister<ILendForm>;
  setValue: UseFormSetValue<ILendForm>;
}

export interface ModalLoadingProps {
  message: string;
}
export interface ILendForm {
  borrow: LendFormTokenData;
  repay: LendFormTokenData;
}

export interface LendFormTokenData {
  value: string;
  type: string;
}
