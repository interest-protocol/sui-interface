import { FarmDetailsData, FarmDetailsProps } from './../../farm-details.types';

export interface FarmOptionsProps {
  farm: FarmDetailsData;
  refetch: () => Promise<void>;
  modalState: FarmDetailsProps['modalState'];
  setModalState: FarmDetailsProps['setModalState'];
  form: FarmDetailsProps['form'];
}
