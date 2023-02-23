import { SafeUserFarmData, StakeState } from '../../farm-details.types';

export interface FarmStakeModalProps {
  amount: number;
  handleClose: () => void;
  modal: StakeState | undefined;
  farm: SafeUserFarmData;
  farmSymbol: string;
  refetch: () => Promise<void>;
  setHasAccount: (arg: boolean) => void;
}
