import { UseFormReturn } from 'react-hook-form';

import { StakeForm } from '../lst.types';

export interface BondsProps {
  form: UseFormReturn<StakeForm>;
  type?: 'stake' | 'unstake' | 'rewards' | 'get-started';
}
