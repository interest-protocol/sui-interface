import { UseFormReturn } from 'react-hook-form';

import { StakeForm } from '@/views/dapp/v2/lst/lst.types';

export interface StakedProps {
  form: UseFormReturn<StakeForm>;
}

export type StakingFormProps = StakedProps;
