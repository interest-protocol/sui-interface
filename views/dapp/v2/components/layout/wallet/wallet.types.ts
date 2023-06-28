import { Dispatch, SetStateAction } from 'react';

export interface WalletDropdownProps {
  isOpen: boolean;
  loading: boolean;
  handleClose: () => void;
  suiNSRecord: Record<string, string>;
}

export interface WalletItemProps {
  name?: 'disconnect';
}

export interface WalletConnectProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface WalletProfileProps {
  suiNSRecord: Record<string, string>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
