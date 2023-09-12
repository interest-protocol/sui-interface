import { Control } from 'react-hook-form';

import {
  StakedProps,
  StakingFormProps,
} from '@/views/dapp/v2/lst/staked/staked.types';

import { LSTForm } from '../../../lst.types';

export interface AmountFieldProps {
  isStake: boolean;
  suiUSDPrice: number;
  exchangeRate: number;
  form: StakedProps['form'];
}

export interface AmountFieldDollarsProps {
  control: Control<LSTForm>;
  usdPrice: AmountFieldProps['suiUSDPrice'];
}

export type YourInfoProps = StakingFormProps;
