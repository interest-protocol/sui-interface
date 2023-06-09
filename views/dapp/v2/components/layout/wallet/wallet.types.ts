export interface WalletDropdownProps {
  isOpen: boolean;
  loading: boolean;
  addressName: string | undefined;
}

export interface WalletDropdownWrapperProps extends WalletDropdownProps {
  handleClose: () => void;
}

export interface WalletItemProps {
  name?: 'disconnect';
}
