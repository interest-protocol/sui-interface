import { ReactNode } from 'react';
import { Control, UseFormRegisterReturn } from 'react-hook-form';

import { LocalSwapSettings } from '../swap.types';

export interface ISwapSettingsForm {
  slippage: string;
  deadline: number;
  autoFetch: boolean;
}

export interface FieldProps {
  label: string;
  placeholder: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
  setRegister: () => UseFormRegisterReturn;
  max: string;
  type: string;
}

export interface SwapSettingsProps {
  toggle: () => void;
  setLocalSettings: (x: LocalSwapSettings) => void;
  localSettings: LocalSwapSettings;
}

export interface AutoFetchProps {
  setter: (value: boolean) => void;
  control: Control<ISwapSettingsForm>;
}
