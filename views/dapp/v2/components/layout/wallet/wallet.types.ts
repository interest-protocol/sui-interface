import { Dispatch, SetStateAction } from 'react';

export interface WalletDropdownProps {
  isOpen: boolean;
  loading: boolean;
  handleClose: () => void;
  suiNSRecord: Record<string, string>;
}

export type WalletDropdownWrapperProps = WalletDropdownProps;

export interface WalletItemProps {
  name?: 'disconnect';
}

export interface WalletProps {
  setOpenConnectWallet: Dispatch<SetStateAction<boolean>>;
}
