import { Dispatch, SetStateAction } from 'react';

import {
  FarmDetailsData,
  FarmDetailsProps,
  ModalState,
} from '../../farm-details.types';
import { FarmOptionsProps } from '../farm-options/farm-options.types';

export interface FarmStakeModalProps {
  farm: FarmDetailsData;
  farmSymbol: string;
  mutatePools: FarmOptionsProps['mutatePools'];
  mutateFarms: FarmOptionsProps['mutateFarms'];
  mutatePendingRewards: FarmOptionsProps['mutatePendingRewards'];
  setModalState: Dispatch<SetStateAction<ModalState>>;
  modalState: ModalState;
  form: FarmDetailsProps['form'];
}
