import { Control } from 'react-hook-form';

import { SafeUserFarmData, StakeState } from '../../farm-details.types';

export interface HarvestButtonProps {
  refetch: () => Promise<void>;
  farm: SafeUserFarmData;
}

export interface ModalButtonProps {
  farm: SafeUserFarmData;
  modal: StakeState | undefined;
  control: Control<{ value: string }>;
  handleClose: () => void;
  refetch: () => Promise<void>;
  isStake: boolean;
  setHasAccount: (arg: boolean) => void;
}
