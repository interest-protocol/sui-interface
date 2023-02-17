import { ReactNode } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface InputBalanceProps {
  balance: string;
  max?: string;
  disabled?: boolean;
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  name: any;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  isLarge: boolean;
  customFunction?: (name: string) => void;
  buttonMaxPosition: 'left' | 'right';
}

export interface ButtonMaxProps {
  max?: string;
  disabled?: boolean;
  name: any;
  setValue: UseFormSetValue<any>;
  customFunction?: (name: string) => void;
}
