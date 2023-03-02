import { UseFormGetValues, UseFormReset } from 'react-hook-form';

import { FarmDetailsData } from '../../farm-details.types';

export interface HarvestButtonProps {
  refetch: () => Promise<void>;
  farm: FarmDetailsData;
}

export interface ModalButtonProps {
  farm: FarmDetailsData;
  refetch: () => Promise<void>;
  getValues: UseFormGetValues<{ amount: string }>;
  isStake: boolean;
  resetForm: UseFormReset<{ amount: string }>;
}
