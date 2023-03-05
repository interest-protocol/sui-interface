import { KeyedMutator } from 'swr';

import { Farm } from '@/utils/farms/farms.types';

import { FarmDetailsData, FarmDetailsProps } from './../../farm-details.types';

export interface FarmOptionsProps {
  farm: FarmDetailsData;
  loading: boolean;
  modalState: FarmDetailsProps['modalState'];
  setModalState: FarmDetailsProps['setModalState'];
  form: FarmDetailsProps['form'];
  mutateFarms: KeyedMutator<ReadonlyArray<Farm>>;
  mutatePools: KeyedMutator<any>;
  mutatePendingRewards: KeyedMutator<BigInt>;
}
