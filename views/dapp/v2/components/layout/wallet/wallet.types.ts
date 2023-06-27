import { Dispatch, SetStateAction } from 'react';

export interface WalletDropdownProps {
  isOpen: boolean;
  loading: boolean;
  suiNSRecord: Record<string, string>;
  handleDisconnect: () => void;
}

export type WalletDropdownWrapperProps = WalletDropdownProps;

export interface WalletItemProps {
  name?: 'disconnect';
}

export interface WalletConnectProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
