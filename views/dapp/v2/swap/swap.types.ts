import {
  UseFormGetValues,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';

import { CoinData } from '@/interface';

export interface SwapToken extends CoinData {
  value: string;
  locked: boolean;
}

export interface SwapForm {
  to: SwapToken;
  from: SwapToken;
}

export interface SwapProps {
  form: UseFormReturn<SwapForm>;
}

export interface SwapInputProps extends SwapProps {
  name: keyof SwapForm;
}

export interface SwapFieldProps {
  setValue: UseFormSetValue<SwapForm>;
  getValues: UseFormGetValues<SwapForm>;
}
