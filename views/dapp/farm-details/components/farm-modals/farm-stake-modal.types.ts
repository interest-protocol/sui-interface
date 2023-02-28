import { Dispatch, SetStateAction } from 'react';

import { FarmDetailsData, ModalState } from '../../farm-details.types';

export interface FarmStakeModalProps {
  farm: FarmDetailsData;
  farmSymbol: string;
  refetch: () => Promise<void>;
  setHasAccount: (arg: boolean) => void;
  // setModalState: Dispatch<SetStateAction<ModalState>>;
  // modalState: ModalState;
}
