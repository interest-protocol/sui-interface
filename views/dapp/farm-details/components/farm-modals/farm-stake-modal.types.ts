import { Dispatch, SetStateAction } from 'react';

import {
  FarmDetailsData,
  FarmDetailsProps,
  ModalState,
} from '../../farm-details.types';

export interface FarmStakeModalProps {
  farm: FarmDetailsData;
  farmSymbol: string;
  refetch: () => Promise<void>;
  setModalState: Dispatch<SetStateAction<ModalState>>;
  modalState: ModalState;
  form: FarmDetailsProps['form'];
}
