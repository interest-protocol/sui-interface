import { UseFormGetValues, UseFormReset } from 'react-hook-form';

import { FarmOptionsProps } from '@/views/dapp/farm-details/components/farm-options/farm-options.types';

import { FarmDetailsData } from '../../farm-details.types';

export interface HarvestButtonProps {
  mutatePendingRewards: FarmOptionsProps['mutatePendingRewards'];
  farm: FarmDetailsData;
}

export interface ModalButtonProps {
  farm: FarmDetailsData;
  mutatePools: FarmOptionsProps['mutatePools'];
  mutateFarms: FarmOptionsProps['mutateFarms'];
  mutatePendingRewards: FarmOptionsProps['mutatePendingRewards'];
  getValues: UseFormGetValues<{ amount: string }>;
  isStake: boolean;
  resetForm: UseFormReset<{ amount: string }>;
}
