import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';

import {
  OnSelectCurrency,
  SearchFieldForm,
} from './../components/select-currency/select-currency.types';

interface FormValue {
  type: string;
  name: string;
  value: string;
  symbol: string;
  decimals: number;
}

export interface DexFindPoolForm {
  tokenA: FormValue;
  tokenB: FormValue;
}

export interface FindPoolProps {
  control: Control<DexFindPoolForm>;
  formSearch?: UseFormReturn<SearchFieldForm>;
  getValues: UseFormGetValues<DexFindPoolForm>;
  onSelectCurrency: (name: 'tokenA' | 'tokenB') => OnSelectCurrency;
}

export interface CreatePoolProps {
  control: Control<DexFindPoolForm>;
  register: UseFormRegister<DexFindPoolForm>;
  setValue: UseFormSetValue<DexFindPoolForm>;
  getValues: UseFormGetValues<DexFindPoolForm>;
}

export interface CreatePoolFieldProps {
  name: 'tokenA' | 'tokenB';
  register: UseFormRegister<DexFindPoolForm>;
  setValue: UseFormSetValue<DexFindPoolForm>;
  getValues: UseFormGetValues<DexFindPoolForm>;
}

export interface PriceProps {
  control: Control<DexFindPoolForm>;
}

export interface FindPoolButtonProps {
  account: string;
  tokenAType: string;
  tokenBType: string;
  isCreatingPair: boolean;
  control: Control<DexFindPoolForm>;
  setCreatingPair: Dispatch<SetStateAction<boolean>>;
  getValues: UseFormGetValues<DexFindPoolForm>;
}
