import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Control, UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';
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
  formSettingsDropdown: UseFormReturn<ISwapSettingsForm>;
  autoButtonState: {
    isAuto: boolean;
    setAuto: Dispatch<SetStateAction<boolean>>;
  };
  openModalState: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };
}

export interface SettingsDropdownProps {
  setLocalSettings: (x: LocalSwapSettings) => void;
  isOpen: boolean;
  onClose: () => void;
  formSettingsDropdown: UseFormReturn<ISwapSettingsForm>;
  autoButtonState: {
    isAuto: boolean;
    setAuto: Dispatch<SetStateAction<boolean>>;
  };
}

export interface ModalSettingsBody {
  onRequestClose: () => void;
  register: UseFormRegister<ISwapSettingsForm>;
  setValue: UseFormSetValue<ISwapSettingsForm>;
  control: Control<ISwapSettingsForm>;
  autoButtonState: {
    isAuto: boolean;
    setAuto: Dispatch<SetStateAction<boolean>>;
  };
}

export interface SettingsAutoButton {
  control: ModalSettingsBody['control'];
  setValue: ModalSettingsBody['setValue'];
  setAuto: Dispatch<SetStateAction<boolean>>;
}
