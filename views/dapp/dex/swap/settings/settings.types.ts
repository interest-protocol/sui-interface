import { ReactNode } from 'react';
import { Control, UseFormRegisterReturn } from 'react-hook-form';

import { LocalSwapSettings } from '../swap.types';

export interface ISwapSettingsForm {
  slippage: string;
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
  setLocalSettings: (x: LocalSwapSettings) => void;
  localSettings: LocalSwapSettings;
}

export interface SettingsDropdownProps extends SwapSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AutoFetchProps {
  disabled?: boolean;
  setter: (value: boolean) => void;
  control: Control<ISwapSettingsForm>;
}
