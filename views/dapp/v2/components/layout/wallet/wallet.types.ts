import { Dispatch, SetStateAction } from 'react';

export interface WalletConnectProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
