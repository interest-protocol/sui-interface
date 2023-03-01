import { Control, UseFormGetValues } from 'react-hook-form';

import { FarmDetailsData } from '../../farm-details.types';

export interface HarvestButtonProps {
  refetch: () => Promise<void>;
  farm: FarmDetailsData;
}

export interface ModalButtonProps {
  farm: FarmDetailsData;
  refetch: () => Promise<void>;
  setHasAccount: (arg: boolean) => void;
  getValues: UseFormGetValues<{ amount: string }>;
  isStake: boolean;
}
