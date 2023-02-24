import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  Control,
  UseFormGetValues,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form';
import { UseFormSetValue } from 'react-hook-form';

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
  hasBorder?: boolean;
}

export interface SwapSettingsProps {
  setLocalSettings: (x: LocalSwapSettings) => void;
  localSettings: LocalSwapSettings;
}

export interface SettingsDropdownProps extends SwapSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalSettingsBody {
  onRequestClose: () => void;
  register: UseFormRegister<ISwapSettingsForm>;
  setValue: UseFormSetValue<ISwapSettingsForm>;
  getValues: UseFormGetValues<ISwapSettingsForm>;
  control: Control<ISwapSettingsForm>;
}

export interface SettingsAutoButton {
  control: ModalSettingsBody['control'];
  setValue: ModalSettingsBody['setValue'];
  setAuto: Dispatch<SetStateAction<boolean>>;
}
