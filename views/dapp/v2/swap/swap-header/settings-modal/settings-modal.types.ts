import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { LocalSwapSettings, SwapProps } from '../../swap.types';

export interface AutomatedPriceProps {
  setValue: UseFormSetValue<LocalSwapSettings>;
  control: Control<LocalSwapSettings>;
}

export interface SlippageToleranceProps {
  setValue: UseFormSetValue<LocalSwapSettings>;
  register: UseFormRegister<LocalSwapSettings>;
}

export interface TransactionDeadlineProps {
  register: UseFormRegister<LocalSwapSettings>;
}

export interface SettingsModalProps {
  formSettings: SwapProps['formSettings'];
  closeModal: () => void;
}
