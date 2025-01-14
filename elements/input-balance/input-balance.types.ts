import { ReactNode } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface InputBalanceProps {
  max?: boolean;
  balance: string | number;
  disabled?: boolean;
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  name: any;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  isLarge?: boolean;
  customFunction?: (name: string) => void;
  noCap?: boolean;
}

export interface MaxButtonProps {
  name: any;
  max?: string | number;
  disabled?: boolean;
  setValue: UseFormSetValue<any>;
  customFunction?: (name: string) => void;
}

export interface GenericMaxButtonProps {
  disabled: boolean;
  onClick: () => void;
}
