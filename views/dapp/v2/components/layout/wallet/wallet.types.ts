import { Dispatch, SetStateAction } from 'react';

export interface WalletDropdownProps {
  isOpen: boolean;
  loading: boolean;
  addressName: string | undefined;
  handleDisconnect: () => void;
}

export type WalletDropdownWrapperProps = WalletDropdownProps;

export interface WalletItemProps {
  name?: 'disconnect';
}

export interface WalletConnectProps {
  setIsConnected: Dispatch<SetStateAction<boolean>>;
}

export interface WalletConnectedProps {
  setIsConnected: Dispatch<SetStateAction<boolean>>;
}
