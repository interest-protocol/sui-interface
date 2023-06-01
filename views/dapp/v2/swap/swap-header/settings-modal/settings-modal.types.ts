import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface SwapSettingsForm {
  slippage: number;
  deadline: number;
  autoFetch: boolean;
}

export interface AutomatedPriceProps {
  setValue: UseFormSetValue<SwapSettingsForm>;
  control: Control<SwapSettingsForm>;
}

export interface SlippageToleranceProps {
  setValue: UseFormSetValue<SwapSettingsForm>;
  register: UseFormRegister<SwapSettingsForm>;
}

export interface TransactionDeadlineProps {
  register: UseFormRegister<SwapSettingsForm>;
}
